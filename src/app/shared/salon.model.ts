export class SalonModel {
    public name: string;
    public description: string;
    public imagePath: string;
    public noOfStylist: string;
    constructor(name: string, desc: string, imagePath: string, noOfStylist: string ) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.noOfStylist = noOfStylist;
    }
}
