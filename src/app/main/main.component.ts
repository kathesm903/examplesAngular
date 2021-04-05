import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router';
import { PrincipalService } from '../services/principal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  listColumnSelect: any[] = [];
  columnsConn: any;
  displayedColumns: any[] = [];
  sumas: any = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();


  constructor(
    private principalService: PrincipalService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.columnsConn = {
      a: 'Valor 1',
      b: 'Valor 2',
      r: 'Resultado',
      actions: 'Acciones'
    };

    this.listColumnSelect = [
      {value: 'a', description: 'Valor 1'},
      {value: 'b', description: 'Valor 2'},
      {value: 'r', description: 'Resultado'},
    ];
    this.displayedColumns = ['a', 'b', 'r', 'actions'];

    this.sumas = this.principalService.getListaSumas();
    console.log('Lista de Sumas: ' + JSON.stringify(this.sumas));
    this.dataSource = new MatTableDataSource(this.sumas);
  }

  /* onUpdate(sum: any): void {

    const id = +sum.id;
    console.log('UPDATE: ' + id);
    this.router.navigate([`suma/${id}`]);
  } */

  onDelete(sum: any): void {
    const id = +sum.id;
    this.principalService.delete(id);
    this.router.navigate([`suma/`]);
  }
}
