import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../Servicios/consulta.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent  implements OnInit {

  constructor(private consulta: ConsultaService) { }

  productos: any[] = [];

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos(): void{ this.consulta.getProductos().subscribe((resp: Object) => { console.log(resp); this.productos = resp as any[];  })};

  
  

}
