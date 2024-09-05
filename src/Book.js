/**
 * The Book component renders an article element with an image, title, author
 * and number. The number is the position of the book in the list.
 * @param {{img: string, title: string, author: string, number: number}} props
 * @returns {ReactElement} The article element
 */
export default function Book({ img, title, author, number: i }) {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{i + 1}</span>
    </article>
  );
}
