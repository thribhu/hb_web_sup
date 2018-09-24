import { Injectable, OnDestroy } from '@angular/core';
import {SalonModel } from './salon.model';
import { StylistModel } from './stylist.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SalonModelService implements OnDestroy {
  sub: Subscription;
  id: number;
  salons: SalonModel[] = [
    new SalonModel(
      'Lakme Salon',
      'Salon near you with best price.',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '4'
    ),
    new SalonModel(
      'thribhuSalon',
      'nothing to describe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20pCA7D64Hs5MSEscrAVxVOd-sSDDF7YJjfw7eVNABLZqXqIc',
      '2'
    ),
    new SalonModel(
      'Loreal Salon',
      'best salon for kids and women',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '4'
    ),
    new SalonModel(
      'Lakme Salon',
      'Salon near you with best price.',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '4'
    ),
    new SalonModel(
      'thribhuSalon',
      'nothing to describe',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '2'
    ),
    new SalonModel(
      'Loreal Salon',
      'best salon for kids and women',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '4'
    ),
    new SalonModel(
      'Lakme Salon',
      'Salon near you with best price.',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '4'
    ),
    new SalonModel(
      'thribhuSalon',
      'nothing to describe',
      'http://www.hairtodyefor.net/images/inside.jpg',
      '2'
    )
  ];
  constructor(private route: ActivatedRoute) { }
  getParams () {
    this.sub = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }
  getSalons() {
    return this.salons.slice();
  }

  getSingleSalon(index: number) {
    return this.salons.slice()[index];
  }

  addSalon(newdata: SalonModel) {
     return this.salons.push(newdata);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}



