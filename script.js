let currentDirectProduct = null;
let currentDirectQty = 1;
const allProducts = getAllProducts();
const phoneNumber = "6283866753442";
let cart = JSON.parse(localStorage.getItem('kios_cart')) || [];

function formatRupiah(num) {
    return "Rp " + num.toLocaleString('id-ID');
}

//Render Produk Beranda
function renderProducts(data = allProducts) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <img src="${p.img}" class="product-image">
            <div class="product-info">
                <div>
                    <h3>${p.name}</h3>
                    <span class="price">${formatRupiah(p.price)}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${p.id})" title="Tambah ke Keranjang">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                    <button class="btn-direct" onclick="directOrder(${p.id})">Beli Langsung</button>
                </div>
            </div>
        </div>
    `).join('');
}

//Filter Kategori
function filterCategory(cat, e) {
    document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const filtered = cat === 'semua' ? allProducts : allProducts.filter(p => 
        Object.keys(productData).find(key => key === cat && productData[key].find(item => item.id === p.id))
    );
    renderProducts(filtered);
}

//Tambah ke Keranjang
function addToCart(id) {
    const p = allProducts.find(i => i.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) { existing.quantity++; } else { cart.push({...p, quantity: 1}); }
    saveCart();
    updateCartBadge();
    alert(p.name + " masuk keranjang!");
}

//Update Jumlah di Keranjang
function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        renderCart();
        updateCartBadge();
    }
}

//Pesan Langsung (WhatsApp)
// Membuka Modal
function directOrder(id) {
    currentDirectProduct = allProducts.find(p => p.id === id);
    currentDirectQty = 1; // Reset jumlah ke 1
    
    document.getElementById('modal-product-name').innerText = currentDirectProduct.name;
    document.getElementById('modal-qty-value').innerText = currentDirectQty;
    document.getElementById('direct-modal').style.display = 'flex';
    
    // Set fungsi klik pada tombol konfirmasi di modal
    document.getElementById('btn-confirm-direct').onclick = function() {
        sendDirectToWA();
    };
}

// Mengubah angka di modal
function changeModalQty(delta) {
    currentDirectQty += delta;
    if (currentDirectQty < 1) currentDirectQty = 1;
    document.getElementById('modal-qty-value').innerText = currentDirectQty;
}

// Menutup Modal
function closeDirectModal() {
    document.getElementById('direct-modal').style.display = 'none';
}

// Kirim ke WA setelah pilih jumlah
function sendDirectToWA() {
    const p = currentDirectProduct;
    const totalHarga = p.price * currentDirectQty;
    const text = `Halo Warung Rumah, saya ingin beli langsung:\n- ${p.name} (${currentDirectQty}x)\nTotal: ${formatRupiah(totalHarga)}\n\nMohon diproses, terima kasih.`;
    
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
    closeDirectModal();
}

// Tutup modal jika user klik di luar kotak modal
window.onclick = function(event) {
    const modal = document.getElementById('direct-modal');
    if (event.target == modal) {
        closeDirectModal();
    }
}

// Utils
function saveCart() { localStorage.setItem('kios_cart', JSON.stringify(cart)); }
function updateCartBadge() { 
    const badge = document.getElementById('cart-count');
    if(badge) badge.innerText = cart.reduce((s, i) => s + i.quantity, 0); 
}

//fungsi removeFromCart 
function removeFromCart(id) {
    if(confirm("Hapus barang ini dari keranjang?")) {
        cart = cart.filter(i => i.id !== id);
        saveCart();
        renderCart();
        updateCartBadge();
    }
}

// Inisialisasi Alamat
let addresses = JSON.parse(localStorage.getItem('kios_addresses')) || [];
let selectedAddressIndex = localStorage.getItem('kios_selected_address') || 0;

function toggleAddressForm() {
    const form = document.getElementById('address-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function saveNewAddress() {
    const name = document.getElementById('addr-name').value;
    const phone = document.getElementById('addr-phone').value;
    const detail = document.getElementById('addr-detail').value;

    if (!name || !phone || !detail) return alert("Mohon isi semua data alamat!");

    const newAddr = { name, phone, detail };
    addresses.push(newAddr);
    localStorage.setItem('kios_addresses', JSON.stringify(addresses));
    
    // Reset form
    document.getElementById('addr-name').value = "";
    document.getElementById('addr-phone').value = "";
    document.getElementById('addr-detail').value = "";
    
    toggleAddressForm();
    renderAddressList();
}

function renderAddressList() {
    const list = document.getElementById('address-list');
    if (!list) return;

    if (addresses.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px;'>Belum ada alamat tersimpan.</p>";
        return;
    }

    list.innerHTML = addresses.map((addr, index) => `
        <div class="address-card ${index == selectedAddressIndex ? 'selected' : ''}">
            <h4>${addr.name} ${index == selectedAddressIndex ? '<small>(Utama)</small>' : ''}</h4>
            <p><i class="fas fa-phone"></i> ${addr.phone}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${addr.detail}</p>
            <div class="address-actions">
                <button class="btn-select-addr" onclick="selectAddress(${index})">
                    ${index == selectedAddressIndex ? 'Dipilih' : 'Pilih Alamat'}
                </button>
                <button class="btn-delete-addr" onclick="deleteAddress(${index})">Hapus</button>
            </div>
        </div>
    `).join('');
}

function selectAddress(index) {
    selectedAddressIndex = index;
    localStorage.setItem('kios_selected_address', index);
    renderAddressList();
}

function deleteAddress(index) {
    if (confirm("Hapus alamat ini?")) {
        addresses.splice(index, 1);
        if (selectedAddressIndex >= addresses.length) selectedAddressIndex = 0;
        localStorage.setItem('kios_addresses', JSON.stringify(addresses));
        localStorage.setItem('kios_selected_address', selectedAddressIndex);
        renderAddressList();
    }
}

// Konfigurasi Ongkir Sederhana
const BIAYA_ONGKIR = 5000;
const MIN_GRATIS_ONGKIR = 50000;

function hitungOngkir(totalBelanja) {
    if (totalBelanja >= MIN_GRATIS_ONGKIR || totalBelanja === 0) return 0;
    return BIAYA_ONGKIR;
}

// RENDER KERANJANG
function renderCart() {
    const container = document.getElementById('cart-items');
    if (!container) return;

    let totalBelanja = 0;
    container.innerHTML = cart.map(i => {
        totalBelanja += i.price * i.quantity;
        return `
            <div class="cart-item">
                <div class="item-info"><strong>${i.name}</strong><br><small>${formatRupiah(i.price)}</small></div>
                <div class="item-controls">
                    <div class="qty-controls">
                        <button onclick="updateQty(${i.id}, -1)">-</button>
                        <span>${i.quantity}</span>
                        <button onclick="updateQty(${i.id}, 1)">+</button>
                    </div>
                    <strong>${formatRupiah(i.price * i.quantity)}</strong>
                    <button class="btn-remove" onclick="removeFromCart(${i.id})"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');

    const ongkir = hitungOngkir(totalBelanja);
    const totalAkhir = totalBelanja + ongkir;

    // Tambahkan baris ongkir di ringkasan
    document.getElementById('cart-items').innerHTML += `
        <div class="shipping-info">
            <span>Ongkos Kirim:</span>
            <span>${ongkir === 0 ? '<b style="color:green;">Gratis</b>' : formatRupiah(ongkir)}</span>
        </div>
    `;

    document.getElementById('total-amount').innerText = formatRupiah(totalAkhir);
}

//CHECKOUT WHATSAPP
function checkoutWhatsApp() {
    if (cart.length === 0) return alert("Keranjang kosong!");
    
    const activeAddr = addresses[selectedAddressIndex];
    if (!activeAddr) {
        alert("Mohon atur alamat pengiriman terlebih dahulu!");
        window.location.href = "address.html";
        return;
    }

    let text = "*PESANAN BARU WARUNG RUMAH*\n------------------\n";
    let totalBelanja = 0;
    cart.forEach((i, index) => {
        text += `${index+1}. ${i.name} (${i.quantity}x) = ${formatRupiah(i.price * i.quantity)}\n`;
        totalBelanja += i.price * i.quantity;
    });
    
    const ongkir = hitungOngkir(totalBelanja);
    const totalAkhir = totalBelanja + ongkir;

    text += `------------------\n`;
    text += `Total Belanja: ${formatRupiah(totalBelanja)}\n`;
    text += `Ongkir: ${ongkir === 0 ? 'Gratis' : formatRupiah(ongkir)}\n`;
    text += `*TOTAL PEMBAYARAN: ${formatRupiah(totalAkhir)}*\n\n`;
    text += `*ALAMAT TUJUAN:*\nNama: ${activeAddr.name}\nHP: ${activeAddr.phone}\nAlamat: ${activeAddr.detail}`;
    
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
}