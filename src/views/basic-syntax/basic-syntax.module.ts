import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic-syntax',
    loadComponent: () => import('@views/basic-syntax/basic-syntax.component').then((mod) => mod.BasicSyntaxComponent),
    children: [
      {
        path: 'directive',
        loadComponent: () => import('@views/basic-syntax/directive/directive.component').then((mod) => mod.DirectiveComponent),
      },
      {
        path: 'lifecycle-hooks',
        loadComponent: () => import('@views/basic-syntax/lifecycle-hooks/lifecycle-hooks.component').then((mod) => mod.LifecycleHooksComponent),
      },
      {
        path: 'router',
        loadComponent: () => import('@views/basic-syntax/router/router.component').then((mod) => mod.RouterComponent),
      },
      {
        path: 'http',
        loadComponent: () => import('@views/basic-syntax/http/http.component').then((mod) => mod.HttpComponent),
      },
      {
        path: 'bundle-analyze',
        loadComponent: () => import('@views/optimization/bundle-analyze/bundle-analyze.component').then((mod) => mod.OptimizationBundleAnalyze),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicSyntaxModule {}
