import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@wka/ui';
import { LiquidComponent } from './components/liquid/liquid.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';

const components = [
  HeaderComponent,
  SidebarComponent,
  LayoutComponent,
  LiquidComponent,
  SettingsDialogComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, UiModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class LayoutModule {}
