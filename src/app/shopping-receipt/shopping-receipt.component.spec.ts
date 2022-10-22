import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingReceiptComponent } from './shopping-receipt.component';

describe('ShoppingReceiptComponent', () => {
  let component: ShoppingReceiptComponent;
  let fixture: ComponentFixture<ShoppingReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
