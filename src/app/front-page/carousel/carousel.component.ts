import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from 'src/app/interface/ec-template.interface';
// import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  data: CarouselInfo[] = [
    {
      title: 'Hi there!',
      description: 'Welcome to our website',
      img: 'https://picsum.photos/2800/700?random=9',
      button: { display: true, content: 'Payment Pot', href: '#' }
    },
    {
      title: 'This is an anti-nudge website',
      description: '',
      img: 'https://picsum.photos/2800/700?random=10',
      button: { display: true, content: 'Payment Pot', href: '#' }
    },
    {
      title: 'Hope you have a good time shopping',
      description: '',
      img: 'https://picsum.photos/2800/700?random=11',
      button: { display: true, content: 'Payment Pot', href: '#' }
    }
  ];

  constructor() {}

  ngOnInit() {}

  onClick(){
    
  }
}
