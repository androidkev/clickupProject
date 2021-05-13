import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeComponent } from './home/home.component';
import { ContainersRoutingModule } from './containers-routing.module';

@NgModule({
  imports: [ComponentsModule, ContainersRoutingModule],
  declarations: [HomeComponent],
  providers: [HomeComponent],
  exports: [],
  bootstrap: [HomeComponent],
})
export class ContainersModule {}
