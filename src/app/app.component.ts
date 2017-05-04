import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  jugToEdit = null;
  makeNewJug: boolean = true;
  displayNewJugForm: boolean = false;
  jugs: Jug[] = [
    new Jug("Redbush", "Dragonfly", 3.50, "Rooibos"),
    new Jug("Green Lady", "Dragonfly", 3.50, "Green Tea"),
    new Jug("Matélatte", "Dragonfly", 3.50, "Maté"),
    new Jug("Sweet Cheek", "Dragonfly", 3.50, "Sweet"),
    new Jug("Aztec", "Dragonfly", 3.50, "Spicy"),
    new Jug("Hansel and Gretl", "Dragonfly", 4.00, "Gingerbread")
  ];

  createJug(){
    this.makeNewJug = false;
    this.displayNewJugForm = true;
  }

  finishAddForm(){
    this.makeNewJug = true;
    this.displayNewJugForm = false;
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

  editJug(currentJug){
    this.jugToEdit = currentJug;
    this.makeNewJug = false;
    console.log(this.jugToEdit);
  }

  doneUpdating(){
    this.jugToEdit = null;
    this.makeNewJug = true;
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

export class Jug {
  public dateAdded: Date = new Date();
  public volume: number = 64;
  constructor(public name: string, public brand: string, public price: number, public flavor: string) { }

  removeCup(){
    if(this.volume >= 8){
      this.volume -= 8;
    } else{
      alert("Can't pour a cup that doesn't exist!");
    }
  }

  pour(number){
    if(this.volume >= number){
      this.volume -= number;
    } else{
      alert("Not enough chai remains");
    }
  }
}
