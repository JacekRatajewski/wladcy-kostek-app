import { Component, OnInit } from '@angular/core';
import { NewsService } from '../events/news.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalstorageService } from '../localstorage.service';
import { CommonModule } from '@angular/common';
import { News } from '../events/models/news.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  providers: [NewsService, LocalstorageService],
  selector: 'wladcy-kostek-news',
  templateUrl: 'news.component.html',
  styleUrl: 'news.component.scss',
})
export class NewsComponent implements OnInit {
  posts$: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([]);
  username$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  newPost$: Subject<News> = new Subject<News>();
  username!: string;
  posts: News[] = [];
  constructor(private ns: NewsService, private ls: LocalstorageService) {}

  ngOnInit(): void {
    this.posts$.subscribe({
      next: (v) => {
        this.posts = v.sort((x, y) =>
          new Date(x.dateTime) < new Date(y.dateTime) ? 1 : -1
        );
      },
    });
    this.username$.subscribe({
      next: (value) => {
        this.username = value;
      },
    });
    this.ls.get$('username', this.username$, 1);
    let posts: any;
    this.ls.get('posts', posts);
    if (posts !== null) {
      this.posts$.next(posts);
    }
    this.ns.startConnection().subscribe(() => {
      this.ns.receiveMessage().subscribe((message: News) => {
        this.newPost$.next(message);
      });
    });
    this.newPost$.subscribe({
      next: (news: News) => {
        const posts = [...this.posts$.value, news];
        this.ls.set('posts', posts);
        this.posts$.next(posts);
      },
    });
  }

  removeHashtags(message: string) {
    const hashs = message.match(/#[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/g) as string[];
    return hashs?.length > 0 ? message.split(hashs[0])[0] : message;
  }

  getHashtags(message: string): string[] {
    return message.match(/#[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/g) as string[];
  }

  addPost() {
    return null;
  }
}
