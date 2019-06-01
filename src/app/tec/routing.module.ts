import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecComponent } from './tec.component';
import { UserEditComponent } from './users/user-edit.component';
import { UserNewComponent } from './users/user-new.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        component: TecComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'users/new',
                component: UserNewComponent
            },
            {
                path: 'users/:id',
                component: UserEditComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}