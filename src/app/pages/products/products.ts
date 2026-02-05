import { Component, Input } from '@angular/core';
import { ProductsInterface } from '../productsInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {


  productos: ProductsInterface [] = [
    {
      nombre: 'Laptop Gamer X15',
      descripcion: 'Potente laptop con procesador Intel i7, 16GB RAM, SSD 512GB, tarjeta gráfica RTX 4060. Perfecta para gaming y tareas exigentes.',
      precio: 2.999,
      imagenUrl: 'https://www.cnet.com/a/img/resize/58a53be87da1802fb52f21afb3ea74f22001108e/hub/2019/05/24/88eaa6dd-0326-4504-b594-358c16111dea/alienware-m17-1.jpg?auto=webp&width=768'
    },
    {
      nombre: 'Smartphone Ultra 5G',
      descripcion: 'Pantalla AMOLED 6.7", cámara 108MP, 256GB almacenamiento, batería de larga duración y conectividad 5G.',
      precio: 1.499,
      imagenUrl: 'https://www.adobe.com/pr/creativecloud/photography/discover/media_186b0087c9a595ab9abd83d469a1f4d17d71da9c5.png?width=750&format=png&optimize=medium'
    },
    {
      nombre: 'Audífonos Inalámbricos Pro',
      descripcion: 'Cancelación activa de ruido, hasta 30h de batería, carga rápida y diseño ergonómico.',
      precio: 249.99,
      imagenUrl: 'https://www.steren.com.ec/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/21963678e/audifonos-bluetooth-con-cancelacion-de-ruido-grises.jpg'
    },
    {
      nombre: 'Smartwatch Serie X',
      descripcion: 'Monitor de salud 24/7, GPS integrado, resistencia al agua y múltiples modos deportivos.',
      precio: 199.99,
      imagenUrl: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/bT9cYCWSm3HDVmBmXdZtKj.jpg'
    },
    {
      nombre: 'IPad Air 64GB',
      descripcion: 'Pantalla Liquid Retina de 11 o 13 pulgadas, chip M3, Apple Intelligence, cámara frontal Center Stage de 12 MP, funciona con el Apple Pencil Pro.',
      precio: 899.99,
      imagenUrl: 'https://storepods.com.ua/content/uploads/images/apple-pen-1.jpg'
    },
    {
      nombre: 'AirPods 4',
      descripcion: 'Auriculares inalámbricos, Bluetooth, con Audio Espacial Personalizado, Resistentes al Agua y el Sudor, Estuche de Carga USB-C, Chip H2 y hasta 24 Horas de autonomía.',
      precio: 549.99,
      imagenUrl: 'https://i.blogs.es/385d90/_eln6316/840_560.jpeg'
    }
  ];

  }
