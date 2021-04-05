import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  suma(): void {
    console.log('SUMA');
    this.router.navigate([`suma/`]);
  }

  listaSumas(): void {
    console.log('Lista');
    this.router.navigate([`main/`]);
  }

  inicio(): void {
    console.log('inicio');
    this.router.navigate([`inicio/`]);
  }
}
