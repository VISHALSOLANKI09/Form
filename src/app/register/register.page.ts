import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  addressDisabled:boolean;
  isChecked;
  text='';
  form: FormGroup;
  submitted = false;
  private database: SQLiteObject;

  constructor(private router: Router,
              private fb: FormBuilder,
              private sqlite: SQLite) {
              
                // FormControl Names
                this.form = this.fb.group({
                  name: [null, [Validators.required, Validators.minLength(4)]],
                  gender: [null, [Validators.required]],
                  dob: [null, Validators.required],
                  permanentAddress: [null, Validators.required],
                  temporaryAddress: [null],
                  skills: [null]
                });
                
                // Creating Database
                this.sqlite.create({
                  name: 'items.db',
                  location: 'default'
                }).then()
    }

  /** Form Details Save */
    saveFormData() {
      this.submitted = true;
      if(this.form.invalid) {
        return;
      }
      alert('SUCCESS!!:- \n\n' + JSON.stringify(this.form.value, null, 4));
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
