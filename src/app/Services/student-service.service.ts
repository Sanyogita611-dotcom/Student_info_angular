import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { student } from '../Infrastructure/student.Infrastructure';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 private baseApiUri="https://localhost:44373";
  constructor(private httpClient:HttpClient) { }

  getAllStudents():Observable<student[]>
  {
    return this.httpClient.get<student[]>(this.baseApiUri+'/api/Students/GetAllStudent')
  }
}
