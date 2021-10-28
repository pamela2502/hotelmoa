import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  detalle_insidencia_reserva ={
    id_incidencia: '',
    id_checkin: '',
    id_habitacion:'',
    total: '0',
  }
  
  id_detalle_insidencia_reserva ={
    id: ''
  }


  public listadechecking:any = []

  constructor(private authService: authService) { }

  bueno: boolean =  false;
  alert: boolean =  false;

  ngOnInit(): void {
  }


  detalle_insidencia_reservapost(){
    this.authService.detalle_insidencia_reservapost(this.detalle_insidencia_reserva)
    .subscribe(
      res => {
        console.log(1)
        this.bueno = true;
      },
      err => 
      {
        console.log(err)
      this.alert = true;
      }
    )
  }



}
