import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRohedgeComponent } from './project-rohedge.component';

describe('ProjectRohedgeComponent', () => {
  let component: ProjectRohedgeComponent;
  let fixture: ComponentFixture<ProjectRohedgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectRohedgeComponent]
    });
    fixture = TestBed.createComponent(ProjectRohedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
