import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { News } from './models/news.model';
import { BaseResponse2 } from '@wka/ui';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private hubConnection: signalR.HubConnection;
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${
      isDevMode() ? 'http://localhost:5000' : 'http://20.82.145.167:82'
    }`;
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.url}/newsHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();
  }

  startConnection(): Observable<void> {
    return new Observable<void>((observer) => {
      this.hubConnection
        .start()
        .then(() => {
          console.log('Connection established with SignalR hub');
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error connecting to SignalR hub:', error);
          observer.error(error);
        });
    });
  }

  receiveMessage(): Observable<any> {
    return new Observable<any>((observer) => {
      this.hubConnection.on('NewPost', (message: any) => {
        observer.next(message);
      });
    });
  }
  sendMessage(news: News): Observable<BaseResponse2<number>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${process.env.WKAPI_TOKEN}`
    });
    return this.http.post<BaseResponse2<number>>(`${this.url}/news`, news, {headers});
  }
}
