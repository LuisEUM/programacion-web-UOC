/**
 * Configuración global de la aplicación.
 * Centraliza las constantes y parámetros de configuración.
 * @namespace
 */
const Config = {
  /**
   * URL base de la API de Marvel.
   * @type {string}
   * @constant
   */
  MARVEL_API_BASE_URL: "https://gateway.marvel.com/v1/public",

  /**
   * Clave pública para autenticación con la API de Marvel.
   * @type {string}
   * @constant
   */
  MARVEL_PUBLIC_KEY: "62c23e58785b432461842c6800f13478",

  /**
   * Clave privada para autenticación con la API de Marvel.
   * @type {string}
   * @constant
   * @private
   */
  MARVEL_PRIVATE_KEY: "4393a98a10f9c5a4f60b45a8eb2faf4453e8bc42",

  /**
   * Flag que determina si se usan datos mock o la API real.
   * @type {boolean}
   */
  USE_MOCK_DATA: true,

  /**
   * Límite de elementos por página para paginación.
   * @type {number}
   * @constant
   */
  LIMIT: 10,

  /**
   * Colecciones predeterminadas para organizar cómics.
   * @type {Array<string>}
   * @constant
   */
  DEFAULT_COLLECTIONS: ["general", "reading", "wishlist"],

  /**
   * Inicializa la configuración de la fuente de datos.
   * Lee la preferencia almacenada en localStorage.
   */
  init() {
    const storedPreference = localStorage.getItem("dataSourcePreference");
    this.USE_MOCK_DATA = storedPreference ? storedPreference === "mock" : true;
  },

  /**
   * Cambia la fuente de datos entre mock y API.
   * Persiste la preferencia en localStorage.
   * @returns {boolean} Nuevo estado de USE_MOCK_DATA
   */
  toggleDataSource() {
    this.USE_MOCK_DATA = !this.USE_MOCK_DATA;
    localStorage.setItem(
      "dataSourcePreference",
      this.USE_MOCK_DATA ? "mock" : "api"
    );
    return this.USE_MOCK_DATA;
  },

  /**
   * Datos mock para desarrollo y pruebas.
   * @type {Object}
   * @property {Array<Object>} comics - Lista de cómics mock
   * @property {Array<Object>} heroes - Lista de héroes mock
   * @property {Object} location - Datos de ubicación
   * @property {Object} testUser - Usuario de prueba
   * @property {Object} loginTestUser - Usuario de prueba para login
   */
  MOCK_DATA: {
    comics: [
      {
        id: 15808,
        title: "Ultimate Spider-Man (2000) #110 (Mark Bagley Variant)",
        issueNumber: 110,
        description: "#N/A",
        pageCount: 1,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/4bc4947ea8f4d",
          extension: "jpg",
        },
        price: 2.99,
        creators: [
          "Mark Bagley",
          "Richard Isanove",
          "Brian Michael Bendis",
          "Wade Von Grawbadger",
          "Andrew Hennessy",
          "Stuart Immonen",
          "Vc Cory Petit",
          "Justin Ponsor",
          "Jeff Youngquist",
        ],
        characters: ["Spider-Man (Ultimate)"],
      },
      {
        id: 1994,
        title: "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)",
        issueNumber: 13,
        description: "No description available",
        pageCount: 1,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Ronald Byrd",
          "Jeff Christiansen",
          "Anthony Flamini",
          "Richard Green",
          "Michael Hoskin",
          "Sean Mcquaid",
          "Eric J. Moreels",
          "Mark OEnglish",
          "Stuart Vandal",
          "Tom Grummett",
        ],
        characters: [
          "Apocalypse",
          "Blink",
          "Colossus",
          "Gambit",
          "Holocaust (Age of Apocalypse)",
          "Magneto",
          "Mister Sinister",
          "Rogue",
          "Sabretooth (Age of Apocalypse)",
          "Shadowcat (Age of Apocalypse)",
          "Silver Samurai (Age of Apocalypse)",
          "Storm (Age of Apocalypse)",
          "Sunfire",
          "Wolverine",
        ],
      },
      {
        id: 1158,
        title: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)",
        issueNumber: 0,
        description: "No description available",
        pageCount: 112,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007",
          extension: "jpg",
        },
        price: 9.99,
        creators: ["Chris Bachalo", "Mark Millar"],
        characters: [
          "Beast (Ultimate)",
          "Black Widow (Ultimate)",
          "Captain America (Ultimate)",
          "Colossus (Ultimate)",
          "Hawkeye (Ultimate)",
          "Hulk (Ultimate)",
          "Iceman (Ultimate)",
          "Jean Grey (Ultimate)",
          "Magneto (Ultimate)",
          "Nick Fury (Ultimate)",
          "Quicksilver (Ultimate)",
          "Rogue (Ultimate)",
          "Scarlet Witch (Ultimate)",
          "Storm (Ultimate)",
          "Thor (Ultimate)",
          "Vanisher (Ultimate)",
          "Wasp (Ultimate)",
        ],
      },
      {
        id: 1749,
        title:
          "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)",
        issueNumber: 11,
        description: "No description available",
        pageCount: 1,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4",
          extension: "jpg",
        },
        price: 3.99,
        creators: ["Mark Brooks", "Mike Raicht"],
        characters: [
          "Apocalypse",
          "Blink",
          "Colossus",
          "Gambit",
          "Holocaust (Age of Apocalypse)",
          "Magneto",
          "Mister Sinister",
          "Rogue",
          "Sabretooth (Age of Apocalypse)",
          "Shadowcat (Age of Apocalypse)",
          "Silver Samurai (Age of Apocalypse)",
          "Storm (Age of Apocalypse)",
          "Sunfire",
          "Wolverine",
        ],
      },
      {
        id: 1332,
        title: "X-Men: Days of Future Past (Trade Paperback)",
        issueNumber: 0,
        description: "No description available",
        pageCount: 144,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/58b5cfb6d5239",
          extension: "jpg",
        },
        price: 9.99,
        creators: [],
        characters: [
          "Archangel",
          "Avalanche",
          "Blob",
          "Colossus",
          "Destiny",
          "Nightcrawler",
          "Pyro",
          "Storm",
          "Wolverine",
          "X-Men",
        ],
      },
      {
        id: 6181,
        title:
          "Ultimate Spider-Man Ultimate Collection Book 1 (Trade Paperback)",
        issueNumber: 0,
        description: "No description available",
        pageCount: 1,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/c0/59079911f0fdb",
          extension: "jpg",
        },
        price: 9.99,
        creators: [
          "Mark Bagley",
          "Brian Michael Bendis",
          "Bill Jemas",
          "Steve Buccellato",
          "Richard Starkings",
          "Art Thibert",
        ],
        characters: [
          "Crusher Hogan (Ultimate)",
          "Electro (Ultimate)",
          "George Stacy (Ultimate)",
          "Harry Osborn (Ultimate)",
          "Mary Jane Watson (Ultimate)",
          "Spider-Man (Ultimate)",
          "Venom (Ultimate)",
        ],
      },
      {
        id: 1308,
        title: "Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)",
        issueNumber: 0,
        description: "No description available",
        pageCount: 96,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bc665483c3aa",
          extension: "jpg",
        },
        price: 5.99,
        creators: [
          "Udon Comics Company",
          "Pat Davidson",
          "Derek Fridolfs",
          "Rich Perrotta",
          "Todd Dezago",
          "Daniel Quantz",
          "Vc Randy Gentile",
          "Jonboy Meyers",
          "Michael O'hare",
        ],
        characters: ["Spider-Man (Peter Parker)"],
      },
      {
        id: 26620,
        title: "The Stand: American Nightmares HC (Hardcover)",
        issueNumber: 0,
        description: "No description available",
        pageCount: 136,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3523c46f",
          extension: "jpg",
        },
        price: 24.99,
        creators: [
          "Roberto Aguirre-Sacasa",
          "Lee Bermejo",
          "Virtual Calligr",
          "John Rhett Thomas",
          "Laura Martin",
          "Mike Perkins",
          "Rus Wooton",
        ],
        characters: [],
      },
      {
        id: 115293,
        title: "Exceptional X-Men (2024) #6",
        issueNumber: 6,
        description:
          "WHO IS SHELDON XENOS?  AXO, the Exceptional X-Men's resident empath, goes to work for the creator of the wildly popular Verate app. Maybe Xenos and his inventions can bring mutants the support, recognition and connection they deserve. But the charismatic technology mogul seems to be hiding a secret...or two...or four...or...",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Tom Brevoort",
          "Carmen Carnero",
          "Eve Ewing",
          "Vc Travis Lanham",
          "Nolan Woodard",
        ],
        characters: [],
      },
      {
        id: 119420,
        title: "Incredible Hulk (2023) #22",
        issueNumber: 22,
        description:
          "BANNER NO MORE?! Bruce Banner is now fully locked away within the body and mind of the INCREDIBLE HULK…no more than a memory of Hulk's former self. But as Charlie, increasingly violently, loses control to her skinwalker alter ego LYCANA, she finds a way to seek Banner's help within the Hulkscape. Can Banner help Charlie keep her newfound power without sacrificing her humanity? Meanwhile, Gamma-mutated people around the world are disappearing! Is ELDEST to blame? And what does this mean for the Incredible Hulk?",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Phillip Kennedy Johnson",
          "Nic Klein",
          "Vc Cory Petit",
          "Jordan White",
          "Matthew Wilson",
        ],
        characters: [],
      },
      {
        id: 124338,
        title: "Infinity Watch (2024) #2",
        issueNumber: 2,
        description:
          "The Infinity Watch is made up of the most powerful beings in the universe, which should at least make THEM feel comfortable. But after the mysterious antagonist who showed up last issue ran the table on them devastatingly, everything in existence is in deep trouble! Has this antagonist mastered Phil Coulson, a.k.a. DEATH HIMSELF?!",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/d0/6719352ec65c5",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Enid Balam",
          "Ruairi Coleman",
          "Guru Efx",
          "Derek Landy",
          "Salvador Larroca",
          "Nick Lowe",
          "Vc Cory Petit",
        ],
        characters: [],
      },
      {
        id: 115431,
        title: "X-Force (2024) #8",
        issueNumber: 8,
        description:
          "COLOSSAL REPERCUSSIONS! Can X-FORCE survive a fight with…COLOSSUS?!  The mysterious LA DIABLA has X-FORCE on the ropes, and she's brought some unexpected allies!  PLUS - what does FORGE's ANALOG device have to do with the FRACTURES threatening the planet…and La Diabla's designs?! The season's most surprising X-book packs a few more turns…",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Erick Arciniega",
          "Mark Basso",
          "Rain Beredo",
          "Vc Joe Caramagna",
          "Stephen Segovia",
          "Geoffrey Thorne",
          "Marcus to",
        ],
        characters: [],
      },
      {
        id: 122928,
        title: "Alien: Paradiso (2024) #3",
        issueNumber: 3,
        description:
          "TSULA KANE FACES HER FATHER'S FATE: DEATH BY XENO! Decades ago, Weyland-Yutani swept Thomas Kane's violent death on the Nostromo under the rug, hiding the truth even from the wife and child who survived him. Now a hardened mercenary, his daughter Tsula has carried that bitter mystery all this time. With the truth tearing bloody swaths through her latest assignment, Tsula might just wish she'd never found the answers after all.",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Sarah Brunstad",
          "Iban Coello",
          "Vc Clayton Cowles",
          "Steve Foxe",
          "Carlos Lopez",
          "Jason Muhr",
          "Victor Nava",
          "Peter Nguyen",
          "Yen Nitro",
          "Edgar Salazar",
        ],
        characters: [],
      },
      {
        id: 120414,
        title: "Tva (2024) #3",
        issueNumber: 3,
        description:
          "A KILLER OUTSIDE TIME?! A murderer stalks the halls of the TVA! Is anyone safe? Or perhaps more importantly, can anyone be trusted? The answers could lie in the secret floors below the R&D department. But with the TVA denying their existence, the field team has to question: Are they simply rumor? Hallucination? Or is the TVA hiding something far darker than any of them could possibly imagine?",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Enid Balam",
          "Katharyn Blair",
          "Ryan North",
          "Guru Efx",
          "Pere Perez",
          "Rachelle Rosenberg",
          "Vc Joe Sabino",
          "Jordan White",
        ],
        characters: [],
      },
      {
        id: 121364,
        title: "Sabretooth: The Dead Don't Talk (2024) #3",
        issueNumber: 3,
        description:
          "SABRETOOTH MEETS HIS MATCH! The underworld of 1900s NYC is heating up - and we mean literally! From the mean streets of K'UN-LUN to the even meaner streets of the Five Points comes…DRAGONFIRE! Looks like deep-fried SABRETOOTH may be on the menu, True Believers…",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Rafael De Latorre",
          "Marcelo Maiolo",
          "Michael Sta. Maria",
          "Mark Paniccia",
          "Vc Joe Sabino",
          "Dono Sanchez-Almara",
          "Frank Tieri",
        ],
        characters: [],
      },
      {
        id: 119395,
        title: "Fantastic Four (2022) #29",
        issueNumber: 29,
        description:
          'The impossible has happened! DOCTOR DOOM has taken over the world! And the Fantastic Four are NOT going to let that stand. As Reed locks himself in his lab, trying to solve the Problem of Doom, Ben treats Sue to a trip to NYC with their mutual friend, JEN "SHE-HULK" WALTERS, to help get her mind off of things. But tensions after vampires overran the world in their Blood Hunt remain, and when Ben, Sue and Jen find themselves on the wrong side of mob justice, they face a choice...and it\'s one they will not be able to take back!',
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Jesus Aburtov",
          "Tom Brevoort",
          "Vc Joe Caramagna",
          "Joshua Cassara",
          "Ryan North",
          "Cory Smith",
          "OREN JUNIOR",
        ],
        characters: [],
      },
      {
        id: 115451,
        title: "X-Men (2024) #12",
        issueNumber: 12,
        description:
          "As a horde of the galaxy's most fearsome killers descend upon the X-Men, help comes from an unexpected direction: across the border! ALPHA FLIGHT fly into action again - though at what price? And can even Canada's hardiest heroes turn the tide?",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 4.99,
        creators: [
          "Tom Brevoort",
          "Vc Clayton Cowles",
          "Netho Diaz",
          "Marte Gracia",
          "Jed Mackay",
          "Ryan Stegman",
        ],
        characters: [],
      },
      {
        id: 115517,
        title: "Blade: Red Band (2024) #5",
        issueNumber: 5,
        description:
          "Facing a new foe as the world changes overnight, BLADE and his new partner ELENA have no choice but to face former monster hunter PONTIUS VAN HELSING and his vampiric cult head-on! Armed with arcane knowledge and vampiric magic and emboldened by the continued upheaval across the Marvel Universe, Pontius is ready and waiting for a fight - and eager to add the fangs of the Daywalker as another trophy to his collection!",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 4.99,
        creators: [
          "Romulo Fajardo Jr.",
          "Bryan Edward Hill",
          "Edward Devin Lewis",
          "Vc Cory Petit",
          "Javier Tartaglia",
          "C.F. Villa",
          "David Yardin",
        ],
        characters: [],
      },
      {
        id: 123914,
        title: "Rogue: The Savage Land (2025) #2",
        issueNumber: 2,
        description:
          "CUT OFF FROM THE X-MEN?! Rogue races to rescue Ka-Zar and discover what is happening to the Savage Land. But can she outrun her past, or is this ancient world her perdition? The Savage Land has a new god, but is she merciful?",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Kaare Andrews",
          "Zulema Scotto Lavina",
          "Vc Ariana Maher",
          "Rachelle Rosenberg",
          "Tim Seeley",
          "Darren Shan",
        ],
        characters: [],
      },
      {
        id: 84155,
        title: "Gwen Stacy (2020) #3",
        issueNumber: 3,
        description:
          "Captain George Stacy (A.K.A. Gwen's dad) has been implicated in a murder and it's up to Gwen to clear his name. With Green Goblin and the Crime Master involved, it's not going to be easy! Luckily, Gwen isn't doing it alone. She's got her friend Harry Osborn, and her boyfriend (?!) Darius Scanlon, helping her. Oh, and Harry's dad, Norman Osborn, is helping them out too! Forgot about that good news!",
        pageCount: 32,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/a/10/5e9e076819aec",
          extension: "jpg",
        },
        price: 3.99,
        creators: [
          "Vc Joe Caramagna",
          "Christos Gage",
          "Nick Lowe",
          "Todd Nauck",
          "Rachelle Rosenberg",
        ],
        characters: [],
      },
    ],
    heroes: [
      {
        id: 1009610,
        name: "Spider-Man (Peter Parker)",
        description: "Your friendly neighborhood Spider-Man",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009610",
        comics: ["The Amazing Spider-Man #1", "Spider-Man #2"],
      },
      {
        id: 1009220,
        name: "Captain America",
        description: "The First Avenger",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009220",
        comics: ["Captain America #1", "Avengers #4"],
      },
      {
        id: 1009664,
        name: "Thor",
        description: "God of Thunder",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009664",
        comics: ["Thor #1", "Journey Into Mystery #83"],
      },
      {
        id: 1009351,
        name: "Hulk",
        description: "The Strongest Avenger",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009351",
        comics: ["The Incredible Hulk #1", "Avengers #1"],
      },
      {
        id: 1009189,
        name: "Black Widow",
        description: "Master Spy",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009189",
        comics: ["Black Widow #1", "Avengers #3"],
      },
      {
        id: 1009282,
        name: "Doctor Strange",
        description: "Master of the Mystic Arts",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009282",
        comics: ["Doctor Strange #1", "Strange Tales #110"],
      },
      {
        id: 1009718,
        name: "Wolverine",
        description: "The Best There Is",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009718",
        comics: ["Wolverine #1", "X-Men #94"],
      },
      {
        id: 1009268,
        name: "Deadpool",
        description: "The Merc with a Mouth",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009268",
        comics: ["Deadpool #1", "Cable & Deadpool #1"],
      },
      {
        id: 1009562,
        name: "Scarlet Witch",
        description: "Reality Manipulator",
        modified: "2023-01-01",
        thumbnail: {
          path: "https://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009562",
        comics: ["Avengers #16", "House of M"],
      },
      {
        id: 1009368,
        name: "Iron Man",
        description: "Genius, Billionaire, Playboy, Philanthropist",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009368",
        comics: ["Iron Man #1", "Avengers #1"],
      },
      {
        id: 1009187,
        name: "Black Panther",
        description: "King of Wakanda",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009187",
        comics: ["Black Panther #1", "Avengers #52"],
      },
      {
        id: 1010338,
        name: "Captain Marvel (Carol Danvers)",
        description: "Cosmic Heroine",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010338",
        comics: ["Ms. Marvel #1", "Captain Marvel #1"],
      },
      {
        id: 1010801,
        name: "Ant-Man (Scott Lang)",
        description: "Tiny hero, big heart",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010801",
        comics: ["Ant-Man #1", "Avengers #223"],
      },
      {
        id: 1009697,
        name: "Vision",
        description: "Synthezoid Avenger",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009697",
        comics: ["Avengers #57", "Vision and the Scarlet Witch #1"],
      },
      {
        id: 1009338,
        name: "Hawkeye",
        description: "Master archer",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009338",
        comics: ["Hawkeye #1", "Avengers #16"],
      },
      {
        id: 1009184,
        name: "Black Bolt",
        description: "Silent king of the Inhumans",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/1/20/52696929dc721",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009184",
        comics: ["Inhumans #1", "Fantastic Four #45"],
      },
      {
        id: 1010733,
        name: "Star-Lord (Peter Quill)",
        description: "Leader of the Guardians of the Galaxy",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/537bc55e8b1f5",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010733",
        comics: ["Guardians of the Galaxy #1", "Annihilation: Conquest #6"],
      },
      {
        id: 1010763,
        name: "Gamora",
        description: "Deadliest woman in the galaxy",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/526032a2cce62",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010763",
        comics: [
          "Guardians of the Galaxy #1",
          "Warlock and the Infinity Watch #1",
        ],
      },
      {
        id: 1010735,
        name: "Drax",
        description: "Destroyer and warrior",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/e/d0/526032deabbff",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010735",
        comics: ["Guardians of the Galaxy #1", "Infinity Gauntlet #2"],
      },
      {
        id: 1010744,
        name: "Rocket Raccoon",
        description: "Tactical genius and weapons expert",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/50fec1e49298a",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010744",
        comics: ["Guardians of the Galaxy #1", "Rocket Raccoon #1"],
      },
      {
        id: 1010743,
        name: "Groot",
        description: "Tree-like alien and loyal companion",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/10/526033c8b474a",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010743",
        comics: ["Guardians of the Galaxy #1", "Annihilation: Conquest #4"],
      },
      {
        id: 1009281,
        name: "Doctor Doom",
        description: "Ruler of Latveria and brilliant scientist",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/60/53176bb096d17",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009281",
        comics: ["Fantastic Four #5", "Secret Wars #1"],
      },
      {
        id: 1009407,
        name: "Loki",
        description: "God of Mischief",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009407",
        comics: ["Journey Into Mystery #85", "Loki: Agent of Asgard #1"],
      },
      {
        id: 1010740,
        name: "Winter Soldier",
        description: "Former assassin turned hero",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010740",
        comics: ["Captain America #1", "Winter Soldier #1"],
      },
      {
        id: 1009297,
        name: "Falcon",
        description: "Hero with wings",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5111505fb7009",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009297",
        comics: [
          "Captain America #117",
          "The Falcon and the Winter Soldier #1",
        ],
      },
      {
        id: 1010991,
        name: "War Machine (Parnell Jacobs)",
        description: "Iron Man's armored ally",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/535febf826de5",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1010991",
        comics: ["Iron Man #118", "War Machine #1"],
      },
      {
        id: 1009608,
        name: "Spider-Woman (Jessica Drew)",
        description: "Heroine with spider-like abilities",
        modified: "2023-01-01",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/b/50/5265479097743",
          extension: "jpg",
        },
        resourceURI: "https://api.marvel.com/heroes/1009608",
        comics: ["Spider-Woman #1", "New Avengers #1"],
      },
    ],
    location: {
      spain: {
        comunidades: [
          {
            nombreComunidad: "Andalucía",
            codigoPostalPrincipal: "41001",
            provincias: [
              { nombreProvincia: "Almería", minCP: 4001, maxCP: 4999 },
              { nombreProvincia: "Cádiz", minCP: 11001, maxCP: 11999 },
              { nombreProvincia: "Córdoba", minCP: 14001, maxCP: 14999 },
              { nombreProvincia: "Granada", minCP: 18001, maxCP: 18999 },
              { nombreProvincia: "Huelva", minCP: 21001, maxCP: 21999 },
              { nombreProvincia: "Jaén", minCP: 23001, maxCP: 23999 },
              { nombreProvincia: "Málaga", minCP: 29001, maxCP: 29999 },
              { nombreProvincia: "Sevilla", minCP: 41001, maxCP: 41999 },
            ],
          },
          {
            nombreComunidad: "Aragón",
            codigoPostalPrincipal: "50001",
            provincias: [
              { nombreProvincia: "Huesca", minCP: 22001, maxCP: 22999 },
              { nombreProvincia: "Teruel", minCP: 44001, maxCP: 44999 },
              { nombreProvincia: "Zaragoza", minCP: 50001, maxCP: 50999 },
            ],
          },
          {
            nombreComunidad: "Principado de Asturias",
            codigoPostalPrincipal: "33001",
            provincias: [
              { nombreProvincia: "Asturias", minCP: 33001, maxCP: 33999 },
            ],
          },
          {
            nombreComunidad: "Islas Baleares",
            codigoPostalPrincipal: "07001",
            provincias: [
              { nombreProvincia: "Islas Baleares", minCP: 7001, maxCP: 7999 },
            ],
          },
          {
            nombreComunidad: "Canarias",
            codigoPostalPrincipal: "35001",
            provincias: [
              { nombreProvincia: "Las Palmas", minCP: 35001, maxCP: 35999 },
              {
                nombreProvincia: "Santa Cruz de Tenerife",
                minCP: 38001,
                maxCP: 38999,
              },
            ],
          },
          {
            nombreComunidad: "Cantabria",
            codigoPostalPrincipal: "39001",
            provincias: [
              { nombreProvincia: "Cantabria", minCP: 39001, maxCP: 39999 },
            ],
          },
          {
            nombreComunidad: "Castilla-La Mancha",
            codigoPostalPrincipal: "45001",
            provincias: [
              { nombreProvincia: "Albacete", minCP: 2001, maxCP: 2999 },
              { nombreProvincia: "Ciudad Real", minCP: 13001, maxCP: 13999 },
              { nombreProvincia: "Cuenca", minCP: 16001, maxCP: 16999 },
              { nombreProvincia: "Guadalajara", minCP: 19001, maxCP: 19999 },
              { nombreProvincia: "Toledo", minCP: 45001, maxCP: 45999 },
            ],
          },
          {
            nombreComunidad: "Castilla y León",
            codigoPostalPrincipal: "47001",
            provincias: [
              { nombreProvincia: "Ávila", minCP: 5001, maxCP: 5999 },
              { nombreProvincia: "Burgos", minCP: 9001, maxCP: 9999 },
              { nombreProvincia: "León", minCP: 24001, maxCP: 24999 },
              { nombreProvincia: "Palencia", minCP: 34001, maxCP: 34999 },
              { nombreProvincia: "Salamanca", minCP: 37001, maxCP: 37999 },
              { nombreProvincia: "Segovia", minCP: 40001, maxCP: 40999 },
              { nombreProvincia: "Soria", minCP: 42001, maxCP: 42999 },
              { nombreProvincia: "Valladolid", minCP: 47001, maxCP: 47999 },
              { nombreProvincia: "Zamora", minCP: 49001, maxCP: 49999 },
            ],
          },
          {
            nombreComunidad: "Cataluña",
            codigoPostalPrincipal: "08001",
            provincias: [
              { nombreProvincia: "Barcelona", minCP: 8001, maxCP: 8999 },
              { nombreProvincia: "Girona", minCP: 17001, maxCP: 17999 },
              { nombreProvincia: "Lleida", minCP: 25001, maxCP: 25999 },
              { nombreProvincia: "Tarragona", minCP: 43001, maxCP: 43999 },
            ],
          },
          {
            nombreComunidad: "Ceuta",
            codigoPostalPrincipal: "51001",
            provincias: [
              { nombreProvincia: "Ceuta", minCP: 51001, maxCP: 51999 },
            ],
          },
          {
            nombreComunidad: "Comunidad Valenciana",
            codigoPostalPrincipal: "46001",
            provincias: [
              { nombreProvincia: "Alicante", minCP: 3001, maxCP: 3999 },
              { nombreProvincia: "Castellón", minCP: 12001, maxCP: 12999 },
              { nombreProvincia: "Valencia", minCP: 46001, maxCP: 46999 },
            ],
          },
          {
            nombreComunidad: "Extremadura",
            codigoPostalPrincipal: "06001",
            provincias: [
              { nombreProvincia: "Badajoz", minCP: 6001, maxCP: 6999 },
              { nombreProvincia: "Cáceres", minCP: 10001, maxCP: 10999 },
            ],
          },
          {
            nombreComunidad: "Galicia",
            codigoPostalPrincipal: "15001",
            provincias: [
              { nombreProvincia: "A Coruña", minCP: 15001, maxCP: 15999 },
              { nombreProvincia: "Lugo", minCP: 27001, maxCP: 27999 },
              { nombreProvincia: "Ourense", minCP: 32001, maxCP: 32999 },
              { nombreProvincia: "Pontevedra", minCP: 36001, maxCP: 36999 },
            ],
          },
          {
            nombreComunidad: "Comunidad de Madrid",
            codigoPostalPrincipal: "28001",
            provincias: [
              { nombreProvincia: "Madrid", minCP: 28001, maxCP: 28999 },
            ],
          },
          {
            nombreComunidad: "Melilla",
            codigoPostalPrincipal: "52001",
            provincias: [
              { nombreProvincia: "Melilla", minCP: 52001, maxCP: 52999 },
            ],
          },
          {
            nombreComunidad: "Región de Murcia",
            codigoPostalPrincipal: "30001",
            provincias: [
              { nombreProvincia: "Murcia", minCP: 30001, maxCP: 30999 },
            ],
          },
          {
            nombreComunidad: "Comunidad Foral de Navarra",
            codigoPostalPrincipal: "31001",
            provincias: [
              { nombreProvincia: "Navarra", minCP: 31001, maxCP: 31999 },
            ],
          },
          {
            nombreComunidad: "País Vasco",
            codigoPostalPrincipal: "48001",
            provincias: [
              { nombreProvincia: "Álava", minCP: 1001, maxCP: 1999 },
              { nombreProvincia: "Guipúzcoa", minCP: 20001, maxCP: 20999 },
              { nombreProvincia: "Vizcaya", minCP: 48001, maxCP: 48999 },
            ],
          },
          {
            nombreComunidad: "La Rioja",
            codigoPostalPrincipal: "26001",
            provincias: [
              { nombreProvincia: "La Rioja", minCP: 26001, maxCP: 26999 },
            ],
          },
        ],
      },
    },
    testUser: {
      nombre: "Luis Eduardo",
      apellidos: "Urdaneta Martucci",
      pais: "España",
      comunidadAutonoma: "Comunidad Valenciana",
      codigoPostal: "46001",
      direccion: "Valencia, plaza 01 piso 01 Puerta 01",
      email: "luis@uoc.edu",
      usuario: "Luis_Test",
      password: "Luis123#",
    },
    loginTestUser: {
      nombre: "Usuario",
      apellidos: "Test",
      direccion: "Barcelona, Calle Test 123",
      poblacion: "Barcelona",
      codigoPostal: "08001",
      email: "test@uoc.edu",
      usuario: "test",
      password: "Test123#",
      pais: "España",
      comunidadAutonoma: "Cataluña",
    },
  },
};
