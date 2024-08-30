import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = 'James Clear';
const Book = () => {
  const title = 'Atomic Habits';
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Book Cover" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
