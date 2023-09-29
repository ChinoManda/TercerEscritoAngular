import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service'; // Importa el servicio

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tareas: any[] = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareasService.obtenerTareas().subscribe((data: any) => {
      this.tareas = data; 
    });
  }
}
