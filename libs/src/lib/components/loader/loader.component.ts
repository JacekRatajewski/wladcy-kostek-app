
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'wka-ui-loader',
    templateUrl: 'loader.component.html',
    styleUrl: 'loader.component.scss'
})
export class LoaderComponent {
    constructor(public loader: LoaderService) { }
}