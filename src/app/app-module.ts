import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; //  Para o *ngFor funcionar
import { FormsModule } from '@angular/forms';     //  Para o [(ngModel)] funcionar

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';            //  O ERRO ESTAVA AQUI (estava 'App' em vez de 'AppComponent')

@NgModule({
  declarations: [
    AppComponent     // 'AppComponent' aqui
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]     // 'AppComponent' aqui
})
export class AppModule { }