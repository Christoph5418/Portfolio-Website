import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMirnasComponent } from './project-mirnas.component';

describe('ProjectMirnasComponent', () => {
  let component: ProjectMirnasComponent;
  let fixture: ComponentFixture<ProjectMirnasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMirnasComponent]
    });
    fixture = TestBed.createComponent(ProjectMirnasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
