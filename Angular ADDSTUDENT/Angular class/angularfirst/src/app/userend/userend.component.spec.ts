import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserendComponent } from './userend.component';

describe('UserendComponent', () => {
  let component: UserendComponent;
  let fixture: ComponentFixture<UserendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
