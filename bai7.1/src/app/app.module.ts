import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MyserviceService} from "./myservice.service";
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
