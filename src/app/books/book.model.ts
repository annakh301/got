import { Character } from '../characters/character.model';

export class Book {
    public url: string;
    public name: string;
    public isbn: string;
    public authors: string[];
    public numberOfPages: number;
    public publisher: string;
    public country: string;
    public mediaType: string;
    public released: Date;
    public characterIds: Character["url"][];


	constructor($url: string, $name?: string, $isbn?: string, $authors?: string[], $numberOfPages?: number, $publisher?: string, $country?: string, $mediaType?: string, $released?: Date, $characterIds?: string[]) {
		this.url = $url;
		this.name = $name;
		this.isbn = $isbn;
		this.authors = $authors;
		this.numberOfPages = $numberOfPages;
		this.publisher = $publisher;
		this.country = $country;
		this.mediaType = $mediaType;
        this.released = $released;
        this.characterIds = $characterIds;
	}
    
}