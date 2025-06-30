import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-and-tag',
  imports: [],
  templateUrl: './header-and-tag.html',
  styleUrl: './header-and-tag.css'
})
export class HeaderAndTag {
  @Input() title: string = '';
  @Input() description: string = '';
}
