import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  userNewForm: FormGroup;

  constructor(private location: Location,
              private userService: UserService) {}

  ngOnInit() {
      this.userNewForm = new FormGroup({
          name: new FormControl('', [ Validators.required, Validators.minLength(4)]),
          lastname: new FormControl('', [ Validators.required, Validators.minLength(4)]),
          username: new FormControl('', [ Validators.required, Validators.minLength(5)]),
          isblock: new FormControl('1', [ Validators.required]),
          direccion: new FormControl('', [ Validators.required, Validators.minLength(5)]),
      });
  }

  onCancel() {
      this.location.back();
  }


  onSave(form: FormGroup) {
      if (form.invalid) {
          return false;
      }

      const { name, lastname, username, isblock, direccion } = form.value;
      const now = Date.now();
      const newUser: User = {
          name,
          lastname,
          username,
          password: "123456",
          isblock: +isblock,
          direccion,
          fechcreated: now,
          fechupdate: now
      };
      console.log("registrar");
      this.userService.createUser(newUser).subscribe(res => {
          this.location.back();
      })
  }
}
