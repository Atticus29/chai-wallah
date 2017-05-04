import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Jug } from '../jug.model'

@Component({
  selector: 'app-edit-jug',
  templateUrl: './edit-jug.component.html',
  styleUrls: ['./edit-jug.component.css']
})
export class EditJugComponent {
  @Input() currentJug: Jug;
  @Output() clickSender = new EventEmitter();
  constructor() { }

  updateClicked(currentJug: Jug){
    this.clickSender.emit(currentJug);
  }
}
