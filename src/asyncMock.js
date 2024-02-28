const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://www.macstation.com.ar/img/productos/2492-2317-1.jpg',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'celular',
        img: 'https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_SL1000_.jpg',
        stock: 16,
        description: 'Descripcion de Samsung S21'
    },
    {
        id: '3',
        name: 'Ipad 8va generacion',
        price: 1200,
        category: 'tablet',
        img: 'https://outtec.com.ar/wp-content/uploads/2021/06/1-8.png',
        stock: 10,
        description: 'Descripcion de Ipad 8va generacion'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}