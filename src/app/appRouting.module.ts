import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalonComponent } from './salon/salon.component';

import { SalonListComponent } from './salon/salon-list/salon-list.component';
import { SalonHomeComponent } from './salon-home/salon-home.component';
import { SingleSalonComponent } from './salon/single-salon/single-salon.component';
import { StylistFormComponent } from './stylist-form/stylist-form.component';
import { SalonAddComponent } from './salon/salon-add/salon-add.component';

const routes: Routes = [
    {path: '', component: SalonHomeComponent},
    {path: 'home', redirectTo: ''},
    {path: 'salons', component: SalonComponent, children: [
        {path: 'salons-list', component: SalonListComponent},
        {path: 'add-salon', component: SalonAddComponent},
        {path: 'add-stylist', component: StylistFormComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: false})],
    exports: [RouterModule]
})
export class AppRoutionModule {}
