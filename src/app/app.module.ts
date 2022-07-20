import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ProfilePageModule } from './profile/profile.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileoptionsPipe } from './profileoptions.pipe';

@NgModule({
  declarations: [AppComponent, ProfileoptionsPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ProfilePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
