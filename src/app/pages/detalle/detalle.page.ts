import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public id : number = 0;
  public nombre : string = '';
  public precio : number = 0;
  public descripcion : string = '';
  public imagen : string = '';
  public marca : Array<string>  = [];

  constructor(
    public router :Router,
    public route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(parametros => {
      this.id = parametros['id'] || 0;
      this.nombre = parametros['nombre'] || 'Sin nombre';
      this.precio = parametros['precio'] || 0;
      this.descripcion = parametros['descripcion'] || 'Sin descripcion';
      this.imagen = parametros['imagen'] || 'Sin imagen';
    })
  }

}
