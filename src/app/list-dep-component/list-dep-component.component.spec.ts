import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepComponentComponent } from './list-dep-component.component';

describe('ListDepComponentComponent', () => {
  let component: ListDepComponentComponent;
  let fixture: ComponentFixture<ListDepComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDepComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
