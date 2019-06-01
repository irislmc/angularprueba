import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private allUsers: User[];
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(private router: Router,
              private userService: UserService) {
                console.log("dddddd");
               }

  ngOnInit() {

      this.allUsers = [];
      this.userService.getUsers().subscribe((users: User[]) => {
          this.allUsers = users;
          this.collectionSize = this.allUsers.length;
      });
  }

  get users() {
      return this.allUsers
          .map((user, i) => ({ idx: i + 1, ...user}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize)
  }

  onUpdateUser(user: User) {
      this.router.navigate(['/tec/users/', user.id]);
  }

  onRemoveUser(user: User) {
      this.userService.deleteUser(user.id). subscribe(res => {
          this.allUsers.splice(this.allUsers.indexOf(user), 1);
      });
  }
}
