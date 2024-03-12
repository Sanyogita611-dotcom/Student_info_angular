import { Component, OnInit } from '@angular/core';
import { Gender } from '../../Infrastructure/Gender.Infrastructure';
import { student } from '../../Infrastructure/student.Infrastructure';
import { StudentServiceService } from '../../Services/student-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-studentui',
  templateUrl: './studentui.component.html',
  styleUrl: './studentui.component.css' // Make sure this includes your CSS file
})
export class StudentuiComponent implements OnInit{
 Id:string|undefined|null;
 GendersList:Gender[]=[];
 isNew=false;
 headerLabel='';
 ProfileDP='';

 studentData:student={
  id:0,
  name:'',
  birthDate:JSON.stringify(new Date),
  email:'',
  contact:'',
  profileImage:'',
  genderId:0,
  address:{
    id:0,
    physicalAddress:'',
    postalAddress:'',
  },
  gender:{
    id:0,
    title:'',
    description:''
  }
 }


 UpdateStudent():void{
  this.studentService.updateStudent
  (this.studentData.id,this.studentData).
  subscribe(
    (successResponse)=>{
      this.snackBar.open("Student Updated",undefined,{duration:3000})
    }
  );
 }

 DeleteStudent():void{
  this.studentService.deleteStudent
  (this.studentData.id).
  subscribe(
    (successResponse)=>{
      this.snackBar.open("Student Delete",undefined,{duration:3000})

      setTimeout(()=>{
        this.router.navigateByUrl('students');
      },2000);
    }
  );
 }


 AddStudent():void{
  this.studentService.addStudent
  (this.studentData).
  subscribe(
    (successResponse)=>{
      this.snackBar.open("Student Added",undefined,{duration:3000})

      setTimeout(()=>{
        this.router.navigateByUrl('students');
      },2000);
    },
    (errorRes)=>{console.log(errorRes);
    }
  );
 }
  constructor(private studentService:StudentServiceService,
    private snackBar:MatSnackBar,private router:Router,
    private route:ActivatedRoute ){}
  ngOnInit(): void {

    this.studentService.getAllGenders().subscribe((GenderData)=>
    {
      this.GendersList=GenderData;
    })
    this.route.paramMap.subscribe((params)=>
    {
      this.Id=params.get('id')
    });
    if(this.Id)
    {
      if(this.Id.toLowerCase()=="Add".toLowerCase())
      {
        this.isNew=true;
        this.headerLabel="Add New Student";
        this.DefaultImage();
      }
      else{
        this.isNew=false;
        this.headerLabel="Update Student";
        this.studentService.getStudent(this.Id).subscribe((Data)=>{
          this.studentData=Data;
          this.DefaultImage();
        });
      }
    }


  }
  private DefaultImage():void {
    if(this.studentData.profileImage){
      this.ProfileDP=this.studentService.
      GetRelativePath(this.studentData.profileImage);
    }
    else
    {
      this.ProfileDP='/assets/profile-user.png';
    }
    }
  
    ImageUpload(event:any):void{
      if(this.Id){
        const file:File=event.target.files[0];
        this.studentService.UploadImage(this.studentData.id,file)
        .subscribe(
          (successResponse)=>{
            this.studentData.profileImage=successResponse;
            this.DefaultImage();

            this.snackBar.open("Student image Uploaded",undefined,{duration:3000});

          },
          (errorResponse)=>{
            
          }
        );
      }
    }
}
