import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './home.routes';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';


@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [HomeComponent],
    providers: [provideRouter(routes)],
})
export class HomeModule { }
