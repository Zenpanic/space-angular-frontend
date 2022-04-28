import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaceMaterialModule } from './space-material/space-material.module';
import { AsteroidCardComponent } from './asteroid-card/asteroid-card.component';
import { AsteroidContainerComponent } from './asteroid-container/asteroid-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidCardComponent,
    AsteroidContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpaceMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
