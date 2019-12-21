import {Component, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
constructor(private element: ElementRef) {}

  ModalArray: any[]
  images: any[] 
  ArAus:any[]
  ArFr:any[]
  ArGer:any[]
  ArCan:any[]
  ArIre:any[]
  ArIta:any[]
  ArNew:any[]
  ArPol:any[]

  ngOnInit() {
    this.images = [
      {
        text: "Australia",
        image: "../../assets/images/countries/Australia/1175683-australia-wallpaper.jpg"
      },
      {
        text: "Germany",
        image: "../../assets/images/countries/Germany/heidelberg-wallpapers-28626-6804260.jpg"
      },
      {
        text: "Canada",
        image: "../../assets/images/countries/Canada/Toronto-Computer-Wallpaper.jpg"
      },
      {
        text: "France",
        image: "../../assets/images/countries/France/409591.jpg"
      },
      {
        text: "Ireland",
        image: "../../assets/images/countries/Ireland/screen-3.jpg"
      },
      {
        text: "Italy",
        image: "../../assets/images/countries/Italy/Travel-to-Rome-Italy-cathedral-river-bridge-dusk-lights_3840x2160.jpg"
      },
      {
        text: "South Korea",
        image: "../../assets/images/countries/SouthKorea/12 (2).jpg"
      },
      {
        text: "UK",
        image: "../../assets/images/countries/UK/172625.jpg"
      },
      {
        text: "USA",
        image: "../../assets/images/countries/USA/new-york-city-reflection-one-world-trade-center-new-wallpaper.jpg"
      },
      
    ]

    this.ArAus = [
      {
        image:"../../assets/images/SliderImages/Australia/Aus1.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Australia/Aus2.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Australia/Aus3.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Australia/Aus4.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Australia/Aus5.jpeg"
      }
    ]

    this.ArFr = [
      {
        image:"../../assets/images/SliderImages/France/France1.jpg"
      },
      {
        image:"../../assets/images/SliderImages/France/France2.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/France/France3.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/France/France4.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/France/France5.jpeg"
      }
    ]

    this.ArGer = [
      {
        image:"../../assets/images/SliderImages/Germany/Germany1.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Germany/Germany2.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Germany/Germany3.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Germany/Germany4.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Germany/Germany5.jpeg"
      }
    ]
    this.ArCan = [
      {
        image:"../../assets/images/SliderImages/Canada/Canada1.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Canada/Canada2.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Canada/Canada3.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Canada/Canada4.jpeg"
      },
      {
        image:"../../assets/images/SliderImages/Canada/Canada5.jpeg" 
      }
    ]


    this.ArIre = [
      {
        image:"../../assets/images/SliderImages/Ireland/ireland1.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Ireland/ireland2.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Ireland/ireland3.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Ireland/ireland4.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Ireland/ireland4.jpg"
      }
    ]
    this.ArIta = [
      {
        image:"../../assets/images/SliderImages/Italy/Italy1.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Italy/Italy2.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Italy/Italy3.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Italy/Italy4.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Italy/Italy5.jpg"
      }
    ]
    this.ArNew = [
      {
        image:"../../assets/images/SliderImages/Newzealand/NewZealand1.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Newzealand/NewZealand2.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Newzealand/NewZealand3.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Newzealand/NewZealand4.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Newzealand/NewZealand5.jpg"
      }
    ]
    this.ArPol = [
      {
        image:"../../assets/images/SliderImages/Poland/Poland1.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Poland/Poland2.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Poland/Poland3.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Poland/Poland4.jpg"
      },
      {
        image:"../../assets/images/SliderImages/Poland/Poland5.jpg"
      }
    ]

    
  }

  SlideOptions = { items: 1, dots: true, nav: true, autoplay:true,loop:true,slideSpeed : 2000, };  

  CarouselOptions = { 
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsiveRefreshRate : 200,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  };  

 
  GridSliderAus(){
    
    this.ModalArray=this.ArAus;
    
  }
  GridSliderFr(){
    
    this.ModalArray=this.ArFr;
    
  }
  GridSliderCan(){
    
    this.ModalArray=this.ArCan;
    
  }
  GridSliderGer(){
    
    this.ModalArray=this.ArGer;
    
  }
  GridSliderIre(){
    
    this.ModalArray=this.ArIre;
    
  }
  GridSliderPol(){
    
    this.ModalArray=this.ArPol;
    
  }
  GridSliderNew(){
    
    this.ModalArray=this.ArNew;
    
  }
  GridSliderIta(){
    
    this.ModalArray=this.ArIta;
    
  }



}
