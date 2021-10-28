import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-qr-reserva',
  templateUrl: './qr-reserva.component.html',
  styleUrls: ['./qr-reserva.component.css']
})
export class QRReservaComponent implements OnInit {

  alert: boolean =  false;

  reserva ={
    id_cliente: '',
    id_paquete: '',
    fecha_ingreso: '',
    fecha_salida: ''
  }
  
  id_reserva ={
    id: ''
  }


  

  constructor(private authService: authService) { }

 listadereserva:any;
 listadedetalle:any;
  ngOnInit(): void {
  }


  qrInfo:any;

  reservagetmax(){
    this.authService.reservagetmax()
    .subscribe(
      res => {
        console.log(res)
        this.listadereserva = res
        this.qrInfo = this.qrInfo + JSON.stringify(res);
      },
      err => console.log(err)
    )
  }

  


  detalle_habitacion_reservagetall(){
    this.authService.detalle_habitacion_reservagetall()
    .subscribe(
      res => {
        console.log(res)
        this.listadedetalle = res
        this.qrInfo = this.qrInfo + JSON.stringify(res);
        this.alert = true;
      },
      err => console.log(err)
    )
  }

}
