const product = [
    {
        id:1,
        name: "Airpods",
        price: 30,
        descripcion: "lorem32",
        image:  "/public/img/airpods1.jpg",
        category:"auriculares",
        stock:7
    },
    {
        id:2,
        name: "Auriculares Samsung",
        price: 30,
        descripcion: "",
        image: "/public/img/auticularess241.jpg" ,
        category:"auriculares",
        stock:16
    },
    {
        id:3,
        name: "Auriculares Xiaomi",
        price: 30,
        descripcion: "",
        image: "/public/img/xiaomiau1.jpg" ,
        category:"auriculares",
        stock:14
    },
    {
        id: 4,
        name: "cargador Xiaomi",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/cargador1.jpg" ,
        category:"cargadores",
        stock:31
    },
    {
        id: 5,
        name: "cargador iphone",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/cargadoriphone1.jpg",
        category:"cargadores",
        stock:21
    },
    {
        id: 6,
        name: "cargador Samsung",
        price: "30€",
        descripcion: "",
        image: "/public/img/s241.jpg",
        category:"cargadores",
        stock:32
    },
    {
        id: 7,
        name: "Xiaomi 14t pro",
        price: 30,
        descripcion: "",
        image: "/public/img/xiaomi1.jpg",
        category:"celulares",
        stock:6
    },
    {
        id: 8,
        name: "Samsung s24",
        price: 30,
        descripcion: "" ,
        image:"/public/img/samsung1.jpg",
        category:"celulares",
        stock:8
    },
    {
        id: 9,
        name: "Iphone 15 pro",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/iphone1.jpg" ,
        category:"celulares",
        stock:2
    }
];
const getProducts = () =>  {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(product)
        }, 1000)
    })
}

export {getProducts}