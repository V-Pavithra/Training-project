import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { AdminDoctorService } from '../service/admin-doctor.service';

@Component({
  selector: 'app-add-doctor-form',
  templateUrl: './add-doctor-form.component.html',
  styleUrls: ['./add-doctor-form.component.css']
})
export class AddDoctorFormComponent implements OnInit {
  public doctors: Doctor[] = [];

  constructor(private adminDoctorService: AdminDoctorService,private route: Router) { }

  ngOnInit() {
    
  }
  
 
  go() {
    this.route.navigate(['admin/doctor']);
  }

  public onAddDoctor(addForm: NgForm): void {
     this.adminDoctorService.addDoctor(addForm.value).subscribe(
      (response: Doctor)=>{
        this.go();
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }

}

 

