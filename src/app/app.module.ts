import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HomeComponent } from './home/home.component';
import { AdminDoctorDetailsComponent } from './admin-doctor-details/admin-doctor-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddDoctorFormComponent } from './add-doctor-form/add-doctor-form.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientBookingComponent } from './patient-booking/patient-booking.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DoctorLoginComponent,
    HomeComponent,
    AdminDoctorDetailsComponent,
    AddDoctorFormComponent,
    PatientHomeComponent,
    PatientBookingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
