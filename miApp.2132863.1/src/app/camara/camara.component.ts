import { Component, OnInit } from '@angular/core';
import { FotoService } from '../Servicios/foto.service';
import { Foto } from '../model/foto.model';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(private foto: FotoService) { }

  ngOnInit() {}

  TomarFoto(){
    this.foto.addNewToGallery();
  }

  public fotos: Foto[] = this.foto.fotos;

}
