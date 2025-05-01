// data.js
import offenseImg from './images/offense.png';
import defenseImg from './images/defense.png';
import utilityImg from './images/utility.png';
import healingImg from './images/healing.png';
export const products = [
  {
    id: 1,
    name: "Potion of Advantage",
    price: 125,
    description: "Grants the drinker advantage on a roll for a short period.",
    image: utilityImg,
    category: "utility",
    rating: 4.2,
    ratingCount: 342
  },
  {
    id: 2,
    name: "Potion Of Animal Friendship",
    price: 200,
    description: "Allows the drinker to charm a beast for an hour.",
    image: utilityImg,
    category: "utility",
    rating: 4.1,
    ratingCount: 287
  },
  {
    id: 3,
    name: "Potion of Aqueous Form",
    price: 1000,
    description: "Transforms the drinker into a watery form, allowing them to pass through small openings.",
    image: utilityImg,
    category: "utility",
    rating: 3.9,
    ratingCount: 156
  },
  {
    id: 4,
    name: "Potion Of Clairvoyance",
    price: 960,
    description: "Grants the ability to see and hear a distant location for a short time.",
    image: utilityImg,
    category: "utility",
    rating: 4.0,
    ratingCount: 198
  },
  {
    id: 5,
    name: "Potion Of Climbing",
    price: 180,
    description: "Grants the ability to climb difficult surfaces with ease for an hour.",
    image: utilityImg,
    category: "utility",
    rating: 4.3,
    ratingCount: 412
  },
  {
    id: 6,
    name: "Potion Of Comprehension",
    price: 25,
    description: "Enables the drinker to comprehend languages for a short period.",
    image: utilityImg,
    category: "utility",
    rating: 4.5,
    ratingCount: 487
  },
  {
    id: 7,
    name: "Potion Of Diminution",
    price: 270,
    description: "Shrinks the drinker to a smaller size for a duration.",
    image: utilityImg,
    category: "utility",
    rating: 3.8,
    ratingCount: 231
  },
  {
    id: 8,
    name: "Potion of Dragon's Majesty",
    price: 15000,
    description: "Grants the drinker temporary control over dragonkind.",
    image: offenseImg,
    category: "offense",
    rating: 4.7,
    ratingCount: 42
  },
  {
    id: 9,
    name: "Potion Of Fire Breath",
    price: 150,
    description: "Grants the ability to breathe fire for a short period.",
    image: offenseImg,
    category: "offense",
    rating: 4.4,
    ratingCount: 376
  },
  {
    id: 10,
    name: "Potion Of Flying",
    price: 500,
    description: "Grants the drinker the ability to fly for an hour.",
    image: utilityImg,
    category: "utility",
    rating: 4.6,
    ratingCount: 298
  },
  {
    id: 11,
    name: "Potion Of Gaseous Form",
    price: 300,
    description: "Transform the drinker into a misty cloud, allowing them to slip through small cracks.",
    image: utilityImg,
    category: "utility",
    rating: 4.0,
    ratingCount: 254
  },
  {
    id: 12,
    name: "Potion Of Giant Size",
    price: 11000,
    description: "Enlarges the drinker to a giant size for a period of time.",
    image: offenseImg,
    category: "offense",
    rating: 4.3,
    ratingCount: 78
  },
  {
    id: 13,
    name: "Potion Of Giant Strength (Cloud)",
    price: 1800,
    description: "Grants immense strength, making the drinker powerful enough to break clouds.",
    image: offenseImg,
    category: "offense",
    rating: 4.5,
    ratingCount: 124
  },
  {
    id: 14,
    name: "Potion Of Giant Strength (Fire)",
    price: 1200,
    description: "Grants immense strength, with fire resistance included.",
    image: offenseImg,
    category: "offense",
    rating: 4.4,
    ratingCount: 187
  },
  {
    id: 15,
    name: "Potion Of Giant Strength (Frost/Stone)",
    price: 650,
    description: "Grants immense strength, with frost/stone resistance included.",
    image: offenseImg,
    category: "offense",
    rating: 4.2,
    ratingCount: 256
  },
  {
    id: 16,
    name: "Potion Of Giant Strength (Hill)",
    price: 125,
    description: "Grants immense strength, with hill resistance included.",
    image: offenseImg,
    category: "offense",
    rating: 4.1,
    ratingCount: 398
  },
  {
    id: 17,
    name: "Potion Of Giant Strength (Storm)",
    price: 8000,
    description: "Grants immense strength, with storm resistance included.",
    image: offenseImg,
    category: "offense",
    rating: 4.6,
    ratingCount: 89
  },
  {
    id: 18,
    name: "Potion of Greater Invisibility",
    price: 1000,
    description: "Grants the drinker invisibility that is more powerful and longer lasting.",
    image: utilityImg,
    category: "utility",
    rating: 4.8,
    ratingCount: 56
  },
  {
    id: 19,
    name: "Potion Of Growth",
    price: 270,
    description: "Causes the drinker to grow in size temporarily.",
    image: offenseImg,
    category: "offense",
    rating: 4.0,
    ratingCount: 312
  },
  {
    id: 21,
    name: "Potion of Healing",
    price: 50,
    description: "Heals the drinker for a small amount of health.",
    image: healingImg,
    category: "defense",
    rating: 4.7,
    ratingCount: 498
  },
  {
    id: 22,
    name: "Potion of Healing (Greater)",
    price: 150,
    description: "Heals the drinker for a moderate amount of health.",
    image: healingImg,
    category: "defense",
    rating: 4.6,
    ratingCount: 423
  },
  {
    id: 23,
    name: "Potion of Healing (Superior)",
    price: 450,
    description: "Heals the drinker for a large amount of health.",
    image: healingImg,
    category: "defense",
    rating: 4.5,
    ratingCount: 387
  },
  {
    id: 24,
    name: "Potion of Healing (Supreme)",
    price: 1350,
    description: "Heals the drinker for an extremely large amount of health.",
    image: healingImg,
    category: "defense",
    rating: 4.8,
    ratingCount: 215
  },
  {
    id: 25,
    name: "Potion Of Heroism",
    price: 180,
    description: "Grants the drinker temporary heroism, granting advantage on attacks.",
    image: offenseImg,
    category: "offense",
    rating: 4.3,
    ratingCount: 356
  },
  {
    id: 26,
    name: "Potion Of Invisibility",
    price: 180,
    description: "Grants the drinker invisibility for a period of time.",
    image: utilityImg,
    category: "utility",
    rating: 4.4,
    ratingCount: 401
  },
  {
    id: 27,
    name: "Potion Of Invulnerability",
    price: 3840,
    description: "Grants the drinker temporary invulnerability.",
    image: defenseImg,
    category: "defense",
    rating: 4.9,
    ratingCount: 134
  },
  {
    id: 28,
    name: "Potion Of Longevity",
    price: 9000,
    description: "Grants the drinker increased lifespan.",
    image: utilityImg,
    category: "utility",
    rating: 4.7,
    ratingCount: 67
  },
  {
    id: 29,
    name: "Potion of Maximum Power",
    price: 2000,
    description: "Grants the drinker maximum magical power for a limited time.",
    image: offenseImg,
    category: "offense",
    rating: 4.5,
    ratingCount: 143
  },
  {
    id: 30,
    name: "Potion Of Mind Control (Beast)",
    price: 1600,
    description: "Allows the drinker to control a beast for a period of time.",
    image: utilityImg,
    category: "utility",
    rating: 3.9,
    ratingCount: 187
  },
  {
    id: 31,
    name: "Potion Of Mind Control (Humanoid)",
    price: 2500,
    description: "Allows the drinker to control a humanoid for a period of time.",
    image: utilityImg,
    category: "utility",
    rating: 3.7,
    ratingCount: 154
  },
  {
    id: 32,
    name: "Potion of Phantom Form",
    price: 400,
    description: "Grants the drinker the ability to become intangible for a short period.",
    image: utilityImg,
    category: "utility",
    rating: 4.1,
    ratingCount: 276
  },
];