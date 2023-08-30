import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHomeComponent } from './food-home.component';

describe('FoodHomeComponent', () => {
  let component: FoodHomeComponent;
  let fixture: ComponentFixture<FoodHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
