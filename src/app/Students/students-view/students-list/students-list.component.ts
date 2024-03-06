import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { student } from '../../../Infrastructure/student.Infrastructure';
import { StudentServiceService } from '../../../Services/student-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'] // Corrected property name to styleUrls
})

export class StudentsListComponent implements OnInit{
  students:student[]=[];
 displayedColumns:string[]=['Name','Email','BirthDate','edit']
 dataSource:MatTableDataSource<student>=new
 MatTableDataSource<student>();
  @ViewChild(MatPaginator) matpaginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;
  FilterText='';

 constructor(private studentService:StudentServiceService){}
  ngOnInit(): void {

    this.studentService.getAllStudents().subscribe(
      (successRepo)=>{
        this.students=successRepo;
        this.dataSource=new MatTableDataSource<student>(this.students);
        if(this.matpaginator){
          this.dataSource.paginator=this.matpaginator;
        }
        if(this.matSort){
          this.dataSource.sort=this.matSort;
        }
      },
      (errorRes)=>{
        console.log(errorRes);
      }
    );
  }
  FilterStudent()
  {
    this.dataSource.filter=this.FilterText;
  }
}
