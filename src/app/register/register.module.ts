import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
// import { ProfilePageModule } from '../profile/profile.module';
import { RegisterPage } from './register.page';
import { ProfilePage } from '../profile/profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
  ],
  declarations: [RegisterPage, ProfilePage]
})
export class RegisterPageModule {}
