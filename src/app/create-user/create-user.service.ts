import { HttpClient } from '@angular/common/http';
import { RestResponse } from './../model/restResponse.model';
import { UserModel } from './../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class CreateUserService {

  constructor(private http:HttpClient) {

   }

   public validate(user: UserModel) : boolean{
    let isValid = true;

    
    if(!user.name){
        isValid = false;
     }
     else if(!user.surname){
       isValid = false;
     }
     
     return isValid;
   }
    
  public saveOrUpdate(user: UserModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify(user));
  }
}
