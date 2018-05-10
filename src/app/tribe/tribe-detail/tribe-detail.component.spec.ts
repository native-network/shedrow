import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeDetailComponent } from './tribe-detail.component';

describe('TribeDetailComponent', () => {
  let component: TribeDetailComponent;
  let fixture: ComponentFixture<TribeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
