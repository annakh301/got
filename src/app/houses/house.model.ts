export class House {
    private url: string;
    private name: string;
    private region: string;
    private coatOfArms: string;
    private words: string;
    private titles: string[];
    private seats: string[];
    private currentLordId: string;
    private heirId: string;
    private overlord: string;
    private founded: string;
    private founder: string;
    private diedOut: string;
    private ancestralWeapons: string[];
    private cadetBranches: string[];
    private swornMemberIds: string[]


    constructor($url: string, $name: string, $region: string, $coatOfArms: string, $words: string, $titles: string[], $seats: string[], $currentLord: string, $heir: string, $overlord: string, $founded: string, $founder: string, $diedOut: string, $ancestralWeapons: string[], $cadetBranches: string[]) {
        this.url = $url;
        this.name = $name;
        this.region = $region;
        this.coatOfArms = $coatOfArms;
        this.words = $words;
        this.titles = $titles;
        this.seats = $seats;
        this.currentLordId = $currentLord;
        this.heirId = $heir;
        this.overlord = $overlord;
        this.founded = $founded;
        this.founder = $founder;
        this.diedOut = $diedOut;
        this.ancestralWeapons = $ancestralWeapons;
        this.cadetBranches = $cadetBranches;
    }

}