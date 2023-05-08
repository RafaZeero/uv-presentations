import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'either',
    loadComponent: async () =>
      await import('./components/either/either.component'),
  },
  {
    path: 'either/left',
    loadComponent: async () =>
      await import('./components/either/left/left.component'),
  },
  {
    path: 'either/right',
    loadComponent: async () =>
      await import('./components/either/right/right.component'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
