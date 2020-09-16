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
    public allegianceIds: string[];
    public bookIds: string[];
    public povBookIds: string[];
    public tvSeries: string[];
    public playedBy: string;


    constructor($url?: string, $name?: string, $gender?: string, $culture?: string, $born?: string, $died?: string, $titles?: string[], $aliases?: string[], $father?: string, $mother?: string, $spouse?: string, $allegiances?: string[], $bookIds?: string[], $povBookIds?: string[], $tvSeries?: string[], $playedBy?: string) {
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
        this.allegianceIds = $allegiances;
        this.bookIds = $bookIds;
        this.povBookIds = $povBookIds;
        this.tvSeries = $tvSeries;
        this.playedBy = $playedBy;
    }

}