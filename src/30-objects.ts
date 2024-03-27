export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */
type Book = { author?: string; title: string; year?: number; pageCount?: number, publisher?: string };
const books: Book[] = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris",
    year: 1998,
    pageCount: 309,
    publisher: 'Zvaigzne'
  },
  {
    title: "Tools of Titans",
    year: 1998,
    pageCount: 309,
    publisher: 'Zvaigzne'

  }
];

const getTheTitles = (books: Book[]) => books.map((book: Book) => book.title);

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
