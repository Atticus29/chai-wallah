import { Component } from '@angular/core';
import { Jug } from './jug.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterJugList: Jug[] = [
    new Jug("Redbush", "Dragonfly", 3.50, "Rooibos"),
    new Jug("Green Lady", "Dragonfly", 3.50, "Green Tea"),
    new Jug("Matélatte", "Dragonfly", 3.50, "Maté"),
    new Jug("Sweet Cheek", "Dragonfly", 3.50, "Sweet"),
    new Jug("Aztec", "Dragonfly", 3.50, "Spicy"),
    new Jug("Hansel and Gretl", "Dragonfly", 4.00, "Gingerbread")
  ];
}
