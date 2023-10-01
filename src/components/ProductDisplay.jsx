import React from "react";
import CustomCard from "./Card";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/store/slices/cart-slice";
import { addBtnStat } from "../redux/store/slices/items-slice";
// import { useSelector } from "react-redux";

const ProductDisplay = ({ data }) => {
  const btnStat = data.map((item) => {
    return {
      id: item.id,
      btnStat: true,
    };
  });
  const dispatch = useDispatch();
  dispatch(addBtnStat(btnStat));

  const getCardDetails = (e, value) => {
    dispatch(addCartItems(value));
  };
  return (
    <div className="row main-container">
      {data.map((value, index) => (
        <CustomCard
          data={value}
          key={index}
          operation={(event) => {
            getCardDetails(event, value);
          }}
        />
      ))}
    </div>
  );
};

export default ProductDisplay;
