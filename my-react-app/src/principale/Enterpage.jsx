import React, { useEffect, useState } from "react";
import Cart from "../Cards/Cart";
import { nanoid } from "nanoid";

const EnterPage = () => {
  const [books, setBooks] = useState([]);
  const [bookError, setBookError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBooks = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/books");
      const data = await resp.json();
      setBooks(data);
      setBooks(data.slice(0, 12));
      setLoading(false);
    } catch (e) {
      setBookError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {bookError && <div>Si è verificato un errore...</div>}
          {loading && !bookError && <div>Caricamento in corso...</div>}
          {!loading && !bookError && (
            <>
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                {books.map((book) => (
                  <Cart
                    key={nanoid()}
                    asin={book.asin}
                    title={book.title}
                    price={book.price}
                    img={book.img}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterPage;