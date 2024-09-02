import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Colleen Hoover',
    title: 'It Ends With Us',
    img: './images/book-2.jpg',
    id: 2,
  },
  {
    author: 'Lauren Roberts',
    title: 'Reckless',
    img: './images/book-3.jpg',
    id: 3,
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
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

root.render(<Booklist />);


