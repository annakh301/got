import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { HouseComponent } from './houses/house/house.component';
import { BookComponent } from './books/book/book.component';
import { BookService } from './books/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './characters/character.service';
import { HouseService } from './houses/house.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    BooksComponent,
    CharactersComponent,
    CharacterComponent,
    HouseComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule, 
    MatTabsModule,
    MatPaginatorModule

  ],
  providers: [BookService, CharacterService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
