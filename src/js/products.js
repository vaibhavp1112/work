/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "How to Analyze People with Psychology",
    description:
      "The Ultimate Guide to Speed Reading People through Body Language Analysis and Behavioral Psychology",
    price: 5.96,
    discontinued: false,
    imageUrl: "images/analyze_people.jpg",
    categories: ["c1"]
  },
  {
    id: "P2",
    title: "Dark Psychology Secrets - The Art of Reading People",
    description:
      "The Ultimate Guide to Learn How to Analyze People, Read Body Language and Understand Human Behavior through Speed Reading People Techniques",
    price: 21.75,
    discontinued: false,
    imageUrl: "images/dark.jpg",
    categories: ["c1"]
  },
  {
    id: "P3",
    title: "The Little Book of Psychology",
    description: "An Introduction to the Key Psychologists and Theories You Need to Know",
    price: 10.27,
    discontinued: false,
    imageUrl: "images/little.jpeg",
    categories: ["c1"]
  },
  {
    id: "P4",
    title: "Analysing Horoscope through Modern Techniques",
    description:
      "A book that provides readers with a step - by - step approach to deal with the intricacies of astrology and to comprehend astrology in an easier manner",
    price: 6.34,
    discontinued: false,
    imageUrl: "images/horoscop.jpg",
    categories: ["c2"]
  },
  {
    id: "P5",
    title: "The Twelve Houses: Exploring the Houses of the Horoscope",
    description:
      "In The Twelve Houses, acclaimed astrologer Howard Sasportas explores in detail the experiences and situations associated with each of the houses",
    price: 49.12,
    discontinued: false,
    imageUrl: "images/twelvehouses.jpg",
    categories: ["c2"]
  },
  {
    id: "P6",
    title: "Fundamentals of Vedic Astrology",
    description:
      "This book introduces the concepts and operations of Vedic Astrology. It presents the components of the astrologers art-the planets, signs, houses and lunar mansions",
    price: 16.29,
    discontinued: false,
    imageUrl: "images/vedic.jpg",
    categories: ["c2"]
  },
  {
    id: "P7",
    title: "The Abyss Beyond Dreams",
    description:
      "The year is 3326. Nigel Sheldon, one of the founders of the Commonwealth, receives a visit from the Raiel—self-appointed guardians of the Void",
    price: 10.19,
    discontinued: false,
    imageUrl: "images/beyond.jpeg",
    categories: ["c3"]
  },
  {
    id: "P8",
    title: "Quantum Physics For Dummies",
    description:
      "Quantum Physics For Dummies, Revised Edition helps make quantum physics understandable and accessible.",
    price: 20.93,
    discontinued: false,
    imageUrl: "images/quantum.jpg",
    categories: ["c3"]
  },
  {
    id: "P9",
    title: "Relativity : the special and the general theory",
    description:
      "Albert Einstein is the unquestioned founder of modern physics. His theory of relativity is the most important scientific idea of the modern era",
    price: 4.09,
    discontinued: false,
    imageUrl: "images/relativity.jpg",
    categories: ["c3"]
  }
];
