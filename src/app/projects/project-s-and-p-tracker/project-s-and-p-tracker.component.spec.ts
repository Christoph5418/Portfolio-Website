import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSAndPTrackerComponent } from './project-s-and-p-tracker.component';

describe('ProjectSAndPTrackerComponent', () => {
  let component: ProjectSAndPTrackerComponent;
  let fixture: ComponentFixture<ProjectSAndPTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSAndPTrackerComponent]
    });
    fixture = TestBed.createComponent(ProjectSAndPTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
