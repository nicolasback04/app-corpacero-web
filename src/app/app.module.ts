import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';  // Ajusta la ruta del import según tu estructura de archivos
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimeNgModule } from './primeNg.Module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    PrimeNgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }