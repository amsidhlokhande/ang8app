import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amsidh Lokhande';
  searchText:string='';

  public employees: any[] = [
    {
      employeeId: 1,
      gender:'Male',
      employeeName: 'Amsidh Lokhande',
      emailId: 'amsidhlokhande@gmail.com',
      dateOfBirth: '05/may/1983',
      telephone: 8108551845,
      salary: 5465.4165546565
    },
    {
      employeeId: 2,
      gender:'Male',
      employeeName: 'Aditya Amsidh Lokhande',
      emailId: 'adityalokhande@gmail.com',
      dateOfBirth: '18/oct/1985',
      telephone: 810855434,
      salary: 585.6665765445
    },
    {
      employeeId: 3,
      gender:'Female',
      employeeName: 'Adithi Lokhande',
      emailId: 'adithilokhande@gmail.com',
      dateOfBirth: '25/nov/1990',
      telephone: 810855099,
      salary: 5465.876898675544
    },
    {
      employeeId: 4,
      gender:'Female',
      employeeName: 'Anjali Lokhande',
      emailId: 'anjalilokhande@gmail.com',
      dateOfBirth: '25/nov/1990',
      telephone: 810855687,
      salary: 54.454
    }
  ];

  constructor(private router:Router){
    
  }
  showStudent(){
   this.router.navigate(['/student']);   
  }

}
