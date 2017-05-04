import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome!';
  jugs: Jug[] = [
    new Jug("Redbush", "Dragonfly", 9.99, "Rooibos"),
    new Jug("Green Lady", "Dragonfly", 9.99, "Green Tea"),
    new Jug("Matélatte", "Dragonfly", 9.99, "Maté"),
    new Jug("Sweet Cheek", "Dragonfly", 9.99, "Sweet"),
    new Jug("Aztec", "Dragonfly", 9.99, "Spicy"),
    new Jug("Hansel and Gretl", "Dragonfly", 9.99, "Gingerbread")
  ]
}

export class Jug {
  public dateAdded: Date = new Date();
  public volume: number = 64;
  constructor(public name: string, public brand: string, public price: number, public flavor: string) { }
}
