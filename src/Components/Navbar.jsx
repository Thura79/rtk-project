import React from "react";
import { FaCartPlus, FaHeart, FaShopware } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector(state => state.cart.carts)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid gap-1">
          <FaShopware className=" display-5 text-primary" />
          <Link to={"/"}>
            <span className=" display-5 ">MyShop</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/cart"}>
                  <button className=" btn btn-primary">
                    <FaCartPlus /> {cart?.length}
                  </button>
                </Link>
              </li>
              <Link to={"/fav"}>
                <li className="nav-item">
                  <button className="ms-2 btn btn-danger">
                    <FaHeart className=" " />
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
