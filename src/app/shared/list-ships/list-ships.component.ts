import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';


interface Ship {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  created: string;
  edited: string;
}

interface Column {
  name: string;
  field: keyof Ship;
  checked: boolean;
}

@Component({
  selector: 'app-list-ships',
  templateUrl: './list-ships.component.html',
  styleUrls: ['./list-ships.component.css'],
})
export class ListShipsComponent implements OnInit {

  public ships: Ship[] = [];
  public columns: Column[] = [];
  public filteredColumns: Column[] = [];
  public filteredData: Ship[] = [];
  public filtersCollapsed = false;
  public isRowCollapsed = false;
  constructor(

    private http: HttpClient,
        private starWarsService: StarWarsServiceService,

  ) {}

  ngOnInit(): void {

    this.starWarsService.obterDadosDaAPI().subscribe((response: any) => {
      console.log(response); // Exibe o objeto JSON retornado pela API no console
      this.ships = response;
      this.columns = [
        { name: 'Id', field: 'id', checked: true },
        { name: 'Nome', field: 'name', checked: true },
        { name: 'Modelo', field: 'model', checked: true },
        { name: 'Fabricante', field: 'manufacturer', checked: true },
        { name: 'Custo em Créditos', field: 'cost_in_credits', checked: true },
        { name: 'Comprimento', field: 'length', checked: true },
        {
          name: 'Velocidade Atmosférica Máxima',
          field: 'max_atmosphering_speed',
          checked: true,
        },
        { name: 'Equipe', field: 'crew', checked: true },
        { name: 'Passageiros', field: 'passengers', checked: true },
        { name: 'Capacidade de Carga', field: 'cargo_capacity', checked: true },
        { name: 'Consumíveis', field: 'consumables', checked: true },
        {
          name: 'Classificação de Hyperdrive',
          field: 'hyperdrive_rating',
          checked: true,
        },
        { name: 'MGLT', field: 'MGLT', checked: true },
        {
          name: 'Classe de Nave Estelar',
          field: 'starship_class',
          checked: true,
        },


        { name: 'Criado em', field: 'created', checked: true },
        { name: 'Editado em', field: 'edited', checked: true },
      ];
      this.filteredColumns = [...this.columns];
      this.filteredData = [...this.ships];
    });
  }
  toggleFilters() {
    this.filtersCollapsed = !this.filtersCollapsed;
  }

  toggleRow() {
  this.isRowCollapsed = !this.isRowCollapsed;
}
  applyFilters() {
    this.filteredColumns = this.columns.filter((column) => column.checked);
    this.filteredData = this.ships.map((item) => {
      const filteredItem: Ship = {} as Ship;
      this.filteredColumns.forEach((column) => {
        filteredItem[column.field] = item[column.field];
      });
      return filteredItem;
    });
  }

  public removeById(index:number){

  }
}
