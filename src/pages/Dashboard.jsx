import React, { useEffect } from "react";
import ProductDisplay from "../components/ProductDisplay";
// import Cart from "../components/Cart";
import { getProducts } from "../redux/store/slices/product-slice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Navbar";
import Loader from "../components/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loader = useSelector((state) => state.product.isLoading);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {}, [loader]);

  return (
    <div className="container">
      <Header />
      {loader && <Loader />}
      {!loader && <ProductDisplay data={products} />}
    </div>
  );
};

export default Dashboard;
