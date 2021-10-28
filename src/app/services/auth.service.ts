import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class authService {

private URL = 'http://localhost:8080/api'

constructor(private http: HttpClient) { }

  
  
//----------------------------------------cliente-------------------------------------
clientepost(cliente:any){
  return this.http.post<any>(this.URL + '/clientes', cliente);
}

clienteget(id:any){
  return this.http.get<any>(`${this.URL + '/clientes'}/${id}`);
}

clientegetall(){
  return this.http.get(this.URL + '/clientes');
}

clienteput(id:any, cliente:any){
  return this.http.put<any>(`${this.URL + '/clientes'}/${id}`, cliente);
}

clientedel(id:any){
  return this.http.delete(`${this.URL + '/cliente'}/${id}`);
}


//----------------------------------------habitacion-------------------------------------

habitacionget(id:any){
  return this.http.get<any>(`${this.URL + '/habitaciones'}/${id}`);
}

habitacionall(){
  return this.http.get(this.URL + '/habitaciones');
}


//----------------------------------------paquete-------------------------------------

paquetepost(paquete:any){
  return this.http.post<any>(this.URL + '/paquetes', paquete);
}

paqueteget(id:any){
  return this.http.get<any>(`${this.URL + '/paquetes'}/${id}`);
}

paquetemax(){
  return this.http.get(this.URL + '/paquetes');
}




//----------------------------------------servicio-------------------------------------

servicioget(id:any){
  return this.http.get<any>(`${this.URL + '/servicios'}/${id}`);
}

servicioall(){
  return this.http.get(this.URL + '/servicios');
}


//----------------------------------------login-------------------------------------
loginpost(login:any){
  return this.http.post<any>(this.URL + '/logins', login);
}

loginget(id:any){
  return this.http.get<any>(`${this.URL + '/logins'}/${id}`);
}

logingetall(){
  return this.http.get(this.URL + '/logins');
}

loginput(id:any, login:any){
  return this.http.put<any>(`${this.URL + '/logins'}/${id}`, login);
}

logindel(id:any){
  return this.http.delete(`${this.URL + '/logins'}/${id}`);
}


//----------------------------------------sucursal-------------------------------------

sucursalget(id:any){
  return this.http.get<any>(`${this.URL + '/sucursales'}/${id}`);
}

sucursalall(){
  return this.http.get(this.URL + '/sucursales');
}


//----------------------------------------reserva-------------------------------------
reservapost(reserva:any){
  return this.http.post<any>(this.URL + '/reservas', reserva);
}

reservaget(id:any){
  return this.http.get<any>(`${this.URL + '/reservas'}/${id}`);
}


reservagetmax(){
  return this.http.get(this.URL + '/reservas');
}

reservaput(id:any, reserva:any){
  return this.http.get<any>(`${this.URL + '/reservas'}/${id}`, reserva);
}


//----------------------------------------checkin-------------------------------------
checkinpost(checkin:any){
  return this.http.post<any>(this.URL + '/checkins', checkin);
}

checkinget(id:any){
  return this.http.get<any>(`${this.URL + '/checkins'}/${id}`);
}

checkingetall(){
  return this.http.get(this.URL + '/checkins');
}

checkinput(id:any, checkin:any){
  return this.http.put<any>(`${this.URL + '/checkins'}/${id}`, checkin);
}


//----------------------------------------checkout-------------------------------------
checkoutpost(checkout:any){
  return this.http.post<any>(this.URL + '/checkouts', checkout);
}

checkoutget(id:any){
  return this.http.get<any>(`${this.URL + '/checkouts'}/${id}`);
}

checkoutgetall(){
  return this.http.get(this.URL + '/checkouts');
}

checkoutput(id:any, checkout:any){
  return this.http.put<any>(`${this.URL + '/checkouts'}/${id}`, checkout);
}


//----------------------------------------facturas-------------------------------------
facturaspost(facturas:any){
  return this.http.post<any>(this.URL + '/facturas', facturas);
}

facturasget(id:any){
  return this.http.get<any>(`${this.URL + '/facturas'}/${id}`);
}

facturasgetall(){
  return this.http.get(this.URL + '/facturas');
}

facturasput(id:any, facturas:any){
  return this.http.put<any>(`${this.URL + '/facturas'}/${id}`, facturas);
}


//----------------------------------------detalle_paquete_servicio-------------------------------------
detalle_paquete_serviciopost(detalle_paquete_servicio:any){
  return this.http.post<any>(this.URL + '/detalle_paquete_servicios', detalle_paquete_servicio);
}

detalle_paquete_servicioget(id:any){
  return this.http.get<any>(`${this.URL + '/detalle_paquete_servicios'}/${id}`);
}

detalle_paquete_serviciogetall(){
  return this.http.get(this.URL + '/detalle_paquete_servicios');
}

detalle_paquete_servicioput(id:any, detalle_paquete_servicio:any){
  return this.http.put<any>(`${this.URL + '/detalle_paquete_servicios'}/${id}`, detalle_paquete_servicio);
}


//----------------------------------------detalle_habitacion_reserva-------------------------------------
detalle_habitacion_reservapost(detalle_habitacion_reserva:any){
  return this.http.post<any>(this.URL + '/detalle_habitacion_reservas', detalle_habitacion_reserva);
}

detalle_habitacion_reservaget(id:any){
  return this.http.get<any>(`${this.URL + '/detalle_habitacion_reservas'}/${id}`);
}

detalle_habitacion_reservagetall(){
  return this.http.get(this.URL + '/detalle_habitacion_reservas');
}

detalle_habitacion_reservaput(id:any, detalle_habitacion_reserva:any){
  return this.http.put<any>(`${this.URL + '/detalle_habitacion_reservas'}/${id}`, detalle_habitacion_reserva);
}

//----------------------------------------detalle_insidencia_reserva-------------------------------------

detalle_insidencia_reservapost(detalle_insidencia_reserva:any){
  return this.http.post<any>(this.URL + '/detalle_insidencia_reserva', detalle_insidencia_reserva);
}

detalle_insidencia_reservaget(id:any){
  return this.http.get<any>(`${this.URL + '/detalle_insidencia_reserva'}/${id}`);
}

detalle_insidencia_reservagetall(){
  return this.http.get(this.URL + '/detalle_insidencia_reserva');
}

detalle_insidencia_reservaput(id:any, detalle_insidencia_reserva:any){
  return this.http.put<any>(`${this.URL + '/detalle_insidencia_reserva'}/${id}`, detalle_insidencia_reserva);
}


}