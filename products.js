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
        { "id": 203, "name": "Teh Rio", "price": 1000, "img": "assets/minuman/teh-rio.png" },
        { "id": 204, "name": "Happy Es Teler Big", "price": 2000, "img": "assets/minuman/happy-es-teler-big.png" },
        { "id": 205, "name": "Kopi Susu ABC", "price": 1500, "img": "assets/minuman/kopi-susu-abc.png" },
        { "id": 206, "name": "Floridina", "price": 4500, "img": "assets/minuman/floridina.png" },
        { "id": 207, "name": "Ale-Ale", "price": 1000, "img": "assets/minuman/ale-ale.png" }
    ],
    lainnya: [
        { "id": 301, "name": "Telur Ayam (Butir)", "price": 2000, "img": "assets/lainnya/telur-ayam.png" },
        { "id": 302, "name": "Sampo Sunsilk Sachet", "price": 1000, "img": "assets/lainnya/sampo-sunsilk.png" },
        { "id": 303, "name": "Sampo Lifebuoy Sachet", "price": 1000, "img": "assets/lainnya/sampo-lifebuoy.png" },
        { "id": 304, "name": "Sampo Clear Sachet", "price": 1000, "img": "assets/lainnya/sampo-clear.png" },
        { "id": 305, "name": "Sampo Pantene Sachet", "price": 1000, "img": "assets/lainnya/sampo-pantene.png" },
        { "id": 306, "name": "Masako Sachet", "price": 500, "img": "assets/lainnya/masako.png" },
        { "id": 307, "name": "Royco Sachet", "price": 500, "img": "assets/lainnya/royco.png" },
        { "id": 308, "name": "Sajiku Sachet", "price": 2500, "img": "assets/lainnya/sajiku.png" },
        { "id": 309, "name": "Racik Sachet", "price": 2500, "img": "assets/lainnya/racik.png" },
        { "id": 310, "name": "Ladaku Merica Bubuk", "price": 1000, "img": "assets/lainnya/ladaku.png" },
        { "id": 311, "name": "Sunlight Jeruk Nipis", "price": 2000, "img": "assets/lainnya/sunlight.png" },
        { "id": 312, "name": "Mama Lemon Jeruk Nipis", "price": 2000, "img": "assets/lainnya/mama-lemon.png" },
        { "id": 313, "name": "Rinso Bubuk 77gr", "price": 5000, "img": "assets/lainnya/rinso.png" },
        { "id": 314, "name": "Sabun Lux", "price": 4500, "img": "assets/lainnya/sabun-lux.png" },
        { "id": 315, "name": "Sabun Giv", "price": 3500, "img": "assets/lainnya/sabun-giv.png" },
        { "id": 316, "name": "Sabun Zen", "price": 4500, "img": "assets/lainnya/sabun-zen.png" },
        { "id": 317, "name": "Sabun Shinzui", "price": 4500, "img": "assets/lainnya/sabun-shinzui.png" },
        { "id": 318, "name": "Sabun Lervia", "price": 4000, "img": "assets/lainnya/sabun-lervia.png" },
        { "id": 319, "name": "Pepsodent White 75gr", "price": 6000, "img": "assets/lainnya/pepsodent.png" },
        { "id": 320, "name": "Sikat Gigi Formula (Medium)", "price": 5000, "img": "assets/lainnya/sikat-gigi.png" },
    ]
};

const getAllProducts = () => {
    return [...productData.makanan, ...productData.minuman, ...productData.lainnya];
};