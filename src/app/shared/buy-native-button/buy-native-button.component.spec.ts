import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNativeButtonComponent } from './buy-native-button.component';

describe('BuyNativeButtonComponent', () => {
  let component: BuyNativeButtonComponent;
  let fixture: ComponentFixture<BuyNativeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNativeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNativeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
