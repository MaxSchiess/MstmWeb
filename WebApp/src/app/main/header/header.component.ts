import { Component, Output, EventEmitter } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'mstm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() menuClickChange: EventEmitter<void> = new EventEmitter();

  get text(): string {
    return this.isHandsetPortrait ? 'MSTM e.V.' : 'Musikverein Sankt Mang e.V.'
  }
  isHandsetPortrait = false;

  constructor(private readonly _breakpointObserver: BreakpointObserver) {
    _breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .subscribe(r => this.isHandsetPortrait = r.matches);
  }
}
