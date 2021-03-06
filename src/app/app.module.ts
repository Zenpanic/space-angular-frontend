import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaceMaterialModule } from './space-material/space-material.module';
import { AsteroidContainerComponent } from './asteroid-container/asteroid-container.component';
import { AsteroidModalComponent } from './asteroid-modal/asteroid-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidContainerComponent,
    AsteroidModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SpaceMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
