export class StylistModel {
    public name: string;
    public exp: number;
    public gender: string;
    public contact: string;
    constructor (name: string, exp: number, gender: string, contact: string) {
        this.name = name;
        this.exp = exp;
        this.gender = gender;
        this.contact = contact;
    }
}
