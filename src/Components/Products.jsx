import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../services/api";
import { addProduct } from "../services/productSlice";
import Card from "./Card";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const getProductData = async () => {
    const data = await getData("/products");
    dispatch(addProduct(data));
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className=" my-5 d-flex flex-wrap gap-3">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
