import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public addValue: number = 0;
  title = 'ola-mundo';

  public add() {
    this.addValue += 1;
  }

  public clear() {
    this.addValue=0;
  }

  public getDados: {nome:string, idade:number} | undefined;

  public setDados(event:any){
    this.getDados=event;
  }
}
