export class House {
    public url: string;
    public name: string;
    public region: string;
    public coatOfArms: string;
    public words: string;
    public titles: string[];
    public seats: string[];
    public currentLordId: string;
    public heirId: string;
    public overlord: string;
    public founded: string;
    public founder: string;
    public diedOut: string;
    public ancestralWeapons: string[];
    public cadetBranches: string[];
    public swornMemberIds: string[]


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