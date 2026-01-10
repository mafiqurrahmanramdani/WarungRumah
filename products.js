const productData = {
    makanan: [
        { "id": 101, "name": "Mie Sedaap Goreng", "price": 4000, "img": "assets/makanan/mie-sedaap-goreng.png" },
        { "id": 102, "name": "Mie Sedaap Ayam Bawang", "price": 3500, "img": "assets/makanan/mie-sedaap-ayam-bawang.png" },
        { "id": 103, "name": "Mie Sedaap Soto", "price": 3500, "img": "assets/makanan/mie-sedaap-soto.png" },
        { "id": 104, "name": "Mie Sedaap Kari Spesial", "price": 3500, "img": "assets/makanan/mie-sedaap-kari.png" },
        { "id": 105, "name": "Roma Kelapa", "price": 10000, "img": "assets/makanan/roma-kelapa.png" },
        { "id": 106, "name": "Nabati Wafer", "price": 2000, "img": "assets/makanan/nabati-wafer.png" },
        { "id": 107, "name": "Gery Salut", "price": 1000, "img": "assets/makanan/gery-salut.png" },
        { "id": 108, "name": "Roma Malkist", "price": 2000, "img": "assets/makanan/roma-malkist.png" },
        { "id": 109, "name": "Joyday Crunchy Choco Blueberry", "price": 5500, "img": "assets/makanan/joyday-crunchy-choco-blueberry.png" },
        { "id": 110, "name": "Joyday Cool Blueberry", "price": 3500, "img": "assets/makanan/joyday-cool-blueberry.png" },
        { "id": 111, "name": "Joyday Red Bean", "price": 3500, "img": "assets/makanan/joyday-red-bean.png" },
        { "id": 112, "name": "Joyday Crunchy Cookies Cream", "price": 5500, "img": "assets/makanan/joyday-crunchy-cookies-cream.png" },
        { "id": 113, "name": "Joyday Crunchy Chocolate Malt", "price": 5500, "img": "assets/makanan/joyday-crunchy-chocolate-malt.png" }
    ],
    minuman: [
        { "id": 201, "name": "Teh Pucuk Harum", "price": 5000, "img": "assets/minuman/teh-pucuk-harum.png" },
        { "id": 202, "name": "Lasegar Botol 200ml", "price": 4000, "img": "assets/minuman/lasegar-botol.png" },
        { "id": 203, "name": "Teh Rio Gelas", "price": 1000, "img": "assets/minuman/teh-rio.png" },
        { "id": 204, "name": "Happy Es Teler Big", "price": 2000, "img": "assets/minuman/happy-es-teler-big.png" },
        { "id": 205, "name": "Kopi Susu ABC", "price": 1500, "img": "assets/minuman/kopi-susu-abc.png" },
    ],
    lainnya: [
        { "id": 301, "name": "Beras Premium 1kg", "price": 14500, "img": "assets/sembako/beras.jpg" },
        { "id": 302, "name": "Minyak Goreng 1L", "price": 18500, "img": "assets/sembako/minyak-goreng.jpg" },
        { "id": 303, "name": "Telur Ayam (Butir)", "price": 2500, "img": "assets/sembako/telur.jpg" }
    ]
};

const getAllProducts = () => {
    return [...productData.makanan, ...productData.minuman, ...productData.lainnya];
};