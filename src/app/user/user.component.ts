import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  private users: Array<UserModel>

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.UserService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }

  public edit(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createUserComponent']);
  }

  public delete(user: UserModel): void {
    this.UserService.delete(user);
    location.reload();
  }
}
