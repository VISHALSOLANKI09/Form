import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePageModule } from './profile/profile.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { HttpClientModule } from '@angular/common/http';
import { ProfileOptionsPage } from './profile-options/profile-options.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [Camera, File, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
