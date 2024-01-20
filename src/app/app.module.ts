import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ChangeFormDataComponent } from './change-form-data/change-form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    FileuploadComponent,
    ChangeFormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
