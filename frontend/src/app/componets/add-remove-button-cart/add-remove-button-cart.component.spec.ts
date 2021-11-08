import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveButtonCartComponent } from './add-remove-button-cart.component';

describe('AddRemoveButtonCartComponent', () => {
  let component: AddRemoveButtonCartComponent;
  let fixture: ComponentFixture<AddRemoveButtonCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveButtonCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveButtonCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
