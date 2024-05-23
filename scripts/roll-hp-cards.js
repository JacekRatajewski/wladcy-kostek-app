let cardList = [
    `Adalbert Waffling`,
    `Alberta Toothill`,
    `Alberyk Grunnion`,
    `Albus Dumbledore`,
    `Alguff Odrażający`,
    `Almerik Sawbridge`,
    `Amarillo Lestoat`,
    `Andros Niezwyciężony`,
    `Archibald Alderton`,
    `Armando Dippet`,
    `Artemizja Lufkin`,
    `Balfour Blane`,
    `Barberus Bragge`,
    `Beatrix Bloxam`,
    `Beaumont Marjoribanks`,
    `Bertie Bott`,
    `Blenheim Stalk`,
    `Blodwyn Bludd`,
    `Bowman Wright`,
    `Bran Krwiopijca`,
    `Bridget Wenlock`,
    `Burdock Muldoon`,
    `Carlotta Pinkstone`,
    `Carmilla Sanguina`,
    `Celestyna Warbeck`,
    `Chauncey Oldridge`,
    `Cliodna`,
    `Cordelia Misericordia`,
    `Crispin Cronk`,
    `Cyklop`,
    `Cyprian Youdle`,
    `Circe`,
    `Daisy Dodderidge`,
    `Derwent Shimpling`,
    `Devlin Whitehorn`,
    `Donaghan Tremlett`,
    `Dorcas Wellbeloved`,
    `Dunbar Oglethorpe`,
    `Dymphna Furmage`,
    `Dzou Yen`,
    `Eargit Paskudny`,
    `Edgar Stroulger`,
    `Elfrida Clagg`,
    `Elladora Ketteridge`,
    `Ethelred Ever–Ready`,
    `Falco Aesalon`,
    `Felix Summerbee`,
    `Flavius Belby`,
    `Fulbert Bojaźliwy`,
    `Gaspard Shingleton`,
    `Gideon Crumb`,
    `Gifford Ollerton`,
    `Glanmore Peakes`,
    `Glenda Chittock`,
    `Glover Hipworth`,
    `Godryk Gryffindor`,
    `Goliat`,
    `Gondoline Oliphant`,
    `Greta Catchlove`,
    `Gringott`,
    `Grogan Kikut`,
    `Grzegorz Przymilny`,
    `Gulliver Pokeby`,
    `Gunhilda z Gorsemoor`,
    `Gwenog Jones`,
    `Havelock Sweeting`,
    `Heathcote Barbary`,
    `Helga Hufflepuff`,
    `Hengist z Woodcroft`,
    `Herbert Varney`,
    `Herman Wintringham`,
    `Herpon Podły`,
    `Hesper Starkey`,
    `Honoria Nutcombe`,
    `Idris Oakby`,
    `Ignatia Wildsmith`,
    `Jocunda Sykes`,
    `Joscelind Wadcock`,
    `Justus Pilliwickle`,
    `Kasandra Vablatsky`,
    `Katrina von Glockenspieler`,
    `Kirke`,
    `Kirley Duke`,
    `Korneliusz Agryppa`,
    `Królowa Maeve`,
    `Laverne de Montmorency`,
    `Leopoldina Smethwyck`,
    `Leticia Somnolens`,
    `Lorcan d'Eath`,
    `Lucy Karoonda`,
    `Malodora Grymm`,
    `Merlin`,
    `Merton Graves`,
    `Merwyn Złośliwy`,
    `Mirabella Plunkett`,
    `Miranda Goshawk`,
    `Montague Knightley`,
    `Mopsus`,

    `Morholt`,
    `Mungo Bonham`,
    `Musidora Barkwith`,
    `Myron Wagtail`,
    `Newton Skamander`,
    `Norvel Twonk`,
    `Orsino Thruston`,
    `Oswald Beamish`,
    `Pani Tremlett`,
    `Paracelsus`,
    `Perpetua Fancourt`,
    `Ptolemeusz`,
    `Quong Po`,
    `Roderick Plumpton`,
    `Nicholas Flamel`,
]
let rareCardList = [
    `Morgana le Fey`,
    `Merlin`,
    `Falco Aesalon`,
    `Herpon Podły`,
    `Gondoline Oliphant`,
    `Ignatia Wildsmith`,
    `Dorcas Wellbeloved`,
    `Circe`,
    `Bowman Wright`,
    `Nicholas Flamel`,
]



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cardCount = 23;
let rareCardIndexesRolled = [];
let rolledCards = []
for (let i = 0; i < cardCount; i++) {
    let roll = () => {
        let cardIndex = getRandomInt(0, cardList.length-1);
        let randomCard = cardList[cardIndex]
        let rareCardIndex = rareCardList.indexOf(randomCard)
        if(rareCardList.includes(randomCard) && !rareCardIndexesRolled.includes(rareCardIndex)) {
            rareCardIndexesRolled.push(rareCardIndex);
            return `${randomCard}*`
        } 
        if (!rareCardList.includes(randomCard)) {
            return randomCard
        } else {
            randomCard = roll()
            return randomCard
        }
    }
    const card = roll()
    rolledCards.push(card)
}

const uniqueCards = {};
rolledCards.map(c => `${c} `).forEach(function (x) { uniqueCards[x] = (uniqueCards[x] || 0) + 1; });
console.log(uniqueCards)