import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@wka/ui';
import { LiquidComponent } from './components/liquid/liquid.component';


@NgModule({
    imports: [CommonModule, RouterModule, UiModule],
    exports: [HeaderComponent, SidebarComponent, LayoutComponent, LiquidComponent],
    declarations: [HeaderComponent, SidebarComponent, LayoutComponent, LiquidComponent],
    providers: [],
})
export class LayoutModule { }
