import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { isMobile } from 'src/app/app.component';

@Component({
  selector: 'mstm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() menuClickChange: EventEmitter<void> = new EventEmitter();
  
  get text(): string {
    return isMobile ? 'MSTM e.V.' : 'Musikverein Sankt Mang e.V.'
  }

  constructor(private readonly _elementRef: ElementRef) { }
}
