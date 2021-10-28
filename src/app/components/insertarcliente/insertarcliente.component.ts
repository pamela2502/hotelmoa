import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { Detallepaqueteservicio } from 'src/app/models/detallepaqueteservicio.model';
import { Paquete } from 'src/app/models/paquete.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-insertarcliente',
  templateUrl: './insertarcliente.component.html',
  styleUrls: ['./insertarcliente.component.css']
})
export class InsertarclienteComponent implements OnInit {

bueno: boolean =  false;
alert: boolean =  false;

  clientes ={
    nombre_cliente: '',
    apellido_cliente: '',
    dpi_cliente: '',
    telefono_cliente: '',
    solicitudes_especiales:'',
    cantidad_de_personas:''
  }
  
  id_clientes ={
    id: '1'
  }


  

  constructor(private authService: authService) { }

 listadeclientes:any;
  ngOnInit(): void {
  }


  clientegetall(){
    this.authService.clientegetall()
    .subscribe(
      res => {
        console.log(res)
        this.listadeclientes = res
      },
      err => console.log(err)
    )
  }

  clienteput(id:any, clientes:any) {
    this.authService.clienteput(id, this.clientes)
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

}
