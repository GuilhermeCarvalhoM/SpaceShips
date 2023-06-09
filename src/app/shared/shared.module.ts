import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListShipsComponent } from './list-ships/list-ships.component';
import { FormsModule } from '@angular/forms';
import { InsertShipsComponent } from './insert-ships/insert-ships.component';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateShipComponent } from './update-ship/update-ship.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [ListShipsComponent, InsertShipsComponent, UpdateShipComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [ListShipsComponent],
})
export class SharedModule {}
