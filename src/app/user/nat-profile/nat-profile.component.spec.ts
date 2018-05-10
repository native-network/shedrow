import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatProfileComponent } from './nat-profile.component';

describe('NatProfileComponent', () => {
  let component: NatProfileComponent;
  let fixture: ComponentFixture<NatProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
