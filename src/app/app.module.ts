import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JugComponent } from './jug/jug.component';
import { AddJugComponent } from './add-jug/add-jug.component';
import { EditJugComponent } from './edit-jug/edit-jug.component';
import { JugTableComponent } from './jug-table/jug-table.component';

@NgModule({
  declarations: [
    AppComponent,
    JugComponent,
    AddJugComponent,
    EditJugComponent,
    JugTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
