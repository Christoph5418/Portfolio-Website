import { AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import * as AOS from 'aos'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit{

  constructor(private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

  }
  imageScale: number = 1;
  constantHeight: number = 790;
  currentWindowWidth: number = 1440;
  mousex!: number;
  mousey!: number;
  isPhone: boolean = false;
  isOpen1: boolean = false;

  ngOnInit(): void {
    this.updateImageScale();
  } 

ngAfterViewInit(): void {
  setTimeout(() => {
    AOS.init({
      offset: 300,
      duration: 2500
    });
  }, 100);
}
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.updateImageScale();
  }

  updateImageScale() {
    this.currentWindowWidth = window.innerWidth;

    this.imageScale =1440/ this.currentWindowWidth; // Adjust the scaling factor as needed
    if(this.imageScale > 3)
    {
      this.imageScale = 3
    }

    if(this.currentWindowWidth <= 675){
      this.isPhone = true
    } else {
      this.isPhone = false
    }
  }

  onMouseMove(e: MouseEvent){
    const target = e.currentTarget as HTMLElement;

    const rect = target.getBoundingClientRect();
    
      this.mousex = e.clientX - rect.left,
      this.mousey = e.clientY - rect.top;
    
    const mousex = this.mousex;
    const mousey = this.mousey
    target.style.setProperty("--mousex", `$(mouse1)px`)
    target.style.setProperty("--mousey", `$(mouse2)px`)
    
    const gradientStyle = `radial-gradient(800px circle at ${mousex}px ${mousey}px, rgba(255, 255, 255, .07), transparent 40%)`;
    target.style.background = gradientStyle;

    // const allCards = document.querySelectorAll('.card');
  
    // for(let i = 0; i < allCards.length; i++){
    // }
  }

  onMouseLeave(e: MouseEvent){
    const target = e.currentTarget as HTMLElement;

    const gradientStyle = ``;
    target.style.background = gradientStyle;
  }


  switchOpen(){
    this.isOpen1 = !this.isOpen1;
  }


}
