import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Format = ({ invia, elimina, modifica }) => {
  return (
    <>
      <Form.Control type="text" placeholder="" />
      <Button className="bg-primary">{invia}invia</Button>
      <Button className="bg-primary">{elimina}elimina</Button>
      <Button className="bg-primary">{modifica}modifica</Button>
    </>
  );
};

export default Format;