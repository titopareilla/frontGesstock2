import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';

/*
* Módulo que enruta las aplicaciones,
* permite navegar entre pantallas (aplicaciones)
*/
const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full'},
    { path: 'appComponent', component: AppComponent},
    { path: 'userComponent', component: UserComponent},
    { path: 'createUserComponent', component: CreateUserComponent},
    { path: 'loginComponent', component: LoginComponent},
    { path: 'navbarComponent', component: NavbarComponent},
    { path: 'index', component: IndexComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
