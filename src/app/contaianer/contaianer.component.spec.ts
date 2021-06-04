import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaianerComponent } from './contaianer.component';

describe('ContaianerComponent', () => {
  let component: ContaianerComponent;
  let fixture: ComponentFixture<ContaianerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaianerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaianerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
