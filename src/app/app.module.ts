import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importe o IonicModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule, // Adicione o IonicModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
