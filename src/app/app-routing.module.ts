import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorFormComponent } from './add-doctor-form/add-doctor-form.component';
import { AdminDoctorDetailsComponent } from './admin-doctor-details/admin-doctor-details.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { HomeComponent } from './home/home.component';
import { PatientBookingComponent } from './patient-booking/patient-booking.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';

const routes: Routes = [
  {path:'',component: DoctorLoginComponent},
  {path:'doctor/home',component: HomeComponent},
  {path:'doctor/login',component: DoctorLoginComponent},
  {path:'admin/doctor',component: AdminDoctorDetailsComponent},
  {path:'admin/addDoctors',component: AddDoctorFormComponent},
  {path:'patient/home',component: PatientHomeComponent},
  {path:'patient/booking/:id',component: PatientBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
