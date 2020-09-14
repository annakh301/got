import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';

import { BookService } from './books/book.service';
import { CharacterService } from './characters/character.service';
import { HouseService } from './houses/house.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { HouseComponent } from './houses/house/house.component';
import { BookComponent } from './books/book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    HousesComponent,
    BooksComponent,
    CharacterComponent,
    HouseComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    AppRoutingModule,

  ],
  providers: [BookService, CharacterService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
