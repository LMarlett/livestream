import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
// import 'src/assets/js/extras.js';
// declare var toggleFunction: any;
import $ from 'jquery';
import * as bootstrap from "bootstrap";
// import * as jquery from 'jquery';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: false
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    // new toggleFunction();

          $('#hideonclick>a').click(function (e) {
            close();
          }
        );

        $('#dropdownItem>a').click(function (e) {
          //$(".nav-item>dropdown-menu>a").click(function(e) {
            console.log('close1')
             $(".navbar-collapse").collapse('toggle');

          // close();
        }
      );

      function close(){
        console.log('close2')
        $('.navbar-collapse').collapse('toggle');
      }

  }

}
