import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContainersModule } from './core/containers/containers.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/containers/containers.module').then((m) => m.ContainersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
