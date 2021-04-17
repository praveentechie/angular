import { NgModule } from "@angular/core";
import { CoreModule } from '@apcore/core.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent }     from './login.component';

@NgModule({
  imports: [
    CoreModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}