import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data=[] as any;

  constructor(private ls:DatosService) {
      this.data=this.ls.obtenerDatosBusqueda();
      console.log(this.data);
     }

  ngOnInit(): void {
  }

}