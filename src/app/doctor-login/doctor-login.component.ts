import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDoctorService } from '../service/admin-doctor.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  doctor = new Doctor();
  msg='';
  id!: number; 

  constructor(private adminDoctorService: AdminDoctorService,private route: Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  go(id: number){
    // this.router.navigateByUrl(`/doctor/${id}/home`);
		this.route.navigate(['/doctor/home']); 
	}

  loginDoctor(){
    this.adminDoctorService.loginDoctorFromRemote(this.doctor).subscribe(
      data => {
        console.log("response received");
         alert("Successfully Logged")
        this.go(this.id);
      },
      error => {
        console.log("Exception occured");
        this.msg="Bad Credentials, Please Enter valid DoctorId and Password";
      }
    );
  }
  
}

