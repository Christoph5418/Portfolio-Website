import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-project-mirnas',
  templateUrl: './project-mirnas.component.html',
  styleUrls: ['./project-mirnas.component.css']
})
export class ProjectMirnasComponent {

  constructor(private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo(0, 0);
    });

  }

}
