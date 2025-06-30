import {Component, ElementRef, Input, signal, ViewChild, WritableSignal} from '@angular/core';
import {NgForOf} from '@angular/common';
export interface Statistic {
  value: number;
  unit: string;
  label: string;
  icon?: string;
  classStyle: string;
  duration?: number;
  interval?: number;
  animatedValue?: number;
}

@Component({
  selector: 'app-statistics-widget',
  imports: [

  ],
  templateUrl: './statistics-widget.html',
  styleUrl: './statistics-widget.css'
})
export class StatisticsWidget {
  @Input() statistics: Statistic[] = [];

  @ViewChild('statisticsSection', { static: true }) statisticsSection!: ElementRef;

  private isAnimated: boolean = false;

  ngAfterViewInit(): void {
    this.createObserver();
  }

  private createObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isAnimated) {
          this.animateStatistics();
          this.isAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.statisticsSection.nativeElement);
  }

  private animateStatistics(): void {
    this.statistics.forEach(stat => {
      stat.animatedValue = 0;
      const total: WritableSignal<number> = signal(stat.value);
      const duration: WritableSignal<number> = signal(stat.duration ?? 5000);
      const intervalTime: WritableSignal<number> = signal(stat.interval ?? 10);
      const steps: WritableSignal<number> = signal(duration() / intervalTime());
      const increment: WritableSignal<number> = signal(Math.ceil(total() / steps()));
      let current = 0;

      const interval = setInterval(() => {
        if (current < total()) {
          current += increment();
          if (current > total()) {
            current = total();
          }
          stat.animatedValue = current;
        } else {
          clearInterval(interval);
        }
      }, intervalTime());
    });
  }
}
