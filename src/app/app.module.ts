import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import {MatIconModule} from "@angular/material/icon";
import { SearchOptionGroupComponent } from './search/search-option-group/search-option-group.component';
import { SearchOptionComponent } from './search/search-option/search-option.component';
import {MatListModule} from "@angular/material/list";
import { SearchOptionMultiSelectionGroupComponent } from './search/search-option-multi-selection-group/search-option-multi-selection-group.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { SearchOptionSingleSelectionGroupComponent } from './search/search-option-single-selection-group/search-option-single-selection-group.component';
import { SearchOptionSelectionGroupComponent } from './search/search-option-selection-group/search-option-selection-group.component';
import { SearchOptionSingleInputGroupComponent } from './search/search-option-single-input-group/search-option-single-input-group.component';
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchOptionGroupComponent,
    SearchOptionComponent,
    SearchOptionMultiSelectionGroupComponent,
    SearchOptionSingleSelectionGroupComponent,
    SearchOptionSelectionGroupComponent,
    SearchOptionSingleInputGroupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
