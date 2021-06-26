import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedataHomeComponent } from './redata-home.component';

describe('RedataHomeComponent', () => {
  let component: RedataHomeComponent;
  let fixture: ComponentFixture<RedataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedataHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
