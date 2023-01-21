import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { removeFromcart } from "../services/cartSlice";

const ByCart = () => {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  
  const calculate = () => {
    let result = () => cart?.reduce((pv, cu) => pv + cu?.price, 0);
    setTotal(result)
  };

  useEffect(() => {
    calculate()
  }, [cart])
  return (
    <div className="my-5 row">
      <div className=" col-7">
        {cart?.map((c) => (
          <div className=" border py-2 px-3 mb-3 rounded" key={c?.id}>
            <img src={c?.image} height="100px" className="mb-2" />
            <p>{c?.title}</p>
            <p>$ {c?.price}</p>
            <button
              onClick={() => dispatch(removeFromcart(c))}
              className=" btn btn-danger"
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
      <div className="col-5">
        <h3>Total Price</h3>
        <h2>${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default ByCart;
