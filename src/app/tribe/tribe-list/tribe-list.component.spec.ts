import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribeListComponent } from './tribe-list.component';

describe('TribeListComponent', () => {
  let component: TribeListComponent;
  let fixture: ComponentFixture<TribeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
