import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const firstBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: './images/book-1.jpg',
};

const secondBook = {
  author: 'Colleen Hoover ',
  title: 'It Ends With Us',
  img: './images/book-2.jpg',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
