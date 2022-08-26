import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { AdminDoctorService } from '../service/admin-doctor.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
  doctorId!: String;
  public doctors!: Doctor[];
  searchDoctor: any;
  constructor(private adminDoctorService: AdminDoctorService) { }

  ngOnInit() {
    this.getDoctor(); 
  }

  public getDoctor(){
    this.adminDoctorService.getDoctor().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
        console.log("success");
        console.log(this.doctors=response,+"added");
      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

}

}



    // this.adminDoctorService.getDoctor().subscribe(
    //     val=>{

    //     this.doctors = val;
    //     console.log(val);







        // this.adminDoctorService.setDoctorId(this.doctors.doctorId);

        // localStorage.setItem('id',this.doctors.doctorId);
        // this.adminDoctorService.storeDetails(this.doctors);
        // console.log("success");
      
  


        // public getDoctor(){
   
  //  this.adminDoctorService.getDoctor().subscribe(
  //   data => {
  //    console.log(data);
  //    console.log(this.doctorIds.doctorId);  
  //   this.doctorIds.doctorId;
  //   }
  //  )

  

