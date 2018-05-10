import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancorInfoComponent } from './bancor-info.component';

describe('BancorInfoComponent', () => {
  let component: BancorInfoComponent;
  let fixture: ComponentFixture<BancorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
