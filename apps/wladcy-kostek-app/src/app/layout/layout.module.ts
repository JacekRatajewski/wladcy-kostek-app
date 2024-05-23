import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@wka/ui';


@NgModule({
    imports: [CommonModule, RouterModule, UiModule],
    exports: [HeaderComponent, SidebarComponent, LayoutComponent],
    declarations: [HeaderComponent, SidebarComponent, LayoutComponent],
    providers: [],
})
export class LayoutModule { }
