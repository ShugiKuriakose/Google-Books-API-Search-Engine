import React from "react";
import BookCard from "../BookCard/BookCard";
import styles from "./BookList.module.scss";

export const BookList = ({ results }) => {
  return (
    <div className={styles.BookList}>
      {results &&
        results.map((result) => {
          return (
            <BookCard
              key={result.id}
              book={result}
              // key={result.id}
              // name={result.volumeInfo.title}
              // author={result.volumeInfo.authors.join(" , ")}
              // description={result.categories.description}
            />
          );
        })}
    </div>
  );
};

export default BookList;
