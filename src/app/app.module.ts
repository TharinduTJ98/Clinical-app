import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ClientTableComponent } from 'src/Components/client-table/client-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
