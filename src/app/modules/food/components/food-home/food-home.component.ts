import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-food-home',
  templateUrl: './food-home.component.html',
  styleUrls: ['./food-home.component.scss']
})
export class FoodHomeComponent implements OnInit {

  breadcrumbItems!: MenuItem[];
  home!: MenuItem;
  selectedMealTypes: string = '';
  selectedDaysOfWeek: string = '';
  selectedDishTypes: string = '';
  mealTypes: any[] = [];
  daysOfWeek: any[] = [];
  dishTypes: any[] = [];
  translate: TranslateService;
  mealPlanningLabel: string = '';

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  ngOnInit(): void {
    this.translate.stream(['mealPlanning']).subscribe(words => {
      this.mealPlanningLabel = words['mealPlanning'];
    });
    console.log(this.mealPlanningLabel);
    this.home = { icon: 'pi pi-home', routerLink: '/home' };

    this.dishTypes = [
      { name: 'Starter', value: 'STARTER' },
      { name: 'Main Course', value: 'MAIN_COURSE' },
      { name: 'Side Dish', value: 'SIDE_DISH' },
      { name: 'Drink', value: 'DRINK' }
    ];

    this.mealTypes = [
      { name: 'Breakfast', value: 'BREAKFAST' },
      { name: 'Lunch', value: 'LUNCH' },
      { name: 'Snack', value: 'SNACK' },
      { name: 'Dinner', value: 'DINNER' }
    ];

    this.daysOfWeek = [
      { name: 'Monday', value: 'MONDAY' },
      { name: 'Tuesday', value: 'TUESDAY' },
      { name: 'Wendesday', value: 'WENDESDAY' },
      { name: 'Thursday', value: 'THURSDAY' },
      { name: 'Friday', value: 'FRIDAY' },
      { name: 'Saturday', value: 'SATURDAY' },
      { name: 'Sunday', value: 'SUNDAY' }
    ];
  }

  test1() {
    console.log('selectedDaysOfWeek: ' + this.selectedDaysOfWeek);
    console.log('selectedMealTypes: ' + this.selectedMealTypes);
    console.log('selectedDishTypes: ' + this.selectedDishTypes);
  }

}
