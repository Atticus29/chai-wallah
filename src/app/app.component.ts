import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jugToEdit = null;
  makeNewJug: boolean = true;
  displayNewJugForm: boolean = false;


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

  doneUpdating(){
    this.jugToEdit = null;
    this.makeNewJug = true;
  }

}
