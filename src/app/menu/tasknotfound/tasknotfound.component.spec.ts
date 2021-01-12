import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasknotfoundComponent } from './tasknotfound.component';

describe('TasknotfoundComponent', () => {
  let component: TasknotfoundComponent;
  let fixture: ComponentFixture<TasknotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasknotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasknotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
