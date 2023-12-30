const container = document.querySelector(".container");
const scoll1 = document.getElementById("rightscoll");
const scoll2 = document.getElementById("leftscoll");
const box = document.querySelector(`.box`);
const image1 = document.querySelector(`.movieCon`);
const bigScreen1 = document.querySelector(`.bigScreen`);
const tralleryoutube = document.querySelector(`.traller-youtube`);
const homePic = document.querySelector(".home");
const animationPic1 = document.querySelector(".boxHome");
const animationPic2 = document.querySelector(".boxHome1");
const animationPic3 = document.querySelector(".boxHome2");
const animationPic4 = document.querySelector(".boxHome3");
const animationPic5 = document.querySelector(".boxHome4");
const animationPic6 = document.querySelector(".boxHome5");
const animationPic7 = document.querySelector(".boxHome6");
const animationPic8 = document.querySelector(".boxHome7");
const animationPic9 = document.querySelector(".boxHome8");
const animationPic10 = document.querySelector(".boxHome9");
const animationPic11 = document.querySelector(".boxHome10");
const animationPic12 = document.querySelector(".boxHome11");
const animationPic13 = document.querySelector(".boxHome12");
const animationPic14 = document.querySelector(".boxHome13");
const animationPic15 = document.querySelector(".boxHome14");
const animationPic16 = document.querySelector(".boxHome15");
const animationPic17 = document.querySelector(".boxHome16");
const animationPic18 = document.querySelector(".boxHome17");
const animationPic19 = document.querySelector(".boxHome18");
const animationPic20 = document.querySelector(".boxHome19");
const animationPic21 = document.querySelector(".boxHome20");
const animationPic22 = document.querySelector(".boxHome21");
const animationPic23 = document.querySelector(".boxHome22");
const animationPic24 = document.querySelector(".boxHome23");
const animationPic25 = document.querySelector(".boxHome24");
const animationPic26 = document.querySelector(".boxHome25");

const audio = new Audio("audio/clickA.mp3");
let y = [];

const colorArry = [
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
  "#83A2FF",
  "#B4BDFF",
  "#872341",
  "#1640D6",
  "#F3B664",
  "#9FBB73",
  "#435585",
  "#B0A695",
];
const bgcolorArry = [
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
  "#872341",
  "#001B79",
  "#3A4D39",
  "#0C356A",
  "#232D3F",
  "#9A4444",
  "#186F65",
  "#57375D",
  "#016A70",
];
const nameMovie = [
  "Oppenheimer",
  "Mission: Impossible – Dead Reckoning Part One",
  "The Nun II",
  "Barbie",
  "Evil Dead Rise",
  "Haunted Mansion",
  "Knights of the Zodiac",
  "Blue Beetle",
  "John Wick: Chapter 4",
  "Spider-Man: Across the Spider-Verse",
  "Fast X",
  "Dungeons & Dragons: Honor Among Thieves",
  "No Hard Feelings",
  "Meg 2: The Trench",
  "Ant-Man and the Wasp: Quantumania",
  "Insidious: The Red Door",
  "The Pope's Exorcist",
  "Indiana Jones and the Dial of Destiny",
  "65",
  "The Equalizer 3",
  "The Little Mermaid",
  "The Wandering Earth II",
  "Crater",
  "The Super Mario Bros. Movie",
  "Retribution",
  "Gran Turismo",
  "Transformers: Rise of the Beasts",
  "Kandahar",
  "Renfield",
  "A Million Miles Away",
  "Operation Fortune: Ruse de Guerre",
  "Totally Killer",
  "Cocaine Bear",
  "Guy Ritchie's The Covenant",
  "World's Best",
  "Guardians of the Galaxy Vol. 3",
  "To Catch a Killer",
  "Creed III",
  "Plane",
  "Are You There God? It's Me, Margaret.",
  "Teenage Mutant Ninja Turtles: Mutant Mayhem",
  "Clock",
  "The Boogeyman",
  "Boston Strangler",
  "Love Again",
  "Beautiful Disaster",
  "The Burial",
  "Missing",
  "The Machine",
  "Somebody I Used to Know",
];
const trallerArry = [
  "https://www.youtube.com/embed/uYPbbksJxIg",
  "https://www.youtube.com/embed/avz06PDqDbM",
  "https://www.youtube.com/embed/pzD9zGcUNrw",
  "https://www.youtube.com/embed/pBk4NYhWNMM",
  "https://www.youtube.com/embed/BqQNO7BzN08",
  "https://www.youtube.com/embed/AjLKTz81bj8",
  "https://www.youtube.com/embed/Sko0o_KoBHY",
  "https://www.youtube.com/embed/vS3_72Gb-bI",
  "https://www.youtube.com/embed/qEVUtrk8_B4",
  "https://www.youtube.com/embed/cqGjhVJWtEg",
  "https://www.youtube.com/embed/32RAq6JzY-w",
  "https://www.youtube.com/embed/IiMinixSXII",
  "https://www.youtube.com/embed/P15S6ND8kbQ",
  "https://www.youtube.com/embed/dG91B3hHyY4",
  "https://www.youtube.com/embed/ZlNFpri-Y40",
  "https://www.youtube.com/embed/ZuQuOnYnr3Q",
  "https://www.youtube.com/embed/YJXqvnT_rsk",
  "https://www.youtube.com/embed/eQfMbSe7F2g",
  "https://www.youtube.com/embed/bHXejJq5vr0",
  "https://www.youtube.com/embed/19ikl8vy4zs",
  "https://www.youtube.com/embed/kpGo2_d3oYE",
  "https://www.youtube.com/embed/Yf3VreXwVpI",
  "https://www.youtube.com/embed/nWIeQmRNZEY",
  "https://www.youtube.com/embed/TnGl01FkMMo",
  "https://www.youtube.com/embed/jzQn0-WH4WM",
  "https://www.youtube.com/embed/GVPzGBvPrzw",
  "https://www.youtube.com/embed/itnqEauWQZM",
  "https://www.youtube.com/embed/WHs6z9RPGtA",
  "https://www.youtube.com/embed/6LmO6rmDW08",
  "https://www.youtube.com/embed/J-HcUuiLzR8",
  "https://www.youtube.com/embed/WdZ-BWWQcWQ",
  "https://www.youtube.com/embed/vNm3VPPKEQI",
  "https://www.youtube.com/embed/DuWEEKeJLMI",
  "https://www.youtube.com/embed/02PPMPArNEQ",
  "https://www.youtube.com/embed/S2SqLK_FUPI",
  "https://www.youtube.com/embed/u3V5KDHRQvk",
  "https://www.youtube.com/embed/KVO1LnqzxpQ",
  "https://www.youtube.com/embed/AHmCH7iB_IM",
  "https://www.youtube.com/embed/M25zXBIUVr0",
  "https://www.youtube.com/embed/LzRzojHC3iE",
  "https://www.youtube.com/embed/IHvzw4Ibuho",
  "https://www.youtube.com/embed/dsmuf95eshk",
  "https://www.youtube.com/embed/cFqCmIU0-_M",
  "https://www.youtube.com/embed/N_yfmHCkSB0",
  "https://www.youtube.com/embed/CQDXtD2HJAs",
  "https://www.youtube.com/embed/EMK3wy2563g",
  "https://www.youtube.com/embed/ZOhIdaufd3Q",
  "https://www.youtube.com/embed/seBixtcx19E",
  "https://www.youtube.com/embed/jnWwjnM7N5Q",
  "https://www.youtube.com/embed/f497dkv3vfU",
];
const directorName = [
  "Christopher Nolan",
  "Christopher McQuarrie",
  "Michael Chaves",
  "Greta Gerwig",
  "Lee Cronin",
  "Justin Simien",
  "Tomek Bagiński",
  "Ángel Manuel Soto",
  "Chad Stahelski",
  "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
  "Louis Leterrier",
  "Jonathan Goldstein, John Francis Daley",
  "Gene Stupnitsky",
];
const producerName = [
  "Emma Thomas, Charles Roven, Christopher Nolan",
  "Tom Cruise, Christopher McQuarrie",
  "Peter Safran, James Wan",
  "David Heyman, Margot Robbie, Tom Ackerley, Robbie Brenner",
  "Rob Tapert",
  "Dan Lin, Jonathan Eirich",
  "Yoshi Ikezawa, Joseph Chou, Tim Kwok",
  "John Rickard, Zev Foreman",
  "Basil Iwanyk,Erica Lee,Chad Stahelski",
  "Phil Lord, Christopher Miller, Amy Pascal, Avi Arad, Christina Steinberg",
  "Neal H. Moritz, Vin Diesel, Justin Lin, Jeff Kirschenbaum, Samantha Vincent",
  "Jeremy Latcham, Brian Goldner, Nick Meyer",
  "Alex Saks, Naomi Odenkirk, Marc Provissiero, Jennifer Lawrence, Justine Ciarrocchi",
];
const distributor = [
  "Universal Pictures",
  "Paramount Pictures",
  "Warner Bros. Pictures",
  "Warner Bros. Pictures",
  "Warner Bros. Pictures",
  "Walt Disney Studios Motion Pictures",
  "Toei (Japan), Sony Pictures Releasing International (international)",
  "Warner Bros. Pictures",
  "Lionsgate",
  "Sony Pictures Releasing",
  "Universal Pictures",
  "Paramount Pictures",
  "Sony Pictures Releasing",
];
const date = [
  "July 21, 2023",
  "July 12, 2023",
  "September 8, 2023",
  "July 21, 2023",
  "April 21, 2023",
  "July 28, 2023",
  "May 12, 2023 ",
  "August 18, 2023",
  "March 24, 2023",
  "June 2, 2023",
  "May 19, 2023",
  "March 31, 2023",
  "June 23, 2023",
];
const starName = [
  "	Cillian Murphy, Emily Blunt,Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett, Casey Affleck, Rami Malek, Kenneth Branagh",
  "Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby,Esai Morales,Pom Klementieff,Mariela Garriga,Henry Czerny",
  "Taissa Farmiga, Jonas Bloquet, Storm Reid, Anna Popplewell",
  "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon, Issa Rae, Rhea Perlman, Will Ferrell",
  "Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols, Nell Fisher",
  "LaKeith Stanfield, Tiffany Haddish, Owen Wilson, Danny DeVito, Rosario Dawson, Dan Levy, Jamie Lee Curtis, Jared Leto",
  "Mackenyu, Famke Janssen, Madison Iseman, Diego Tinoco, Mark Dacascos, Nick Stahl, Sean Bean",
  "Xolo Maridueña,Adriana Barraza,Damián Alcázar,Raoul Max Trujillo,Susan Sarandon,George Lopez",
  "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, Ian McShane",
  "Shameik Moore, Hailee Steinfeld, Brian Tyree Henry, Lauren Vélez, Jake Johnson, Jason Schwartzman, Issa Rae, Karan Soni, Shea Whigham,Greta Lee, Daniel Kaluuya, Mahershala Ali, Oscar Isaac",
  "Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris 'Ludacris' Bridges, John Cena, Nathalie Emmanuel, Jordana Brewster, Sung Kang, Scott Eastwood, Daniela Melchior, Alan Ritchson, Helen Mirren, Brie Larson, Rita Moreno, Jason Statham, Jason Momoa, Charlize Theron",
  "Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis, Hugh Grant",
  "Jennifer Lawrence, Andrew Barth Feldman, Laura Benanti, Natalie Morales, Matthew Broderick",
];
const movieDetails = [
  "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
  "Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most.",
  "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
  "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
  "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
  "A woman and her son enlist a motley crew of so-called spiritual experts to help rid their home of supernatural squatters.",
  "When a headstrong street orphan unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess who was sent to watch over humanity.",
  "Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.",
  "With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.",
  "In an attempt to curb the Spot, a scientist, from harnessing the power of the multiverse, Miles Morales joins forces with Gwen Stacy.",
  "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
  "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a long lost relic, but their charming adventure goes dangerously awry when they run afoul of the wrong people.",
  "On the brink of losing her childhood home, a desperate woman agrees to date a wealthy couple's introverted and awkward 19-year-old son. However, he proves to be more of a challenge than she expected, and time is running out before she loses it all.",
];
const rating = [
  "8.5",
  "7.8",
  "5.6",
  "7",
  "6.5",
  "6.1",
  "4.4",
  "6.1",
  "7.7",
  "8.7",
  "5.8",
  "7.3",
  "6.4",
];
const ratingStar = [
  "✰✰✰✰✰✰✰✰✰✰",
  "⭐✰✰✰✰✰✰✰✰✰",
  "⭐⭐✰✰✰✰✰✰✰✰",
  "⭐⭐⭐✰✰✰✰✰✰✰",
  "⭐⭐⭐⭐✰✰✰✰✰✰",
  "⭐⭐⭐⭐⭐✰✰✰✰✰",
  "⭐⭐⭐⭐⭐⭐✰✰✰✰",
  "⭐⭐⭐⭐⭐⭐⭐✰✰✰",
  "⭐⭐⭐⭐⭐⭐⭐⭐✰✰",
  "⭐⭐⭐⭐⭐⭐⭐⭐⭐✰",
  "⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐",
];
for (let i = 50; i > 0; i--) {
  animationPic1.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic2.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic3.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic4.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic5.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic6.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic7.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic8.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic9.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic10.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic11.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic12.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic13.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic14.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic15.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic16.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic17.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic18.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic19.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic20.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic21.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic22.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic23.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic24.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic25.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;
  animationPic26.innerHTML = `<img class="anPic" src="movie-image/movie${Math.floor(
    Math.random() * 49 + 1
  )}.jpg">`;

  const newElement = document.createElement("div");
  box.insertBefore(newElement, image1);
  newElement.classList.add("movieCon");
  newElement.innerHTML = `<div class="image${i}"></div>`;
  const image = document.querySelector(`.image${i}`);
  image.innerHTML = `<a href="#id${i}">${i}</a>`;
  image.style.backgroundImage = `url(movie-image/movie${i}.jpg)`;
  image.style.width = "100px";
  image.style.height = "90%";
  image.style.borderRadius = "2rem";
  image.style.backgroundSize = "100%";
  newElement.style.backgroundColor = `${colorArry[i]}`;
  image.style.zIndex = `1`;
  newElement.style.zIndex = `1`;
  const bigScreenDiv = document.createElement("div");
  image.onclick = () => {
    bigScreen1.insertBefore(bigScreenDiv, tralleryoutube);
    bigScreenDiv.classList.add("traller-youtube");
    bigScreenDiv.setAttribute("id", `id${i}`);
    bigScreenDiv.style.backgroundColor = `${bgcolorArry[50 - i]}`;
    audio.play();
    const x = image.textContent;
    y.push(x);
    if (y.length === 3) {
      y.shift();
    }
    let z = y[0];
    let parEle = document.querySelector(`.image${z}`).parentElement;
    parEle.style.backgroundColor = `${colorArry[z]}`;
    parEle.style.width = "15rem";
    parEle.style.height = "17rem";
    newElement.style.backgroundColor = `#2B2730`;
    newElement.style.width = "12rem";
    newElement.style.height = "15rem";
    bigScreenDiv.innerHTML = `<div class="rating">
<iframe
  width="500"
  height="300"
  src=${trallerArry[50 - x]}
  title="Oppenheimer | New Trailer"
  frameborder="0"
  allow="accelerometer;encrypted-media;"
  allowfullscreen
></iframe>
<h1 class=rating${x}">IMDb Rating:- ${rating[50 - x]}/10</h1>
<div class="star sid${x}">
  <h1 class="rateStar">${ratingStar[Math.round(rating[50 - x])]}</h1>
 
</div>
</div>
<div class="movieHeading">
<h1 class="nameMovie">${nameMovie[50 - x]}</h1>
<h2>Director:- ${directorName[50 - x]}</h2>
<h2>
  Producers:- ${producerName[50 - x]}
</h2>
<h2>Distributed by:- ${distributor[50 - x]}</h2>
<h2>
  Release dates:- ${date[50 - x]}
</h2>
<p>
  <span>Starring:- </span> ${starName[50 - x]}
</p>
<p>
Plot :-
${movieDetails[50 - x]}
</p>
</div>
</div>`;
  };
}

scoll1.onclick = () => {
  box.scrollLeft += 131;
};
scoll2.onclick = () => {
  box.scrollLeft += -131;
};
// image1.addEventListener("click", () => {
//   alert("ok");
//   container.classList.add("selectMovie");
// });
