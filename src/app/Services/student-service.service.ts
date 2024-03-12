import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { student } from '../Infrastructure/student.Infrastructure';
import { StudentViewModel } from '../Infrastructure/StudentView';
import { Gender } from '../Infrastructure/Gender.Infrastructure';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  // deleteStudent(id: number, studentData: student) {
  //   throw new Error('Method not implemented.');
  // }
  private baseApiUri = "https://localhost:44373";
  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<student[]> {
    return this.httpClient.get<student[]>(this.baseApiUri + '/api/students/GetAllStudent')
  }

  addStudent(model: student): Observable<student> {
    const vm: StudentViewModel = {
      name: model.name,
      birthDate: model.birthDate,
      email: model.email,
      contact: model.contact,
      genderId: model.genderId,
      physicalAddress: model.address.physicalAddress,
      postalAddress: model.address.postalAddress
    }
    return this.httpClient.post<student>(this.baseApiUri + '/api/students/addstudent', vm);
  }

  deleteStudent(Id: number): Observable<student> {
    return this.httpClient.delete<student>(this.baseApiUri + '/api/students/deleteStudent/' + Id);
  }

  updateStudent(Id:number,model: student): Observable<student> {
    const vm: StudentViewModel = {
      name: model.name,
      birthDate: model.birthDate,
      email: model.email,
      contact: model.contact,
      genderId: model.genderId,
      physicalAddress: model.address.physicalAddress,
      postalAddress: model.address.postalAddress
    }
    return this.httpClient.put<student>(this.baseApiUri + '/api/students/updateStudent/'+Id, vm);
  }

  getAllGenders():Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.baseApiUri + '/api/genders/getallgender');
  }

  getStudent(Id:string):Observable<student>
  {
    return this.httpClient.get<student>(this.baseApiUri+'/api/students/getStudent/'+Id);
  }
  GetRelativePath(relativePath:string){
    return`${this.baseApiUri}/${relativePath}`;
  }
  UploadImage(Id:number,file:File):Observable<any>{
    const formData=new FormData();
    formData.append("ProfileUri",file);
    return this.httpClient.post(this.baseApiUri+
      '/api/students/ImageUpload/'+Id,formData,{responseType:'text'})
  }
}



