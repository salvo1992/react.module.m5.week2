import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";
const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  //   const test = useLocation();
  //   console.log(test.pathname);
  const getBookDetails = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/books/${id}`
      );
      const data = await resp.json();
      setBook(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBookDetails();
  }, [id]);

  return (
    <div className="container mt-3">
      <p>{book && book.asin}</p>
      <p className="fw-bold">{book && book.title}</p>
      <p>Price{book && book.price}</p>
      <img className={styles.myDetails} src={book && book.img} alt="" />
    </div>
  );
};

export default Details;