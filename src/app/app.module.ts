import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { TareasService } from './tareas.service';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ListComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
