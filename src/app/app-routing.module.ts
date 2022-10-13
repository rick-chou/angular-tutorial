import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@components/login/login.component';
import { WelcomeComponent } from '@views/welcome/welcome.component';
import { HomeComponent } from '@views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'charts',
        loadComponent: () => import('@views/charts/charts.component').then((mod) => mod.ChartsComponent),
      },
      {
        path: 'tables',
        loadComponent: () => import('@views/tables/tables.component').then((mod) => mod.TablesComponent),
      },
      {
        path: 'editor',
        loadComponent: () => import('@views/editor/editor.component').then((mod) => mod.EditorComponent),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
