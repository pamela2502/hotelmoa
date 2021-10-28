import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-qr-paquete',
  templateUrl: './qr-paquete.component.html',
  styleUrls: ['./qr-paquete.component.css']
})
export class QRPaqueteComponent implements OnInit {

  alert: boolean =  false;

  paquete ={
    nombre_paquete: '',
    servicios_incluidos: '',
    descripcion: '',
    cantidad_de_personas_incluidas: '',
    color_brasalete:'',
    precio_paquete:''
  }
  
  id_paquete ={
    id: ''
  }


  

  constructor(private authService: authService) { }

 listadepaquete:any;
  ngOnInit(): void {
  }

  qrInfo:any;

  paquetemax(){
    this.authService.paquetemax()
    .subscribe(
      res => {
        console.log(res)
        this.listadepaquete = res
        this.qrInfo = JSON.stringify(res);
        this.alert = true;
      },
      err => console.log(err)
    )
  }



}
