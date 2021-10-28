import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { Detallepaqueteservicio } from 'src/app/models/detallepaqueteservicio.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-seleccionarservicios',
  templateUrl: './seleccionarservicios.component.html',
  styleUrls: ['./seleccionarservicios.component.css']
})
export class SeleccionarserviciosComponent implements OnInit {

bueno: boolean =  false;
alert: boolean =  false;

  Detallepaqueteservicio ={
    id_paquete: '1',
    id_servicio: '',
    id_sucursal: ''
  }
  
  id_Detallepaqueteservicio ={
    id: ''
  }
  
    public listadedetallepaqueteservicio:any = []
  

  constructor(private authService: authService) { }

  ngOnInit(): void {
  }


  detalle_paquete_serviciopost(){
    this.authService.detalle_paquete_serviciopost(this.Detallepaqueteservicio)
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
