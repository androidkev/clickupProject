import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ContainersModule } from './core/containers/containers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule,
    ContainersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
