import { Component,NgModule, OnInit } from '@angular/core';
import {authService} from 'src/app/services/auth.service';


@Component({
  selector: 'app-creatupropiopaquete',
  templateUrl: './creatupropiopaquete.component.html',
  styleUrls: ['./creatupropiopaquete.component.css']
})
export class CreatupropiopaqueteComponent implements OnInit {

bueno: boolean =  false;
alert: boolean =  false;

paquete ={
  nombre_paquete: '',
  servicios_incluidos: 'Mi propio paquete',
  descripcion: '',
  cantidad_de_personas_incluidas: '',
  color_brasalete: 'Morado',
  precio_paquete: '0'
}

id_paquete ={
  id: ''
}

  public listadedetallepaqueteservicio:any = []


  constructor(private authService: authService) { }

  ngOnInit(): void {
  }


paquetepost(){
  this.authService.paquetepost(this.paquete)
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
