import { NgModule } from '@angular/core';

import { IconComponent } from './components/icon/icon.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { VarDirective } from './directives/var/var.directive';

@NgModule({
    imports: [],
    exports: [IconComponent, TooltipDirective, VarDirective],
    declarations: [IconComponent, TooltipDirective, VarDirective],
    providers: [],
})
export class UiModule { }
