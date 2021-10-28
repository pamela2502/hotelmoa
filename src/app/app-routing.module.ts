import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { InicioComponent } from './components/inicio/inicio.component'
import { SucursalesComponent } from './components/sucursales/sucursales.component'
import { PaquetesComponent } from './components/paquetes/paquetes.component'
import { ServiciosComponent } from './components/servicios/servicios.component'
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component'
import { CreatupropiopaqueteComponent} from './components/creatupropiopaquete/creatupropiopaquete.component'
import { SeleccionarserviciosComponent } from './components/seleccionarservicios/seleccionarservicios.component';
import { InsertarreservaComponent } from './components/insertarreserva/insertarreserva.component';
import { CheckingComponent } from './components/checking/checking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmarcheckoutComponent } from './components/confirmarcheckout/confirmarcheckout.component'
import { VistacrearComponent } from './components/vistacrear/vistacrear.component'
import { VercheckingComponent } from './components/verchecking/verchecking.component';
import { InsertarclienteComponent } from './components/insertarcliente/insertarcliente.component';
import {QRReservaComponent} from './components/qr-reserva/qr-reserva.component'
import { QRPaqueteComponent } from './components/qr-paquete/qr-paquete.component';

const routes: Routes = [

{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{ 
  path: 'inicio',
  component: InicioComponent
},
{
  path:'sucursales',
  component: SucursalesComponent
},
{
  path:'paquetes',
  component: PaquetesComponent
},
{
  path:'servicios',
  component: ServiciosComponent
},
{
  path:'habitaciones',
  component: HabitacionesComponent
},
{
  path:'Creatupropiopaquete',
  component: CreatupropiopaqueteComponent
},
{
  path:'seleccionarservicios',
  component: SeleccionarserviciosComponent
},
{
  path:'insertarreserva',
  component: InsertarreservaComponent
},
{
  path:'checking',//poner al final un ?
  component: CheckingComponent
},
{
  path:'checkout',
  component: CheckoutComponent
},
{
  path:'marcarsalida',
  component: ConfirmarcheckoutComponent
},
{
  path:'vistapaquetepropio',
  component: VistacrearComponent
},
{
  path:'verchecking',
  component: VercheckingComponent
},
{
  path:'crearcliente',
  component:InsertarclienteComponent
},
{
  path:'qrreserva',
  component:QRReservaComponent
},
{
  path:'qrpaquete',
  component:QRPaqueteComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot (routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
