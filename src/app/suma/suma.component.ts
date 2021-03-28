import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  result = 0;
  isEmpty1 = undefined;
  isEmpty2 = undefined;

  constructor() { }


  ngOnInit(): void {
  }

  sendValues(form: NgForm): void {
    const values = form.value;
    this.result = +values.value1 + +values.value2;
    console.log(this.result);
  }

}
