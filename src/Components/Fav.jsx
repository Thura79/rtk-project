import React from "react";
import { useSelector } from "react-redux";
// import Card from "./Card";
import FavCard from "./FavCard";

const Fav = () => {
  const favItem = useSelector((store) => store.product.fav);
  console.log(favItem);
  return (
    <div className=" d-flex gap-3 flex-wrap mt-5">
        {

            favItem?.map(f => (<FavCard key={f?.id} product={f}/>))

        }

    </div>
  );
};

export default Fav;
