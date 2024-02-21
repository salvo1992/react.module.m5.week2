import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cart = ({ title, price, img, asin }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Link to={`/book/${asin}`}>
            <Button variant="primary">Dettagli</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};
export default Cart;