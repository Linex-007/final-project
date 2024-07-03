import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about=[
    {
      id:1,
      title:"Stream Valley Homestay",
      image:"../../../assets/images/streamvally.jpeg",
      paragraph:"This homestay is designed to be perfect for sharing time with friends. The home stay is situated in the middle of a beautiful garden filled with Holiconia ...",
      link:"https://www.kakkadampoyil.com/stream-valley-homestay/"
   
    },
    {
      id:2,
      title:"Eadens Homestay Kakkadampoyil",
      image:"../../../assets/images/Eadens Homestay Kakkadampoyil.jpg",
      paragraph:"This classic “Nilambur teakwood” mansion with traditional twin 'Nadumuttoms', 'Machu'...",
      link:"https://www.kakkadampoyil.com/eadens-hermitage-homestay-in-kakkadampoyil/"
   
    },
    {
      id:3,
      title:"Puthiyakovilakam Homestay Kakkadampoyil",
      image:"../../../assets/images/Puthiyakovilakam Homestay Kakkadampoyil.jpg",
      paragraph:"Puthiyakovilakam Heritage Homestay is a budget and cheap homestay located at Nilambur.",
      link:"https://www.kakkadampoyil.com/puthiya-kovilakam-heritage-homestay-in-kakkadampoyil/"
   
    },
    {
      id:4,
      title:"Jungle Valley Camp",
      image:"../../../assets/images/jungle vally.jpg",
      paragraph:"Friendly staffBeautiful and picturesque locationExcellent food and hospitalityPure and cold mountain waterPerfect place for relaxation and escape from city ...",
      link:"https://www.justdial.com/Malappuram/Jungle-Valley-Camp/9999PX483-X483-181201101019-V2G6_BZDET"
   
    },
    {
      id:5,
      title:"Sahyadri Cottages Kakkadampoyil",
      image:"../../../assets/images/sahiyadri.jpg",
      paragraph:"Sahyadri Cottages is located at Karimbil Road, Kakkadampoyil which has well-furnished 8 cottages. ... Each cottage provides attractive natural view.",
      link:"https://www.kakkadampoyil.com/sahyadri-cottages-in-kakkadampoyil/"
   
    },
    {
      id:6,
      title:"Melvin’s Homestay Kakkadampoyil",
      image:"../../../assets/images/melvins.jpeg",
      paragraph:"Melvins Homestay is a budget and cheap homestay located at Mele Arrapetta, Meppadi which has well-furnished 3 king-sized bedrooms ...",
      link:"https://www.kakkadampoyil.com/melvins-homestay-in-kakkadampoyil/"
   
    },
  ]
}
