import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, Theme, ButtonColors } from '@wka/ui';

@Component({
  selector: 'wka-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss',
})
export class SettingsDialogComponent {
  @ViewChild(DialogComponent) dialog!: DialogComponent;
  public ButtonColors = ButtonColors;
  public themes: Theme[] = [
    {
      key: 'dark',
      name: 'Ciemny',
      selected: true,
    },
    {
      key: 'light',
      name: 'Jasny',
      selected: false,
    },
  ];
  public showDialog() {
    this.dialog.showDialog();
  }

  public closeDialog(event: any) {
    this.dialog.closeDialog(event, true);
  }
}
