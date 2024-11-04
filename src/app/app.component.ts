import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from "./register/register.component";

interface Fish {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  color: string;
  targetX: number;
  targetY: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, FormsModule, CommonModule, RegistrationComponent]
})
export class AppComponent {
  // implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild('pondContainer') pondContainer!: ElementRef;
  // @ViewChild('fishCanvas') fishCanvas!: ElementRef;

  // fishes: Fish[] = [];
  // width: number = 0;
  // height: number = 0;
  // private animationFrameId: number = 0;
  // private readonly NUM_FISH = 12;
  // isBrowser: boolean;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   this.isBrowser = isPlatformBrowser(platformId);
  // }

  // ngOnInit() {
  //   if (this.isBrowser) {
  //     this.width = window.innerWidth;
  //     this.height = window.innerHeight;
  //   }

  //   const colors = ['#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#00BCD4', '#3F51B5', '#FF9800', '#E91E63'];
  //   for (let i = 0; i < this.NUM_FISH; i++) {
  //     this.fishes.push({
  //       id: i,
  //       x: Math.random() * this.width,
  //       y: Math.random() * this.height,
  //       rotation: Math.random() * 360,
  //       scale: 0.5 + Math.random() * 0.5,
  //       speed: 1 + Math.random() * 2,
  //       color: colors[i % colors.length],
  //       targetX: Math.random() * this.width,
  //       targetY: Math.random() * this.height
  //     });
  //   }
  // }

  // ngAfterViewInit() {
  //   if (this.isBrowser) {
  //     this.animateFish();
  //   }
  // }

  // private animateFish() {
  //   this.fishes.forEach(fish => {
  //     const dx = fish.targetX - fish.x;
  //     const dy = fish.targetY - fish.y;
  //     const distance = Math.sqrt(dx * dx + dy * dy);

  //     if (distance < 10) {
  //       fish.targetX = Math.random() * this.width;
  //       fish.targetY = Math.random() * this.height;
  //     } else {
  //       fish.x += (dx / distance) * fish.speed;
  //       fish.y += (dy / distance) * fish.speed;
  //       fish.rotation = Math.atan2(dy, dx) * (180 / Math.PI);
  //     }

  //     // Fish goes to opposite side if out of bounds
  //     if (fish.x < -50) fish.x = this.width + 50;
  //     if (fish.x > this.width + 50) fish.x = -50;
  //     if (fish.y < -50) fish.y = this.height + 50;
  //     if (fish.y > this.height + 50) fish.y = -50;
  //   });

  //   this.animationFrameId = requestAnimationFrame(() => this.animateFish());
  // }

  // ngOnDestroy() {
  //   if (this.animationFrameId && this.isBrowser) {
  //     cancelAnimationFrame(this.animationFrameId);
  //   }
  // }

  // // Example method for fish shape
  // getFishPath(): string {
  //   return 'M10 0 C 20 10, 20 30, 10 40 S 0 20, 10 0';  // Simplified fish shape
  // }

  // // Example tail animation values (optional, can adjust)
  // getTailAnimation(): string {
  //   return 'M10 0 C 20 10, 20 30, 10 40 S 0 20, 10 0; M10 0 C 25 10, 25 30, 10 40 S 0 20, 10 0';  // Simplified tail wagging animation
  // }
  
}
