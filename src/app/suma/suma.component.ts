import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  result = 0;
  list: any[] = [];
  isEmpty1 = undefined;
  isEmpty2 = undefined;
  id = 1;
  sumId: any;
  sumas: any[] = [];
  text: any[] = [];
  info = {
    id: 0,
    a: '',
    b: '',
    r: 0
  };

  constructor(
    private principalService: PrincipalService,
    private activatedRoute: ActivatedRoute
    ) {}


  ngOnInit(): void {

  }

  sendValues(form: NgForm): void {
    const values = form.value;
    this.result = +values.value1 + +values.value2;
    console.log(this.result);

    this.info = {
      id: this.id++,
      a: values.value1,
      b: values.value2,
      r: this.result
    };
    this.principalService.setSuma(this.info);
    /* this.sumas = this.principalService.getListaSumas();

    this.text = this.sumas.map(data => {
      return 'ID: ' + data.id + ' Valor 1: ' + data.a + '   Valor 2: ' + data.b + '   Resultado: ' + data.r + '\n';
    });

    console.log('SUMAS' + JSON.stringify(this.sumas)); */
  }

}
