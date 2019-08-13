import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  images = [
    "https://s.dspncdn.com/a1/webapp/img/content/featured/color-search-is-back-bg.jpg",
    "https://s.dspncdn.com/a1/webapp/img/content/featured/follow_instagram.jpg",
    "https://dspncdn.com/a1/prm/1512x/2400f1b816b51033fbbf0edb8bb6aa50.jpg",
    "https://s.dspncdn.com/a1/webapp/img/content/featured/color-search-is-back-bg.jpg",
    "https://s.dspncdn.com/a1/webapp/img/content/featured/follow_instagram.jpg",
    "https://dspncdn.com/a1/prm/1512x/2400f1b816b51033fbbf0edb8bb6aa50.jpg"
]

  constructor( ) {

  }
     config: SwiperOptions = {
      autoplay: 5000,
      initialSlide: 0,
      slidesPerView: 3, 
      nextButton: '.swiper-button-next', // Class for next button
      prevButton: '.swiper-button-prev', // Class for prev button
      spaceBetween: 30, // Space between each Item
      loop: true,
      mousewheel: true
    };
  

}

