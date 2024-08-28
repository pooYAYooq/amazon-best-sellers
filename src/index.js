import React from 'react';
import { createRoot } from 'react-dom/client';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81YkqyaFVEL._SL1500_.jpg"
    alt="Book Cover"
  />
);
const Title = () => {
  return <h2>Atomic Habits</h2>;
};

const Author = () => <h4>James Clear</h4>;

const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
