import { UserModel } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpstatus';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [CreateUserService]
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;
  private isValid: boolean = true;
  private message: string = "¡Rellena los campos obligatorios!";

  constructor(private CreateUserService: CreateUserService, private router: Router) {
    this.user = new UserModel;
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
    this.isValid = this.CreateUserService.validate(this.user);

    if (this.isValid) {
      this.CreateUserService.saveOrUpdate(this.user).subscribe(res => {
        if (res.responseCode == OK) {
          this.router.navigate(['/userComponent']);
        }
        else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    }
  }
}
