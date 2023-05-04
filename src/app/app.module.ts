import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoFormComponent } from './Components/to-do-form/to-do-form.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { ToDoServiceService } from './Services/to-do-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoFormComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ToDoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
