import { HttpResponse, http } from 'msw';

const newsHandlers = (url: string) => {
  return [
    http.get(`${url}/news`, async () => {
      // let response = await fetch(
      //   ''
      // );
      // let result = await response.json();
      // let _response = result.articles
      //   .map((article: any, i: number) => {
      //     return {
      //       id: i,
      //       title: article.title,
      //       description: article.description,
      //       shortDescription: article.description,
      //       imageUrl: article.urlToImage,
      //     };
      //   })
      //   .slice(0, 6);
      return HttpResponse.json({
        response: [
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
        ],
      });
    }),
    http.get(`${url}/newsAll`, async () => {
      return HttpResponse.json({
        response: [
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
          {
            id: 0,
            title:
              "Gra Dead by Daylight dodaje zabójcę z D&D, Vecnę, z głosem udzielonym przez DM-a z Critical Role, Matthew'a Mercera, a także planuje dodanie postaci z Castlevanii.",
            description:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            shortDescription:
              'Po zasugerowaniu nadchodzącego rozdziału zainspirowanego grą Dungeons & Dragons, Dead by Daylight ujawniło swojego kolejnego zabójcę, który został wyjęty prosto z kart fantasy RPG w wersji papierowej: Vecna, długo istniejący super-złoczyńca i inspiracja dla złoczyńcy ze Stranger Things. Będzie on...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dnd-vecna.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 1,
            title:
              'Dead by Daylight zdradza, że jako kolejnego mordercę wprowadzi klasycznego potwora z Dungeons & Dragons',
            description:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            shortDescription:
              'Przynosząc postacie takie jak Nemesis z Resident Evil, Pyramid Head z Silent Hill, Demogorgon z Stranger Things i Xenomorph z Alien do swojej gry jeden przeciw wielu o zabawie w chowanego, Dead by Daylight zagłębia się znowu w archiwa po kolejnego klasycznego zabójcę...',
            imageUrl:
              'https://assetsio.gnwcdn.com/dead-by-daylight-dungeons-and-dragons-tease.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp',
          },
          {
            id: 2,
            title: 'Najlepsze gry RPG na PC w 2023 roku',
            description:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            shortDescription:
              'Czy szukasz najlepszych gier RPG na komputer? Trudno wyrazić zróżnicowanie tego ukochanego gatunku. Możesz zasmakować zarówno w kosmicznych podróżach, pojedynkach na miecze świetlne i krwiożerczych wampirach, jak i promieniowanych mutantach, którzy muszą być pokonani za pomocą kijów golfowych...',
            imageUrl:
              'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/04/best-rpg-games-pc-2022.jpg',
          },
          {
            id: 3,
            title:
              '10 najlepszych niezależnych gier fabularnych planszowych według Reddita - WorldNewsEra',
            description:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            shortDescription:
              'Z uwagi na popularność serii Vox Machina, gra Dungeons and Dragons ponownie zyskuje na popularności, a obiecujący nowy zwiastun ich nadchodzącego filmu sprawia, że gry planszowe przeżywają renesans. Niemniej jednak, pomimo że Dungeons and Dragons jest najpopularniejszą, to zdecydowanie nie jest jedyną grą fabularną na rynku. Korzystają one z niezwykle unikalnych systemów.',
            imageUrl:
              'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Indie-Table-Top-RPGs.jpg',
          },
          {
            id: 4,
            title:
              'Remaster trójwymiarowej wersji gry Digital Eclipse "Wizardry: Proving Grounds of the Mad Overlord" jest teraz dostępny na konsolach i PC.',
            description:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            shortDescription:
              'Gdy w 1981 roku premierę miał na Apple II gracz SirTech, "Wizardry: Pola Prób Szalonego Władczy" był pierwszą grą, która odtwarzała styl gry fabularnej Dungeons & Dragons na komputerach domowych. Jako pierwsza gra RPG oparta na drużynie, bezpośrednio inspirowała...',
            imageUrl: 'https://www.techpowerup.com/img/8UrXxA4P6SPI8PrG.jpg',
          },
          {
            id: 5,
            title:
              "Odkryj Podziemne Miasto Półki z Marrowbreak'em",
            description:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            shortDescription:
              "To był piekielny czas w świecie gier. W miarę jak ludzie radzą sobie z faktem, że Wizards of the Coast wysłał Pinkertony po przeciekacza związane z grą Magic: The Gathering, coraz więcej rzeczywistych gier i streamów...",
            imageUrl:
              'https://www.gamespot.com/a/uploads/screen_kubrick/1646/16465123/4306145-image_2024-05-21_102251878.jpg',
          },
          {
            id: 6,
            title:
              'Recenzja: Wizardry: Proving Grounds Of The Mad Overlord (Switch) - Wspaniała Remasterizacja Ikonicznej Gry',
            description:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            shortDescription:
              'Trebor SUX. W Wizardry nie ma mowy o "szczęściu", nie tak jak w innych grach. Możesz czasem trafić na łatwego wroga, ale jeśli zdecydujesz się zaryzykować podczas ekspedycji i zejść na niższy poziom "tylko żeby zobaczyć", to się nie uda. Yo...',
            imageUrl:
              'https://images.nintendolife.com/0d600b62b34e5/1280x720.jpg',
          },
        ],
      });
    }),
  ];
};

export default newsHandlers;
