import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-insertarreserva',
  templateUrl: './insertarreserva.component.html',
  styleUrls: ['./insertarreserva.component.css']
})
export class InsertarreservaComponent implements OnInit {

bueno: boolean =  false;
alert: boolean =  false;

  reserva ={
    id_cliente: '1',
    id_paquete: '',
    fecha_ingreso: '',
    fecha_salida: ''
  }
  
  id_reserva ={
    id: ''
  }

  detalle_habitacion_reserva ={
    id_habitacion: '',
    id_reserva: '1'
  }
  
  id_detalle_habitacion_reserva ={
    id: ''
  }

  public listareserva:any = []

  constructor(private authService: authService) { }

  ngOnInit(): void {
  }

  reservapost(){
    this.authService.reservapost(this.reserva)
    .subscribe(
      res => {
        console.log(1)
        this.bueno = true;
      },
      err => 
      {
        console.log(0)
      this.alert = true;
      }
    )
}

detalle_habitacion_reservapost(){
  this.authService.detalle_habitacion_reservapost(this.detalle_habitacion_reserva)
  .subscribe(
    res => {
      console.log(1)
      this.bueno = true;
    },
    err => {
      console.log(0)
      this.alert = true;
    }
  )
}

}
