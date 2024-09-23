import { Component, AfterViewInit, NgZone } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kid-product-1-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kid-product-1-detail.component.html',
  styleUrls: ['./kid-product-1-detail.component.css']
})
export class KidProduct1DetailComponent implements AfterViewInit {
  private currentIndex: number = 0;
  private slides: HTMLImageElement[] = [];
  private totalSlides: number = 0;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const slideElements = document.querySelectorAll('.product__big__img') as NodeListOf<HTMLImageElement>;
      this.slides = Array.from(slideElements);
      this.totalSlides = this.slides.length;

      this.showSlide(this.currentIndex);
      setInterval(() => {
        this.moveSlide(1);
      }, 3000);
    });
  }

  private showSlide(index: number) {
    if (index >= this.totalSlides) {
      this.currentIndex = 0;
    } else if (index < 0) {
      this.currentIndex = this.totalSlides - 1;
    } else {
      this.currentIndex = index;
    }
    
    const offset = -this.currentIndex * 100;
    const slider = document.querySelector('.product__details__pic__slider') as HTMLElement;
    slider.style.transform = `translateX(${offset}%)`;
  }

  public moveSlide(direction: number) {
    this.showSlide(this.currentIndex + direction);
  }
}
