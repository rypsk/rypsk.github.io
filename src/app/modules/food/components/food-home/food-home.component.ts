import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Types } from 'src/app/models/types';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-food-home',
  templateUrl: './food-home.component.html',
  styleUrls: ['./food-home.component.scss']
})
export class FoodHomeComponent implements OnInit {

  breadcrumbItems!: MenuItem[];
  home!: MenuItem;
  mealTypes: Types[] = [];

  selectedMealType?: Types;

  cities: City[] = [];

  // selectedCity?: City;

  optionsValue: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];

    options: any[] = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
  ];

  value: string = '0';
    
    paymentOptions: any[] = [
        { name: 'Option 1', value: '1' },
        { name: 'Option 2', value: '2' },
        { name: 'Option 3', value: '3' }
    ];

  constructor() {
    
  }

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    // BREAKFAST, LUNCH, SNACK, DINNER
    this.mealTypes = [
      { name: 'Breakfast', code: 'BREAKFAST' },
      { name: 'Lunch', code: 'LUNCH' },
      { name: 'Snack', code: 'SNACK' },
      { name: 'Dinner', code: 'DINNER' }
    ];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

  selectedCity(event:any){
    console.log(event.code);
  }

  test1(){
    console.log(this.value);
  }

}
