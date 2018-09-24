import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SalonComponent } from './salon/salon.component';
import { SalonListComponent } from './salon/salon-list/salon-list.component';
import { SalonAddComponent } from './salon/salon-add/salon-add.component';
import { AppRoutionModule } from './appRouting.module';
import { SalonModelService } from './shared/salon-model.service';
import { SalonHomeComponent } from './salon-home/salon-home.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SingleSalonComponent } from './salon/single-salon/single-salon.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HbSalonsComponent } from './hb-salons/hb-salons.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StylistFormComponent } from './stylist-form/stylist-form.component';
import { PlaceServiceService } from './place-service.service';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalonComponent,
    SalonListComponent,
    SalonAddComponent,
    SalonHomeComponent,
    BannerComponent,
    RegisterFormComponent,
    SingleSalonComponent,
    HomeContentComponent,
    HbSalonsComponent,
    StylistFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutionModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    // ReactiveFormsModule
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCS7i5ElQObZEMGEVjotUsoyPoBtvgclk0',
      libraries: ['places']
    })*/
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule

  ],
  providers: [SalonModelService, PlaceServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
