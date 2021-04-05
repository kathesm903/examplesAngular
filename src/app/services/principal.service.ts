import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor() { }

  private listaSumas: any[] = [];

  getListaSumas(): any[] {
    return this.listaSumas;
  }

  setSuma(value: any): void {
    this.listaSumas.push(value);
  }

  delete(id: number): void {
    let index: any;
    console.log('ID: ' + id);

    index = this.listaSumas.findIndex(resp => resp.id === id);

    console.log('INDEX: ' + index);

    this.listaSumas.splice(index, 1);
    console.log('Lista en eliminar: ' + JSON.stringify(this.listaSumas));
  }
}
