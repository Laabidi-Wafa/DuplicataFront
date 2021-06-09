import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class  DataService  {

  constructor() { }
  getSales() {
    return of({
      'Lundi': {
        'volumeSales': '10.09',
        'valueSales': '15.23'
      },
      'Mardi': {
        'volumeSales': '15.11',
        'valueSales': '20.56'
      },
      'Mercredi': {
        'volumeSales': '50.12',
        'valueSales': '45.69'
      },
      'Jeudi': {
        'volumeSales': '30.12',
        'valueSales': '30.64'
      },
      'Vendredi': {
        'volumeSales': '60.10',
        'valueSales': '50.41'
      },
      'Samedi': {
        'volumeSales': '65.55',
        'valueSales': '76.53'
      },
      'Dimanche': {
        'volumeSales': '70.55',
        'valueSales': '80.53'
      }
    });
  }
}
