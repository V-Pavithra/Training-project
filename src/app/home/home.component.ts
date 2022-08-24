import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientDisplayService } from '../service/patient-display.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // patients: Patient=new Patient;
  public patients: Patient[] = [];
  
  constructor(private patientDisplayService: PatientDisplayService, private route: Router) { }

  ngOnInit() {
    this.getBooking();
  }
  
  go(){
    this.route.navigate(['/doctor/home']);
  }
  public getBooking(): void {
    this.patientDisplayService.getBooking().subscribe(
      (response: Patient[]) => {
        this.patients = response;
        console.log("success");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public updatePatient:Patient[]=[];
  uploadPrescription:any={
    appointmentId:"",
    patientName:"",
    age:"",
    phoneNumber:"",
    description:"",
    prescription:""

   }

  displayStyle="none";
  openPopup(data:any) {
    this.displayStyle = "block";
    this.uploadPrescription=data;
  }

  upload()
  {
    this.patientDisplayService.updateBooking(this.uploadPrescription).subscribe(data=>
      {
        console.log(data);
        alert("Successfully updated");
        this.go();
      })
  }

  close(){
    this.displayStyle = "none";
  }

  // onUpload(presForm: any){
  //  console.log("sucess");
  //  this.patientDisplayService.upload(this.uploadPrescription).subscribe(data=>
  //   {
  //     alert("Sucessfully registered");
  //     console.log(this.patients);
  //   }
  //  )
  // }


onUpload()
  {
    this.patientDisplayService.updateBooking(this.uploadPrescription).subscribe(data=>
      {
        console.log(data);
        console.log("printed");
        alert("Successfully updated");
      })
  }


  
}
