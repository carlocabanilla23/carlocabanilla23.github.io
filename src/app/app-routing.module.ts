import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'https://carlocabanilla23.github.io/MyPortfolio/',
    component: HomeComponent
  },
  {
    path: 'https://carlocabanilla23.github.io/MyPortfolio/Portfolio',
    component: ProjectsComponent
  },
  {
    path: 'https://carlocabanilla23.github.io/MyPortfolio/CV',
    component: CvComponent
  },
  {
    path: 'https://carlocabanilla23.github.io/MyPortfolio/Contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
