import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileOptionsPage } from '../profile-options/profile-options.page';
// import { Plugins, CameraResultType, CameraSource } from '@cordova/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  photo="https://i.pravatar.cc/150";

  async openOptions() {
    const optionsModal = await this.modalController.create({
      component: ProfileOptionsPage,
      cssClass: 'transparent-modal'
    });

    // optionsModal.onDidDismiss().then(res=>{
    //   console.log(res);
    //   if(res.role!=='backdrop') {
    //     this.takePicture(res.data);
    //   }
    // });
    return await optionsModal.present();
  }
  async takePicture(type) {
   
  }
}
