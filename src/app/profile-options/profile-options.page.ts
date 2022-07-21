import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  message = 'hello';
  @Output() photo: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modalController: ModalController,
              private camera: Camera,
              private file: File) { }
  
  ngOnInit() {
    console.log(this.base64Image);
  }

  // for camera options

  /** TAKE PHOTO  */
  async takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    await this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.confirm();
    }, (err) => {
      // Handle error
    });
    
  }

  sendPhoto(e) {
    this.photo.emit(this.base64Image);
  }


  confirm() {
    return this.modalController.dismiss(this.base64Image, 'confirm');
  }

  // closeModal() {
  //   this.modalController.dismiss(null, 'backdrop');
  // }

}
