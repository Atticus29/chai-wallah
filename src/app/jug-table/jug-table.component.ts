import { Component, Input } from '@angular/core';
import { Jug } from '../jug.model';

@Component({
  selector: 'app-jug-table',
  templateUrl: './jug-table.component.html',
  styleUrls: ['./jug-table.component.css']
})
export class JugTableComponent {
  @Input() childJugList: Jug[];
  jugToEdit = null;
  makeNewJug: boolean = true;
  displayNewJugForm: boolean = false;

  constructor() { }

  createJug(){
    this.makeNewJug = false;
    this.displayNewJugForm = true;
  }

  finishAddForm(){
    this.makeNewJug = true;
    this.displayNewJugForm = false;
  }

  editJug(currentJug){
    this.jugToEdit = currentJug;
    this.makeNewJug = false;
    console.log(this.jugToEdit);
  }

  doneUpdating(currentJug){
    this.jugToEdit = null;
    this.makeNewJug = true;
  }


  priceColor(currentJug){
    if(currentJug.price<4){
      return "bg-success";
    } else if(currentJug.price<5){
      return "bg-warning";
    } else{
      return "bg-danger";
    }
  }

  assessScarcity(currentJug){
    if (currentJug.volume>24){
      return "enough";
    } else if(currentJug.volume>8){
      return "low";
    } else{
      return "dangerouslyLow";
    }
  }

}
