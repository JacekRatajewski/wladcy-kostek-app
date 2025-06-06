import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import * as maplibregl from 'maplibre-gl';
import { EventsService } from './events/events.service';
import { Area } from './events/area.enum';
import { MapComponent } from './map/map.component';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { LocalstorageService } from './localstorage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MapComponent,
    CommonModule,
    NewsComponent,
    HttpClientModule,
  ],
  providers: [EventsService, LocalstorageService],
  selector: 'wladcy-kostek-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('vid') video!: ElementRef;
  constructor(
    public router: Router,
    private ls: LocalstorageService,
    private http: HttpClient
  ) {}
  ngAfterViewInit(): void {
    (this.video.nativeElement as HTMLVideoElement).play();
  }
  enterName(event: any) {
    this.ls.set('username', event.target.value);
  }
  downloadApk() {
    const fileUrl = 'https://wtwb.xyz/apk/wtwb.apk';
    window.open(fileUrl, '_blank');
  }
}
