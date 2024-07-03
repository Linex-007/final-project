import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resorts',
  standalone: true,
  imports: [],
  templateUrl: './resorts.component.html',
  styleUrl: './resorts.component.css'
})
export class ResortsComponent {
  resorts=[
    {
      id:1,
      title:"Pinnacle Inn Kakkadampoyil",
      image:"../../../assets/images/Pinnacle-inn-1-1-350x200.jpg",
      paragraph:"Pinnacle Inn offers a comfortable residence for tourists visiting Kakkadampoyil to enjoy the beauty nature has bestowed on Malappuram district.",
      link:"https://www.kakkadampoyil.com/pinnacle-inn-kakkadampoyil-resort-with-swimming-pool/"
   
    },
    {
      id:2,
      title:"Cool Oxin Resort Kakkadampoyil",
      image:"../../../assets/images/COOL-OXIN-1-350x200.jpg",
      paragraph:"Cool Oxin Resort located on the hill at Kakkampoyil, Kerala with a beautiful valley view. Resort also provides off road jeep safari, campfire, trekking ...",
      link:"https://www.kakkadampoyil.com/cool-oxin-resort-kakkadampoyil/"
    },
    {
      id:3,
      title:"Sattva,The Awakening Garden",
      image:"../../../assets/images/sattvaresort-12-350x200.jpg",
      paragraph:"Sattva, The Awakening Garden is a luxury retreat with world-class amenities, nestled amidst the lush greenery of Western Ghats, Kakkadampoyil. Food and Dining ...",
      link:"https://www.kakkadampoyil.com/sattvathe-awakening-garden/"
    },
    {
      id:4,
      title:"Sylvan Hills Resorts, Kakkdampoyil",
      image:"../../../assets/images/Sylvan-Hills-Resort-1-350x200.jpeg",
      paragraph:"Sylvan Hills Resort is located in Kakkadampoyil, Kerala. Resort has an amazing infinity pool, premium villas, family villas, bachelors cottage, dormitory, ...",
      link:"https://www.kakkadampoyil.com/sylvan-hills-resort-kakkadampoyil/"
    },
    {
      id:5,
      title:"Mount View Resort Kakkadampoyil",
      image:"../../../assets/images/mount view.jpeg",
      paragraph:"Located in the picturesque town of Kakkadampoyil, Mount View Resort is perfectly situated between two hills. Offering stunning views from every room, ...",
      link:"https://www.kakkadampoyil.com/mount-view-resort-kakkadampoyil/"
    },
    {
      id:6,
      title:"Whistling Woods Jungle Stay, Kakkadampoyil",
      image:"../../../assets/images/Whistling-Woods-Jungle-Stay-1-350x200.jpg",
      paragraph:"Whistling Woods Jungle Stay is situated alongside the riverside, offering breathtaking views of Kakkadampoyil's scenic beauty. The most enticing feature is ...",
      link:"https://www.kakkadampoyil.com/whistling-woods-jungle-stay-kakkadampoyil/"
    },
   ]
  
  }
  

