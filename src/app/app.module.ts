import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { IdPipe } from './id.pipe';

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

const appRoutes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'houses/:id', component: HouseComponent },
  { path: 'books/:id', component: BookComponent }
];


@NgModule({
  declarations: [
    IdPipe,
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    HousesComponent,
    BooksComponent,
    CharacterComponent,
    HouseComponent,
    BookComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [BookService, CharacterService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
