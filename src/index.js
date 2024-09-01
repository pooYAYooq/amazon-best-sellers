import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const title = 'Atomic Habits';
const author = 'James Clear';
const img = './images/book-1.jpg';


function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));

root.render(<BookList />);
