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

const Book = () => {
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="Book Cover" />
      <h2>Atomic Habits</h2>
      <h4>James Clear</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
