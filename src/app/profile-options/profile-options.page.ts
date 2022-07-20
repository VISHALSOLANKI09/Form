import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.page.html',
  styleUrls: ['./profile-options.page.scss'],
})
export class ProfileOptionsPage implements OnInit {
  base64Image: string;
  constructor(private modalController: ModalController,
              private camera: Camera,
              private file: File) { }
  
  ngOnInit() {
    console.log();
  }

  // for camera options
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG
  }

  // for storing image
  tempImg = this.camera.getPicture(this.options);
  // tempFileName = this.tempImg.substr(this.tempImg.lastIndexOf('/')+1);
  
  /** GALLERY OPTIONS  */
  // private optionsGallery: CameraOptions = {
  //   quality: 100,
  //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //   destinationType: this.camera.DestinationType.DATA_URL,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }

  /** TAKE PHOTO  */
  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }


  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }

}
