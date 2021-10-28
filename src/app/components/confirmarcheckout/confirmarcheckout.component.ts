import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-confirmarcheckout',
  templateUrl: './confirmarcheckout.component.html',
  styleUrls: ['./confirmarcheckout.component.css']
})
export class ConfirmarcheckoutComponent implements OnInit {

  bueno: boolean =  false;
  alert: boolean =  false;

  checkouts ={
    id_detalle_insidencia_reserva: '1',
    hora_salida: 'Now()'
  }
  
  id_checkouts ={
    id: ''
  }


  public listadechecking:any = []

  constructor(private authService: authService) { }


  ngOnInit(): void {
  }

  checkoutpost(){
    this.authService.checkoutpost(this.checkouts)
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
