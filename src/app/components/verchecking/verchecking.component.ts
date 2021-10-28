import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';


@Component({
  selector: 'app-verchecking',
  templateUrl: './verchecking.component.html',
  styleUrls: ['./verchecking.component.css']
})
export class VercheckingComponent implements OnInit {

  checking ={
    id_habitacion_reserva: '',
    id_cliente: '',
    antecedente: '',
    hora_ingreso: ''
  }
  
  id_checkinsg ={
    id: ''
  }


  

  constructor(private authService: authService) { }

 listadechecking:any;
  ngOnInit(): void {
  }


  checkingetall(){
    this.authService.checkingetall()
    .subscribe(
      res => {
        console.log(res)
        this.listadechecking = res
      },
      err => console.log(err)
    )
  }

}
