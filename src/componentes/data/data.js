const product = [
    {
        id:1,
        name: "Airpods",
        price: 30,
        descripcion: "",
        image:  "/public/img/airpods1.jpg",
        category:"auriculares"
    },
    {
        id:2,
        name: "Auriculares Samsung",
        price: 30,
        descripcion: "",
        image: "/public/img/auticularess241.jpg" ,
        category:"auriculares"
    },
    {
        id:3,
        name: "Auriculares Xiaomi",
        price: 30,
        descripcion: "",
        image: "/public/img/xiaomiau1.jpg" ,
        category:"auriculares"
    },
    {
        id: 4,
        name: "cargador Xiaomi",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/cargador1.jpg" ,
        category:"cargadores"
    },
    {
        id: 5,
        name: "cargador iphone",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/cargadoriphone1.jpg",
        category:"cargadores"
    },
    {
        id: 6,
        name: "cargador Samsung",
        price: "30€",
        descripcion: "",
        image: "/public/img/s241.jpg",
        category:"cargadores"
    },
    {
        id: 7,
        name: "Xiaomi 14t pro",
        price: 30,
        descripcion: "",
        image: "/public/img/xiaomi1.jpg",
        category:"celulares"
    },
    {
        id: 8,
        name: "Samsung s24",
        price: 30,
        descripcion: "" ,
        image:"/public/img/samsung1.jpg",
        category:"celulares"
    },
    {
        id: 9,
        name: "Iphone 15 pro",
        price: 30,
        descripcion: "Cargador rápido para iPhone de última generación.",
        image: "/public/img/iphone1.jpg" ,
        category:"celulares"
    }
];
const getProducts = () =>  {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(product)
        }, 2000)
    })
}

export {getProducts}