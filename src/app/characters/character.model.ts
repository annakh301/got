import { Book } from '../books/book.model';
import { House } from '../houses/house.model';

export class Character {

    public url: string;
    public name: string;
    public gender: string;
    public culture: string;
    public born: string;
    public died: string;
    public titles: string[];
    public aliases: string[];
    public fatherId: string;
    public motherId: string;
    public spouseId: string;
    public allegiances: House["url"][];
    public books: Book["url"][];
    public povBooks: Book["url"][];
    public tvSeries: string[];
    public playedBy: string;


    constructor($url: string, $name: string, $gender: string, $culture: string, $born: string, $died: string, $titles: string[], $aliases: string[], $father: string, $mother: string, $spouse: string, $allegiances: string[], $bookIds: string[], $povBookIds: string[], $tvSeries: string[], $playedBy: string) {
        this.url = $url;
        this.name = $name;
        this.gender = $gender;
        this.culture = $culture;
        this.born = $born;
        this.died = $died;
        this.titles = $titles;
        this.aliases = $aliases;
        this.fatherId = $father;
        this.motherId = $mother;
        this.spouseId = $spouse;
        this.allegiances = $allegiances;
        this.books = $bookIds;
        this.povBooks = $povBookIds;
        this.tvSeries = $tvSeries;
        this.playedBy = $playedBy;
    }

}