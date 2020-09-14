import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { CharacterComponent } from './characters/character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { HouseComponent } from './houses/house/house.component';
import { HousesComponent } from './houses/houses.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'houses/:id', component: HouseComponent },
    { path: 'books', component: BooksComponent },
    { path: 'books/:id', component: BookComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}