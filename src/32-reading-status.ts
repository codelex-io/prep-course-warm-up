export {};
interface Book {
  title: string;
  author: string;
  isRead: boolean;
}
const library: Book[] = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (library: Book[]) => {
  library.forEach((book: Book) => {
    if (book.isRead) {
      console.log(`Already read '${book.title}' by ${book.author}. `);
    } else {
      console.log(`You still need to read '${book.title}' by ${book.author}.`);
    }
  });
};

showStatus(library);

/*
  Expected output:

  Already read 'The Road Ahead' by Bill Gates.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
