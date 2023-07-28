import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  scrollToHome() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToHomeSection();
      }, 100);
    });
  }

  scrollToHomeSection() {
    const targetElement = document.getElementById('home-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExpertise() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.scrollToExpertiseSection();
      }, 100);
    });
  }

  scrollToExpertiseSection() {
    const targetElement = document.getElementById('expertise-section');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjects() {
    this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      this.scrollToProjectsSection();
    }, 100);
  });
}

scrollToProjectsSection() {
  const targetElement = document.getElementById('projects-section');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToExperiencesSection() {
  const targetElement = document.getElementById('experiences-section');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

scrollToExperiences() {
  this.router.navigate(['/']).then(() => {
  setTimeout(() => {
    this.scrollToExperiencesSection();
  }, 100);
});
}



}
