import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepComponentComponent } from './add-dep-component.component';

describe('AddDepComponentComponent', () => {
  let component: AddDepComponentComponent;
  let fixture: ComponentFixture<AddDepComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
