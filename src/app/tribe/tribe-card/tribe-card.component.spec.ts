import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeCardComponent } from './tribe-card.component';

describe('TribeCardComponent', () => {
  let component: TribeCardComponent;
  let fixture: ComponentFixture<TribeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
