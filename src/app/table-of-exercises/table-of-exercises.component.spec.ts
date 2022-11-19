import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfExercisesComponent } from './table-of-exercises.component';

describe('TableOfExercisesComponent', () => {
  let component: TableOfExercisesComponent;
  let fixture: ComponentFixture<TableOfExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOfExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOfExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
