import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridDetailsComponent } from './grid/grid-details/grid-details.component';

export const routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
    { path: '/trip-details', component: AppComponent },
    {
        path: '/trips', component: GridComponent, children: [
            { path: '/user-details', component: GridDetailsComponent },
        ]
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
