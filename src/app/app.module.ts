import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {
      provide: ApiService
    }
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
