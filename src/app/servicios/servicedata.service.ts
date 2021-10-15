import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicedataService {
  public data: any;

  setData(element: any) {
    this.data = element;
  }

  getData() {
    const aux = this.data;
    this.data = null;
    return aux;
  }
}
