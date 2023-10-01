import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CustomCard from "./Card";
import { useSelector } from "react-redux";

const Cart = ({ value, handleClose, show, handleShow }) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  return (
    <>
      <Button placement="end" variant="primary" onClick={handleShow}>
        {value}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>Your Cart Items</Offcanvas.Header>
        <div className="cartCardsContainer">
          {cartItems.length > 0
            ? cartItems?.map((value) => (
                <CustomCard data={value} key={value.id} />
              ))
            : "your cart is empty"}
        </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
