import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenConverterComponent } from './token-converter.component';

describe('TokenConverterComponent', () => {
  let component: TokenConverterComponent;
  let fixture: ComponentFixture<TokenConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
