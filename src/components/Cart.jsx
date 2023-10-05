import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CustomCard from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItems } from "../redux/store/slices/cart-slice";

const Cart = ({ value, handleClose, show, handleShow }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartAction = (id) => {
    const matchedItem = cartItems.findIndex((item) => item.id === id);
    dispatch(removeCartItems(matchedItem));
  };
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
                <CustomCard
                  data={value}
                  key={value.id}
                  operation={cartAction}
                />
              ))
            : "your cart is empty"}
        </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
