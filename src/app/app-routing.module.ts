import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPreloadingStrategy } from '@views/basic-syntax/router/customPreloadingStrategy';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@views/welcome/welcome.component').then((mod) => mod.WelcomeComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('@views/home/home.component').then((mod) => mod.HomeComponent),
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
    loadComponent: () => import('@components/login/login.component').then((mod) => mod.LoginComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
