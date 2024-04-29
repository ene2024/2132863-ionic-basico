import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  constructor() { }

  alumnos: alumno[] = [];

  formData: alumno = {
    nombre: '',
    presente: false
  }

  nuevoAlumno: alumno = {
    nombre: '',
    presente: false
  };

  ngOnInit() {}

  onSubmit() {

    this.nuevoAlumno = {
      nombre: this.formData.nombre,
      presente: this.formData.presente
    };
  
    this.alumnos.push(this.nuevoAlumno);
  
    this.formData.nombre = "";
    this.formData.presente = false;

  }

}
