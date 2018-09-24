import { Injectable } from '@angular/core';
import { StylistModel } from './stylist.model';

@Injectable({
  providedIn: 'root'
})
export class StylistService {
  stylist: StylistModel[] = [];
  constructor(public name: string, public age: string, public exepirence: string, public gender: string) { }


  getStylist() {
    return this.stylist.slice();
  }
}
