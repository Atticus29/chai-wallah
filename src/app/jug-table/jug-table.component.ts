import { Component } from '@angular/core';

@Component({
  selector: 'app-jug-table',
  templateUrl: './jug-table.component.html',
  styleUrls: ['./jug-table.component.css']
})
export class JugTableComponent {
  constructor() { }

  jugs: Jug[] = [
    new Jug("Redbush", "Dragonfly", 3.50, "Rooibos"),
    new Jug("Green Lady", "Dragonfly", 3.50, "Green Tea"),
    new Jug("Matélatte", "Dragonfly", 3.50, "Maté"),
    new Jug("Sweet Cheek", "Dragonfly", 3.50, "Sweet"),
    new Jug("Aztec", "Dragonfly", 3.50, "Spicy"),
    new Jug("Hansel and Gretl", "Dragonfly", 4.00, "Gingerbread")
  ];

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
