import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import books from './books';
import Book from './Book';

function Booklist() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book key={book.id} {...book} number={index} />
        ))}
      </section>
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<Booklist />);
