import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatNavbarComponent } from './nat-navbar.component';

describe('NatNavbarComponent', () => {
  let component: NatNavbarComponent;
  let fixture: ComponentFixture<NatNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
