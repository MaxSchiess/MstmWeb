import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/swagger-code';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'mstm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data?: Observable<string>;
  ipsums: Array<string> = [];

  constructor(private readonly _exampleService: ExampleService) { }

  ngOnInit(): void {
    this.data = this._exampleService.apiExampleGet().pipe(
      map(o => JSON.stringify(o))
    );
    for (let i = 0; i < 100; i++) {
      this.ipsums.push('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');
    }
  }

}
