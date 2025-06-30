import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header2-center',
  imports: [],
  templateUrl: './header2-center.html',
  styleUrl: './header2-center.css'
})
export class Header2Center {
  @Input() title: string = '';
}
