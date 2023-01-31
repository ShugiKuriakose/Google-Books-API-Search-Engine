import React from "react";
import styles from "./BookCard.module.scss";

export const BookCard = ({ book }) => {
  const title = book.volumeInfo.title;
  const authors = book.volumeInfo.authors;
  const description = book.volumeInfo.description;
  let imgsrc = "";
  if (book.volumeInfo.imageLinks) {
    imgsrc = book.volumeInfo.imageLinks.smallThumbnail;
  }
  return (
    <div className={styles.BookCard}>
      <div className={styles.BookCard__image}>
        <img
          src={imgsrc}
          alt="https://t3.ftcdn.net/jpg/03/34/83/22/360_F_334832255_IMxvzYRygjd20VlSaIAFZrQWjozQH6BQ.jpg"
        />
      </div>
      <div className={styles.BookCard__details}>
        {title ? <h3>{title}</h3> : <h3></h3>}
        <h5>
          {authors ? <em>{book.volumeInfo.authors.join(" , ")}</em> : <em></em>}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default BookCard;
