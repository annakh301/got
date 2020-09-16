import { Character } from '../characters/character.model';

export class House {
    public url: string;
    public name: string;
    public region: string;
    public coatOfArms: string;
    public words: string;
    public titles: string[];
    public seats: string[];
    public currentLordId: Character["url"];
    public heirId: Character["url"];
    public overlord: House["url"];
    public founded: string;
    public founder: Character["url"];
    public diedOut: string;
    public ancestralWeapons: string[];
    public cadetBranches: House["url"][];
    public swornMemberIds: Character["url"][]


	constructor($url: string, $name?: string, $region?: string, $coatOfArms?: string, $words?: string, $titles?: string[], $seats?: string[], $founded?: string, $founder?: string, $diedOut?: string, $ancestralWeapons?: string[]) {
		this.url = $url;
		this.name = $name;
		this.region = $region;
		this.coatOfArms = $coatOfArms;
		this.words = $words;
		this.titles = $titles;
		this.seats = $seats;
		this.founded = $founded;
		this.founder = $founder;
		this.diedOut = $diedOut;
		this.ancestralWeapons = $ancestralWeapons;
	}
}