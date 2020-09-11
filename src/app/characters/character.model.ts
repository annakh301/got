import { Book } from '../books/book.model';
import { House } from '../houses/house.model';

export class Character {

    private url: string;
    private name: string;
    private gender: string;
    private culture: string;
    private born: string;
    private died: string;
    private titles: string[];
    private aliases: string[];
    private father: Character;
    private mother: Character;
    private spouse: Character;
    private allegiances: House[];
    private books: Book[];
    private povBooks: Book[];
    private tvSeries: string[];
    private playedBy: string;


    constructor($url: string, $name: string, $gender: string, $culture: string, $born: string, $died: string, $titles: string[], $aliases: string[], $father: Character, $mother: Character, $spouse: Character, $allegiances: House[], $books: Book[], $povBooks: Book[], $tvSeries: string[], $playedBy: string) {
        this.url = $url;
        this.name = $name;
        this.gender = $gender;
        this.culture = $culture;
        this.born = $born;
        this.died = $died;
        this.titles = $titles;
        this.aliases = $aliases;
        this.father = $father;
        this.mother = $mother;
        this.spouse = $spouse;
        this.allegiances = $allegiances;
        this.books = $books;
        this.povBooks = $povBooks;
        this.tvSeries = $tvSeries;
        this.playedBy = $playedBy;
    }

}