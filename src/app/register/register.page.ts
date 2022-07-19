import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  addressDisabled:boolean;
  isChecked;
  text='';
  constructor(private router: Router) {
  }

  checkboxClick(e) {
    var statement = true;
    if(statement) {
      e.target.checked = true; 
      this.addressDisabled = true;
    } else {
      e.target.checked = false;
      this.addressDisabled = false;
    }
  }

  addingSkills(e) {
    this.text += e.target.value + " | ";
    // var lastChar = this.text.slice(-1);
    // if(lastChar=='|') {
    //   this.text = this.text.slice(0, -1);
    // }
    // var length = this.text.length;
    
    // this.text = this.text.slice(0, length-2);
    var input = <HTMLInputElement> document.getElementById('text_input');
    input.value="";
  }

  ngOnInit() {
  }

}
