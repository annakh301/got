import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch:'full'},
    { path: 'characters', component: CharactersComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'books', component: BooksComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}