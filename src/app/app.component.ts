import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor() {}

    ngOnInit() {
      let url = window.location.href;
      if(url.includes('?')){
        window.location.href='outlab/contact';
      }
    }
}
