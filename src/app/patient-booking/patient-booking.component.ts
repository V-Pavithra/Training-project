import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { Patient } from '../patient';
import { AdminDoctorService } from '../service/admin-doctor.service';
import { PatientDisplayService } from '../service/patient-display.service';

@Component({
  selector: 'app-patient-booking',
  templateUrl: './patient-booking.component.html',
  styleUrls: ['./patient-booking.component.css']
})
export class PatientBookingComponent implements OnInit {
  doctorDetails: Patient=new Patient();
  public doctors: Doctor[] = [];
  id!: number;
  doctor!: Doctor;
  patient: Patient=new Patient();
  doctorId='';
  term: any;
  constructor(private patientDisplayService: PatientDisplayService, private adminDoctorService: AdminDoctorService,private route: ActivatedRoute,private router: Router) { }
  
  ngOnInit(): void {
    // this.doctorDetails.appointmentId = Number(this.route.snapshot.paramMap.get('appointmentId'));

    // this.doctor=new Doctor();
    // this.id = this.route.snapshot.params['id'];
    // this.adminDoctorService.getById(this.id).subscribe(data =>{
    //   console.log(this.doctorId=data);
      
    // }, error => console.log(error));


  }

 
  go() {
    this.router.navigate(['doctor/home']);
  }
  
  public onAddBooking(bookForm: NgForm): void {
    // this.doctor.doctorDetails=this.doctorDetails;
    this.patientDisplayService.addBooking(bookForm.value).subscribe(
     (response: Patient)=>{
       console.log(response);
       alert("Successfully Booked");
       this.go();
     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
     );
 }



}
