import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPsuLabComponent } from './project-psu-lab.component';

describe('ProjectPsuLabComponent', () => {
  let component: ProjectPsuLabComponent;
  let fixture: ComponentFixture<ProjectPsuLabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPsuLabComponent]
    });
    fixture = TestBed.createComponent(ProjectPsuLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
