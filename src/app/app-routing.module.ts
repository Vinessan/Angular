import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
