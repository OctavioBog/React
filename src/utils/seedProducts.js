import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    category: "cargadores",
    descripcion: "Cargador Samsung de alta velocidad, diseño moderno y portátil, duradero, compatible con múltiples dispositivos y protección avanzada contra sobrecargas",
    image: "/public/img/s241.jpg",
    name: "Cargador Samsung",
    price: 68,
    stock: 25,
  },
  {
    category: "celulares",
    descripcion: "El iPhone 15 Pro redefine la innovación con su potente chip A17 Bionic, diseño de titanio ultraligero, pantalla Super Retina XDR, cámaras avanzadas con grabación ProRes, batería optimizada y conectividad USB-C. Una experiencia premium para los más exigentes",
    image: "/public/img/iphone1.jpg",
    name: "iphone 15 pro",
    price: 1499,
    stock: 3,
  },
  {
    category: "auriculares",
    descripcion: "Auriculares inalámbricos Samsung con sonido premium, diseño ergonómico, cancelación de ruido activa, control táctil, carga rápida y estuche portátil.",
    image: "/public/img/auticularess241.jpg",
    name: "Auriculares Samsung",
    price: 45,
    stock: 16,
  },
  {
    category: "auriculares",
    descripcion: "Auriculares inalámbricos con sonido envolvente, diseño ergonómico, cancelación de ruido, control táctil, carga rápida y estuche compacto.",
    image: "/public/img/airpods1.jpg",
    name: "Airpods",
    price: 30,
    stock: 7,
  },
  {
    category: "celulares",
    descripcion: "El Samsung Galaxy S24 combina potencia y elegancia con un procesador de alto rendimiento, pantalla Dynamic AMOLED 2X de calidad superior, cámaras avanzadas con capacidades profesionales, batería de larga duración con carga rápida, y diseño premium. Ideal para productividad y entretenimiento.",
    image: "/public/img/samsung1.jpg",
    name: "Samsung S24",
    price: 1350,
    stock: 8,
  },
  {
    category: "cargadores",
    descripcion: "Cargador Xiaomi con carga rápida, diseño compacto, alta eficiencia, materiales duraderos, compatible con múltiples dispositivos y protección contra sobrecalentamiento",
    image: "/public/img/cargador1.jpg",
    name: "Cargador Xiaomi",
    price: 35,
    stock: 31,
  },
  {
    category: "celulares",
    descripcion: "El Xiaomi 14T Pro ofrece un rendimiento excepcional con su procesador de última generación, pantalla AMOLED de alta resolución, cámara triple avanzada para fotos y videos impresionantes, batería de larga duración con carga rápida, y diseño elegante. Perfecto para quienes buscan tecnología de vanguardia.",
    image: "/public/img/xiaomi1.jpg",
    name: "Xiaomi 14T Pro",
    price: 1200,
    stock: 6,
  },
  {
    category: "auriculares",
    descripcion: "Auriculares inalámbricos Xiaomi con sonido de alta calidad, diseño ergonómico, cancelación de ruido, control táctil, carga rápida y estuche compacto",
    image: "/public/img/xiaomiau1.jpg",
    name: "Auriculares Xiaomi",
    price: 25,
    stock: 14,
  },
  {
    category: "cargadores",
    descripcion: "Cargador rápido para iPhone de última generación",
    image: "/public/img/cargadoriphone1.jpg",
    name: "Cargador Iphone",
    price: 55,
    stock: 32,
  },
];


const seedProducts = async () => {
  try {
    const productsRef = collection(db, "products");
    
    
    for (let product of products) {
      await addDoc(productsRef, product); 
    }
    
    console.log("Productos subidos correctamente");
  } catch (error) {
    console.log("Error al subir los productos:", error);
  }
};

seedProducts();
