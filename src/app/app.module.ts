import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { CreatupropiopaqueteComponent } from './components/creatupropiopaquete/creatupropiopaquete.component';
import { InsertarclienteComponent } from './components/insertarcliente/insertarcliente.component';
import { InsertarreservaComponent } from './components/insertarreserva/insertarreserva.component';
import { SeleccionarserviciosComponent } from './components/seleccionarservicios/seleccionarservicios.component';
import { MostrarpreciopaqueteComponent } from './components/mostrarpreciopaquete/mostrarpreciopaquete.component';
import { CheckingComponent } from './components/checking/checking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmarcheckoutComponent } from './components/confirmarcheckout/confirmarcheckout.component';
import { VistacrearComponent } from './components/vistacrear/vistacrear.component';
import { VercheckingComponent } from './components/verchecking/verchecking.component';
import { authService } from './services/auth.service';
import { QRReservaComponent } from './components/qr-reserva/qr-reserva.component';
import { QRPaqueteComponent } from './components/qr-paquete/qr-paquete.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SucursalesComponent,
    PaquetesComponent,
    ServiciosComponent,
    HabitacionesComponent,
    CreatupropiopaqueteComponent,
    InsertarclienteComponent,
    InsertarreservaComponent,
    SeleccionarserviciosComponent,
    MostrarpreciopaqueteComponent,
    CheckingComponent,
    CheckoutComponent,
    ConfirmarcheckoutComponent,
    VistacrearComponent,
    VercheckingComponent,
    QRReservaComponent,
    QRPaqueteComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QRCodeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
