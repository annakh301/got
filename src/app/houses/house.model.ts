
import { Character } from '../characters/character.model';

export class House {
    private url: string;
    private name: string;
    private region: string;
    private coatOfArms: string;
    private words: string;
    private titles: string[];
    private seats: string[];
    private currentLord: Character;
    private heir: Character;
    private overlord: House;
    private founded: string;
    private founder: string;
    private diedOut: string;
    private ancestralWeapons: string[];
    private cadetBranches: House[];
    private swornMembers: Character[]


    constructor($url: string, $name: string, $region: string, $coatOfArms: string, $words: string, $titles: string[], $seats: string[], $currentLord: Character, $heir: Character, $overlord: House, $founded: string, $founder: string, $diedOut: string, $ancestralWeapons: string[], $cadetBranches: House[]) {
        this.url = $url;
        this.name = $name;
        this.region = $region;
        this.coatOfArms = $coatOfArms;
        this.words = $words;
        this.titles = $titles;
        this.seats = $seats;
        this.currentLord = $currentLord;
        this.heir = $heir;
        this.overlord = $overlord;
        this.founded = $founded;
        this.founder = $founder;
        this.diedOut = $diedOut;
        this.ancestralWeapons = $ancestralWeapons;
        this.cadetBranches = $cadetBranches;
    }

}