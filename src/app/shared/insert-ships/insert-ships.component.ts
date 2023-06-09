import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';


@Component({
  selector: 'app-insert-ships',
  templateUrl: './insert-ships.component.html',
  styleUrls: ['./insert-ships.component.css'],
})
export class InsertShipsComponent {
  formData: any = {}; // Objeto para armazenar os dados do formulário
  constructor(
    private starWarsService: StarWarsServiceService,
    private router: Router
  ) {}

  private formValido(): boolean {
    // Verificar se todos os campos obrigatórios foram preenchidos
    return (
      this.formData.name &&
      this.formData.model &&
      this.formData.manufacturer &&
      this.formData.cost_in_credits &&
      this.formData.length &&
      this.formData.max_atmosphering_speed &&
      this.formData.crew &&
      this.formData.passengers &&
      this.formData.cargo_capacity &&
      this.formData.consumables &&
      this.formData.hyperdrive_rating &&
      this.formData.MGLT &&
      this.formData.starship_class
    );




  }

  enviarFormulario() {
    if (this.formValido()) {

    const currentDate = new Date();
    this.formData.created = currentDate.toISOString();
    this.formData.edited = currentDate.toISOString();
    console.log(this.formData);

      this.starWarsService.enviarDadosFormulario(this.formData).subscribe(
        (response) => {
          this.router.navigate(['/home']);
        },
        (error) => {
          // Lógica para lidar com erros de solicitação
        }
      );
    } else {
      alert('Todos os campos devem ser preenchidos.');
    }
  }
}
