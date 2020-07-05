import { Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import {OverlayContainer} from '@angular/cdk/overlay';

const MobileBreakpoints = [Breakpoints.Handset, Breakpoints.Tablet];

@Component({
  selector: 'mstm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidenavOpen: boolean;
  isAnyMobile: boolean;
  get sidenavMode(): string {
    return this.isAnyMobile ? 'over' : 'side';
  }

  constructor(private readonly _breakpointObserver: BreakpointObserver,
              private readonly _overlayContainer: OverlayContainer) {
    this.isAnyMobile = this._breakpointObserver.isMatched(MobileBreakpoints);
    this.sidenavOpen = !this.isAnyMobile;
    this._overlayContainer.getContainerElement().classList.add('mstm-dark-theme');
    document.body.classList.add('mstm-dark-theme');
  }

  ngOnInit(): void {
    this._breakpointObserver
      .observe(MobileBreakpoints)
      .subscribe({
        next: state => this.setLayout(state.matches)
      });
  }

  setLayout(mobile: boolean): void {
    this.isAnyMobile = mobile;
  }

}
