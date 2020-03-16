import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var M:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const elemDropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemDropdown, {
      coverTrigger: false
    });
  }

  

}
