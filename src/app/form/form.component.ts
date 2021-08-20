import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private commonservice:CommonService) { }
  userObj={
    task:'',
    desc:''
  }
  users:any;
  ngOnInit() {
  this.retrieveUser();
  }
  register(formObj: any)
  {
    console.log(formObj);
    this.commonservice.createUser(formObj).subscribe((response)=>{
      alert('Task Added Successfully');
      this.retrieveUser();
    })
  }
  retrieveUser()
  {
    this.commonservice.retrieveUser().subscribe((response)=>{
      this.users=response;
    })
    }
    deleteUser(allusers:any)
    {
      this.commonservice.deleteUser(allusers).subscribe((response)=>{
        alert("Task Deleted");
        this.retrieveUser();
      })
    }
    editUser(allusers:any)
    {
      this.userObj=allusers;
    }
    updateUser()
    {
      this.commonservice.updateUser(this.userObj).subscribe((response)=>{
        alert("Task Updated Successfully");
        this.retrieveUser();
      })
    }
  }


