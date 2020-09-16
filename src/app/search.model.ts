export class Search {
    private kind: string;
    private items: string[];


    constructor($kind: string, $items: string[]) {
        this.kind = $kind;
        this.items = $items;
    }

}