import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('HeaderComponent constrcutor');
  }

  ngOnInit() {
    console.log('HeaderComponent ngOnInit');
  }

}
