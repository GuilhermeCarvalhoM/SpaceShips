import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShipsComponent } from './shared/list-ships/list-ships.component';
import { InsertShipsComponent } from './shared/insert-ships/insert-ships.component';
import { UpdateShipComponent } from './shared/update-ship/update-ship.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Definindo rota padrão para '/home'
  { path: 'home', component: ListShipsComponent },
  { path: 'add', component: InsertShipsComponent },
  { path: 'edit/:index', component: UpdateShipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
