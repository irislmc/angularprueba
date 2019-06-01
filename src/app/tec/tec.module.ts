import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './routing.module';
import { UserEditComponent } from './users/user-edit.component';
import { UserNewComponent } from './users/user-new.component';
import { UsersComponent } from './users/users.component';
import { TecComponent } from './tec.component';
import { UserService } from '../tec/services/user.service';

@NgModule({
  declarations: [UserEditComponent, UserNewComponent, 
          UsersComponent, TecComponent],
  imports: [CommonModule, RoutingModule, FormsModule, 
          ReactiveFormsModule, NgbModule],
  exports: [UserEditComponent, UserNewComponent, 
          UsersComponent, TecComponent],
  providers: [UserService]
})
export class TecModule { 
}