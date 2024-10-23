import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NewsService } from '../events/news.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalstorageService } from '../localstorage.service';
import { CommonModule } from '@angular/common';
import { News } from '../events/models/news.model';
import { DomSanitizer } from '@angular/platform-browser';
declare let particlesJS: any;
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
  hasRoot!: boolean;
  rootPosts: News[] = [
    {
      videoUrl: '../../assets/videos/deer.mp4',
      message:
        'Widziałem coś, czego nie da się opisać... Zombie jeleń. Tak, dobrze czytacie. Pędził przez las jak szalony, trup, a jednak wciąż się rusza. Jak z tego chorego filmu "Train to Busan", tylko to dzieje się tu, na żywo. Nie wiem, co tu się dzieje, ale jeśli takie bestie biegają po okolicy, to nie mamy szans. Bądźcie ostrożni. One się zmieniają. #ZombieJeleń #PoznańApokalipsa #StayVigilant',
      title: 'Jeleń Zombie, Nie uwierzysz!',
    },
    {
      message: 'Nie wiem, czy to czytasz, czy jeszcze żyjesz... Wczoraj wieczorem dałem Ci tę zagadkę, ale teraz żałuję. To nie była zabawka. Nie wiedziałem, co się stanie. Nie rozumiem, co się dzieje, ale ludzie umierają... a potem... wracają. Posłuchaj, jeśli to czytasz, musisz znaleźć odpowiedź na tę zagadkę. To może być twoja jedyna nadzieja. Pierwsza litera, którą Ci podam to M. Pamiętaj o tym. Musisz zebrać wszystkie.',
      title: 'Zagadka Lu Ban 1'
    },
    {
      message: 'Jest coraz gorzej, wszędzie są krzyki. Ludzie znikają. Jestem w szpitalu, a to, co tu widzę... Nie mogę tego opisać. Słuchaj, ta zagadka, którą Ci dałem... ona jest ważna. Może być jedyną szansą. Kolejna litera, którą musisz zapamiętać, to Z. Nie wiem, ile czasu zostało, ale musisz działać szybko. Błagam Cię, nie ignoruj tego!',
      title: 'Zagadka Lu Ban 2'
    },
    {
      message: 'Jestem pewien, że ta zagadka to coś więcej niż tylko gra. Może to być antidotum, jakieś lekarstwo, coś, co powstrzyma to, co się dzieje. Nie jestem pewien, ale musisz zebrać wszystkie litery, żeby znaleźć odpowiedź. Kolejna litera to O. Proszę, jeśli jeszcze żyjesz, znajdź te litery. To może być jedyny sposób, żeby to zatrzymać.',
      title: 'Zagadka Lu Ban 3'
    },
    {
      message: 'Słyszę ich. Są coraz bliżej. Widziałem rzeczy, których nie potrafię wyjaśnić. Ci ludzie... oni nie żyją, a jednak wciąż się poruszają. Jeśli nie znajdziesz rozwiązania, wszyscy zginiemy. Kolejna litera to I. Zbieraj je, bo to może być klucz do wszystkiego. Nie wiem, ile jeszcze mam czasu.',
      title: 'Zagadka Lu Ban 4'
    },
    {
      message: 'Wiem, że to brzmi jak szaleństwo, ale musisz mi uwierzyć. Wszystko, co dałem Ci wczoraj, może być odpowiedzią. Już nie wiem, komu ufać, ale jeśli Ty wciąż jesteś przy życiu, musisz mi zaufać. Kolejna litera to B. Zapamiętaj ją. Zostało niewiele czasu.',
      title: 'Zagadka Lu Ban 5'
    },
    {
      message: 'To może być ostatnia wiadomość, którą wysyłam. Oni są wszędzie. Widziałem, co się z nimi dzieje, kiedy wracają. Musisz zebrać wszystkie litery i znaleźć rozwiązanie. Może to otworzy coś ważnego... Kolejna litera to E. Jeśli zebraliście wszystkie, to powinno dać odpowiedź. Proszę, nie marnuj tego.',
      title: 'Zagadka Lu Ban 6'
    }
  ];
  public selectedValue: string | number = -1;
  constructor(
    private ns: NewsService,
    private ls: LocalstorageService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initParticles();
    this.hasRoot = localStorage.getItem('root') === 'true' ?? false;
    this.posts$.subscribe({
      next: (v) => {
        if (v?.length ?? 0 > 0) {
          this.posts = v.sort((x, y) =>
            new Date(x.dateTime as string) < new Date(y.dateTime as string)
              ? 1
              : -1
          );
        }
      },
    });
    this.username$.subscribe({
      next: (value) => {
        this.username = value;
      },
    });
    this.ls.get$('username', this.username$, 1);
    this.ns.startConnection().subscribe(() => {
      this.ns.receiveMessage().subscribe((message: News) => {
        this.newPost$.next(message);
      });
    });
    this.newPost$.subscribe({
      next: (news: News) => {
        const posts = [...(this.posts$.value ?? []), news];
        this.ls.set('posts', news);
        this.posts$.next(posts);
      },
    });
  }

  initParticles() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ff0000' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
    requestAnimationFrame(() => {
      return;
    });
  }

  ngAfterViewInit() {
    this.ls.get$('posts', this.posts$);
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
  }

  safeUrl(url?: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url as string);
  }

  removeHashtags(message?: string) {
    const hashs = message?.match(/#[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/g) as string[];
    return hashs?.length > 0 ? message?.split(hashs[0])[0] : message;
  }

  getHashtags(message?: string): string[] {
    return message?.match(/#[\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+/g) as string[];
  }

  addPost() {
    const post = this.rootPosts.find(
      (x) => x.title === this.selectedValue
    ) as News;
    this.ns
      .sendMessage({
        imageBase64: 'https://imagizer.imageshack.com/img924/3016/HddMYw.png',
        userId: 'WatchTheWorldBurn',
        message: post.message,
        title: post.title,
        videoUrl: post.videoUrl,
      })
      .subscribe();
    return null;
  }
}
