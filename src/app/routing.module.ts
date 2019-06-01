import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tec',
        loadChildren: './tec/tec.module#TecModule'
    },
    {
        path: '',
        redirectTo: 'tec',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'tec',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}