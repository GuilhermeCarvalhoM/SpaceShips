import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StarWarsServiceService } from 'src/app/services/star-wars-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-ship',
  templateUrl: './update-ship.component.html',
  styleUrls: ['./update-ship.component.css'],
})
export class UpdateShipComponent {
  public index: any = null;
  formData: any = {}; // Objeto para armazenar os dados do formulário
  constructor(
    private starWarsService: StarWarsServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getDados(index: number) {
    this.formData = this.starWarsService.obterDadosById(index);
  }

  deletarFormulario() {
    this.starWarsService.RemoverDados(this.formData, this.index).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  enviarFormulario(): void {
    const currentDate = new Date();
    this.formData.edited = currentDate.toISOString();

    this.starWarsService.atualizarDados(this.formData, this.index).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.index = +params['index'];
      this.starWarsService.obterDadosById(this.index).subscribe((item) => {
        this.formData = item;
        console.log(item);
      });
    });
  }
}
