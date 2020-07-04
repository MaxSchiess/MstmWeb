import { Component, OnInit, ViewChild, AfterContentInit, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { HeaderComponent } from './main/header/header.component';
import {OverlayContainer} from '@angular/cdk/overlay';

const MobileBreakpoints = [Breakpoints.Handset, Breakpoints.Tablet];

export let isMobile = false;

@Component({
  selector: 'mstm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  sidenavOpen: boolean;
  get sidenavMode(): string {
    return isMobile ? 'over' : 'side';
  }

  constructor(private readonly _breakpointObserver: BreakpointObserver,
              private readonly _overlayContainer: OverlayContainer) {
    isMobile = this._breakpointObserver.isMatched(MobileBreakpoints);
    this.sidenavOpen = !isMobile;
    this._overlayContainer.getContainerElement().classList.add('mstm-dark-theme');
    document.body.classList.add('mstm-dark-theme');
  }

  ngOnInit(): void {
    this.removeJavascriptWarning();
    this._breakpointObserver
      .observe(MobileBreakpoints)
      .subscribe({
        next: state => this.setLayout(state.matches)
      });
  }

  setLayout(mobile: boolean): void {
    isMobile = mobile;
  }

  removeJavascriptWarning(): void {
    const javascriptWarning = document.getElementById('javascript-warning');
    if (javascriptWarning) {
      document.body.removeChild(javascriptWarning);
    }
  }

}
