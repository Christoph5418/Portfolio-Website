import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectMirnasComponent } from './projects/project-mirnas/project-mirnas.component';
import { ProjectPsuLabComponent } from './projects/project-psu-lab/project-psu-lab.component';
import { ProjectSAndPTrackerComponent } from './projects/project-s-and-p-tracker/project-s-and-p-tracker.component';
import { ProjectRohedgeComponent } from './projects/project-rohedge/project-rohedge.component';
import { ProjectPortfolioComponent } from './projects/project-portfolio/project-portfolio.component';


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'mirnas-website', component: ProjectMirnasComponent},
  {path: 's-and-p-tracker', component: ProjectSAndPTrackerComponent},
  {path: 'rohedge', component: ProjectRohedgeComponent},
  {path: 'canzar-lab', component: ProjectPsuLabComponent},
  {path: 'portfolio-website', component: ProjectPortfolioComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProjectMirnasComponent,
    ProjectPsuLabComponent,
    ProjectRohedgeComponent,
    ProjectPortfolioComponent,
    ProjectSAndPTrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
