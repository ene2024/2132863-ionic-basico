import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];

}
