import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { AdminDoctorService } from '../service/admin-doctor.service';


@Component({
  selector: 'app-admin-doctor-details',
  templateUrl: './admin-doctor-details.component.html',
  styleUrls: ['./admin-doctor-details.component.css']
})
export class AdminDoctorDetailsComponent implements OnInit {
  public doctors: Doctor[] = [];

  constructor(private adminDoctorService: AdminDoctorService) { }

  ngOnInit() {
    this.getDoctor();
  }
  
  public getDoctor(): void {
    this.adminDoctorService.getDoctor().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
        console.log("success");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateDetails:Doctor[] = [];
  updateDoctorDetails:any={
    id:"",
    doctorId:"",
    firstName:"",
    lastName:"",
    imageUrl:"",
    specialization:"",
    emailId:"",
    phoneNo:"",
    address:"",
    password:""

   }
 
  
  displayStyle="none";
  openPopup(data:any) {
    this.displayStyle = "block";
    this.updateDoctorDetails=data;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.adminDoctorService.updateDoctor(this.updateDoctorDetails).subscribe(data=>
      {
        console.log(data);
      })
  }

  OnDeleteDoctor(pro:any)
  {
    this.adminDoctorService.deleteDoctor(pro.id).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          alert("Do you want to delete?");
          this.getDoctor();
      })
  }

  
}
