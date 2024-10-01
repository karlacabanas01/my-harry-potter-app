import { ProductoHarryPotter } from './types';

export const questions = [
  {
    question: '¿Qué calidad valoras más en un amigo?',
    options: {
      Gryffindor: 'Valentía',
      Hufflepuff: 'Lealtad',
      Ravenclaw: 'Sabiduría',
      Slytherin: 'Ambición',
    },
  },
  {
    question: '¿Qué harías si ves a alguien rompiendo las reglas?',
    options: {
      Gryffindor: 'Lo enfrentas directamente',
      Hufflepuff: 'Intentas razonar con ellos',
      Ravenclaw: 'Lo reportas a las autoridades',
      Slytherin: 'Buscas sacar provecho de la situación',
    },
  },
  {
    question: '¿Qué asignatura sería tu favorita en Hogwarts?',
    options: {
      Gryffindor: 'Defensa Contra las Artes Oscuras',
      Hufflepuff: 'Cuidado de Criaturas Mágicas',
      Ravenclaw: 'Aritmancia',
      Slytherin: 'Pociones',
    },
  },
  {
    question: '¿Cuál es tu mayor meta en la vida?',
    options: {
      Gryffindor: 'Hacer lo correcto y proteger a los demás',
      Hufflepuff: 'Ser parte de una comunidad fuerte',
      Ravenclaw: 'Descubrir y aprender cosas nuevas',
      Slytherin: 'Alcanzar el éxito y el poder',
    },
  },
  {
    question: '¿Qué criatura mágica te fascina más?',
    options: {
      Gryffindor: 'Hipogrifo',
      Hufflepuff: 'Niffler',
      Ravenclaw: 'Fénix',
      Slytherin: 'Basilisco',
    },
  },
];

export const productosHarryPotter: ProductoHarryPotter[] = [
  {
    id: 1,
    nombre: 'Varita mágica personalizada',
    descripcion:
      'Varita personalizada inspirada en personajes y hechizos de Harry Potter.',
    precio: 19990,
    categoria: 'Accesorios',
    stock: 50,
    imagen: '/img/product/p1.jpg',
    peso: '0.2kg',
    dimensiones: '35cm x 2cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 2,
    nombre: 'Bufanda de Gryffindor',
    descripcion: 'Bufanda de lana con los colores de la casa Gryffindor.',
    precio: 14990,
    categoria: 'Ropa',
    stock: 30,
    imagen: '/img/product/p2.webp',
    peso: '0.3kg',
    dimensiones: '180cm x 25cm',
    envio: 'Envío solo dentro del país',
  },
  {
    id: 3,
    nombre: 'Collar giratiempo de Hermione',
    descripcion: 'Collar giratiempo similar al usado por Hermione en la saga.',
    precio: 12990,
    categoria: 'Accesorios',
    stock: 20,
    imagen: '/img/product/14.webp',
    peso: '0.05kg',
    dimensiones: '5cm x 5cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 4,
    nombre: 'Mapa del Merodeador',
    descripcion: 'Impresión del Mapa del Merodeador con detalles interactivos.',
    precio: 17990,
    categoria: 'Decoración',
    stock: 15,
    imagen: '/img/product/p4.webp',
    peso: '0.15kg',
    dimensiones: '60cm x 40cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 5,
    nombre: 'Grageas Bertie Bott de todos los sabores',
    descripcion:
      'Cajita de dulces tematizados de Grageas Bertie Bott de sabores aleatorios.',
    precio: 6990,
    categoria: 'Dulces',
    stock: 100,
    imagen: '/img/product/p5.jpeg',
    peso: '0.1kg',
    dimensiones: '10cm x 5cm x 5cm',
    envio: 'Envío solo dentro del país',
  },
  {
    id: 6,
    nombre: 'Taza de Harry Potter',
    descripcion:
      'Taza que cambia de color con líquidos calientes, mostrando imágenes del mundo de Harry Potter.',
    precio: 9990,
    categoria: 'Hogar',
    stock: 40,
    imagen: '/img/product/p6-1.jpg',
    peso: '0.35kg',
    dimensiones: '12cm x 8cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 7,
    nombre: 'Diario de Tom Riddle',
    descripcion: 'Diario de notas con estilo del Diario de Tom Riddle.',
    precio: 15990,
    categoria: 'Papelería',
    stock: 25,
    imagen: '/img/product/p7.jpg',
    peso: '0.4kg',
    dimensiones: '20cm x 15cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 8,
    nombre: 'Set de LEGO Harry Potter - Gran Comedor',
    descripcion:
      'Set de LEGO del Gran Comedor de Hogwarts, incluye minifiguras de personajes.',
    precio: 59990,
    categoria: 'Juguetes',
    stock: 10,
    imagen: '/img/product/p8.jpg',
    peso: '1.2kg',
    dimensiones: '40cm x 30cm x 10cm',
    envio: 'Disponible para envío internacional',
  },
  {
    id: 9,
    nombre: 'Cojín con escudo de Hogwarts',
    descripcion:
      'Cojín decorativo con el escudo de Hogwarts, ideal para decorar tu cama o sofá.',
    precio: 11990,
    categoria: 'Decoración',
    stock: 35,
    imagen: '/img/product/p12.avif',
    peso: '0.5kg',
    dimensiones: '40cm x 40cm',
    envio: 'Envío solo dentro del país',
  },
  {
    id: 10,
    nombre: 'Sudadera con capucha - Marca Tenebrosa',
    descripcion: 'Sudadera negra con el diseño de la Marca Tenebrosa.',
    precio: 24990,
    categoria: 'Ropa',
    stock: 20,
    imagen: '/img/product/p13.webp',
    peso: '0.6kg',
    dimensiones: 'Tallas S, M, L, XL',
    envio: 'Disponible para envío internacional',
  },
];
