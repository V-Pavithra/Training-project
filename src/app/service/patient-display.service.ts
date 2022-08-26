import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientDisplayService {
    private apiServerUrl = environment.apiBaseUrl;
  
    constructor(private http: HttpClient) { }

    public getBooking(): Observable<Patient[]> {
      return this.http.get<Patient[]>(`${this.apiServerUrl}/getPatients`);
    }
  
    public addBooking(data: Patient): Observable<Patient> {
      return this.http.post<Patient>(`${this.apiServerUrl}/bookPatients`, data);
    }
  
    public updateBooking(data: Patient): Observable<Patient> {
      return this.http.put<Patient>(`${this.apiServerUrl}/updateBooking/${data.appointmentId}`, data);
    }
    
  

}
