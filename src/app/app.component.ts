import { Component, OnInit } from '@angular/core';
import { HttpSerService } from './shared/http-ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular';
  userInfo : any[] = []

  page : number = 1;
  count : number = 0;
  tableSize : number = 10;
  tableSizes : any = [5,10,15,20]

  constructor(private httpServ : HttpSerService){}
  ngOnInit(){
   this.getUsersDetails()
  }

  getUsersDetails(){
    this.httpServ.getData().subscribe(
      (data) => this.userInfo = data
    )
  }
  
  changeTaskStatus(user : any){
   user.completed = !user.completed
  }

  onTableChange(e:any){
   this.page = e;
   this.getUsersDetails()
  }

  onTableSizeChange(e : any){
    this.tableSize = e.target.value;
    this.page = 1;
    this.getUsersDetails()
  }


}
