import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { exists } from 'fs';


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
  users = [];

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
                
                
              }

  /** Form Details Save */
    saveFormData() {
      this.submitted = true;
      if(this.form.invalid) {
        return;
      }
      this.createDatabase();
      alert('SUCCESS!!:- \n\n' + JSON.stringify(this.form.value, null, 4));
    }

  
    createDatabase() {
      this.sqlite.create({
        name: 'items.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        this.database = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS USERS(name VARCHAR(32), gender VARCHAR(32), dob DATE , permanentAddress VARCHAR(32), temporaryAddress VARCHAR(32), skills VARCHAR(32))",
        []).then(()=> console.log('Execute SQL'))
           .catch(e => console.log(e));

          //  Inserting data into SQL
          let q = "INSERT INTO USERS(name, gender, dob, permanentAddress, temporaryAddress, skills) VALUES (?, ?, ?, ?, ?, ?)";
          db.executeSql(q, [this.form.value.name, this.form.value.gender, this.form.value.dob, this.form.value.permanentAddress, this.form.value.temporaryAddress, this.form.value.skills])
          .then(()=>console.log("Data Inserted"))
          .catch((e)=>console.log(e));

          // Fetching data from table
          db.executeSql("SELECT * FROM USERS", []).then(res=>{
            console.log("Select statement executed " + res);
            this.users = [];
            if(res.rows.length>0) {
              for(var i = 0; i < res.rows.length; i++) {
                this.users.push(res.rows.item(i));
              }
              console.log(this.users);
            }
          }).catch((e)=>console.log(e));
      })
      .catch(e => console.log(e));
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
