import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewchildtwoComponent } from './viewchildtwo/viewchildtwo.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent,
    ViewchildtwoComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
