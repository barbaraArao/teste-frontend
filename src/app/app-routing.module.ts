import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
