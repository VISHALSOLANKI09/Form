import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { $ } from 'protractor';
import { Url } from 'url';
import { ProfileOptionsPage } from '../profile-options/profile-options.page';
// import { Plugins, CameraResultType, CameraSource } from '@cordova/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  message: string;
  photo: any;
  finalPhoto: any;
  constructor(private modalController: ModalController) { }

  async openOptions() {
    const optionsModal = await this.modalController.create({
      component: ProfileOptionsPage,
      cssClass: 'transparent-modal'
    });

    // optionsModal.onDidDismiss().then(res=>{
    //   console.log(res);
    //   if(res.role==='confirm') {
    //     this.photo = res.data;
    //   }
    // });
     optionsModal.present();
     const { data, role } = await optionsModal.onWillDismiss();
     if(role === "confirm") {
      // this.photo = {data};
      this.photo = `${data}`;
      // this.photo = 'https://i.pravatar.cc/150';
     }
  }

  ngOnInit() {
    this.finalPhoto = this.photo;
  }

  async takePicture(type) {
   
  }
}
