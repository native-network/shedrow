import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterDialogComponent } from './converter-dialog.component';

describe('ConverterDialogComponent', () => {
  let component: ConverterDialogComponent;
  let fixture: ComponentFixture<ConverterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConverterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
