import { Component, OnInit } from '@angular/core';
import {MiServicioService} from './../../services/mi-servicio.service';
import { Producto} from "./../../models/producto";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  public datos : Array<Producto> =[]

  constructor( private servicio : MiServicioService
    ) { }

  ngOnInit() {
  }

  public ionViewWillEnter(){
    this.datos = this.servicio.datos;
  }

}
