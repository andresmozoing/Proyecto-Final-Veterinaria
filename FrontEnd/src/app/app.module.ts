//Modulos de Angular:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//Modulos de 3ros:
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//Componentes propios:
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
