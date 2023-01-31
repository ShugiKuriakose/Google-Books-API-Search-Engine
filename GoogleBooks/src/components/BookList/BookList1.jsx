import React from "react";
import BookCard from "../BookCard/BookCard";
import { useState } from "react";
import BookCard1 from "../BookCard/BookCard1";
import styles from "./BookList.module.scss";
import Modal from "react-modal";
import BookDetails from "../BookDetails/BookDetails";

export const BookList1 = ({ results }) => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div className={styles.BookList}>
      {results &&
        results.map((result) => {
          return (
            <BookCard1 key={result.id} book={result} onClick={setCurrentBook} />
          );
        })}

      <Modal className={styles.BookList__Modal} isOpen={Boolean(currentBook)}>
        {currentBook && <BookDetails book={currentBook} />}
        <button onClick={() => setCurrentBook(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default BookList1;
