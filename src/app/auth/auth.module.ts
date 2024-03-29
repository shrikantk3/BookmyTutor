import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRouterModule } from './auth.router.module'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { SignupStepsComponent } from './signup-steps/signup-steps.component';
import { MatRadioModule } from '@angular/material/radio'
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { authServices } from './auth.services';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AuthComponent,
    SignupStepsComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule,
    SharedModule,
    RouterModule,
    MatRadioModule,
    NgSelectModule,
    MatIconModule,
    HttpClientModule
  ],
  providers:[authServices]
})
export class AuthModule { }
