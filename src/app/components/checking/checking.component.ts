import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

bueno: boolean =  false;
alert: boolean =  false;

  checking ={
    id_habitacion_reserva: '',
    id_cliente: '',
    antecedente: '',
    hora_ingreso: 'Now()'
  }
  
  id_checkinsg ={
    id: ''
  }

  public listadechecking:any = []

  constructor(public authService: authService) { }

  ngOnInit(): void {
  }


  checkinpost(){
    this.authService.checkinpost(this.checking)
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
