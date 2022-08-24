import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Doctor } from '../doctor';


@Injectable({
  providedIn: 'root'
})
export class AdminDoctorService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/getDetails`);
  }

  public getById(id: number): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/getDoctorById/${id}`);
  }

  public addDoctor(data: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/addDoctor`, data);
  }

  public updateDoctor(data: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.apiServerUrl}/updateDoctor/${data.id}`, data);
  }

  public deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteDoctor/${id}`);
  }

  public loginDoctorFromRemote(data :Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/loginDoctor`, data);
  }
  
  // public storeDetails(doctor: Doctor) {
  //   //console.log("storeDetails()"+data);
  //   console.log("local storage is called")
  //   // localStorage.setItem('data', data)
  //   localStorage.setItem('id', doctor.doctorId.toString());
  //   //console.log("here"+localStorage.getItem('data'));
  // }

  // setDoctorId(doctorId: String){
  //   this.doctorId=doctorId;
  // }
}
