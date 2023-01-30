import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.scss";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { BookList } from "./components/BookList/BookList";
import BookCard from "./components/BookCard/BookCard";

const displayBook = {
  volumeInfo: {
    title: "Think Java",
    authors: ["Allen B. Downey", "Chris Mayfield"],
    description:
      "Currently used at many colleges, universities, and high schools, this hands-on introduction to computer science is ideal for people with little or no programming experience.",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=XYQpDAAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  },
};

const Header = () => {
  return (
    <div className={styles.Header}>
      {" "}
      <h1>Search Your Next Book</h1>{" "}
    </div>
  );
};

function App() {
  const [searchString, setSearchString] = useState("");
  const [books, setBooks] = useState(null);

  const fetchSearchString = (input) => {
    setSearchString(input);
  };

  const wrapper = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}`
    );
    const data = await response.json();

    setBooks(data.items);
    console.log(books);
  };

  useEffect(() => {
    if (searchString) {
      wrapper();
    }
  }, [searchString]);
  if (books) {
    return (
      <div className={styles.MainDiv}>
        <Header />
        <SearchBar fetchSearchString={fetchSearchString} />
        <h4> Search Results for "{searchString}" :</h4>
        <BookList results={books} />
      </div>
    );
  } else {
    return (
      <div className={styles.MainDiv}>
        <Header className={styles.header} />
        <SearchBar fetchSearchString={fetchSearchString} />
        <h1>
          <b>Book of the Day .....</b>
        </h1>
        <BookCard book={displayBook} />
      </div>
    );
  }
}

export default App;
