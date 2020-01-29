import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserInformation } from 'src/app/shared/models/user-information.model';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUsers : UserInformation[]; 
  panelOpenState = false;


  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(){
    this.userService.getProfiles().subscribe(
      success => {
       this.listUsers = success.data;
      },
      error=>{
        console.log(error)
      }
    )
  }
  setDefaultPic(user){
    user.photo = '../assets/images/avatar.jpg'
  }

}
