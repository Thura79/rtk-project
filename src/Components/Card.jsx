import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addTocart } from '../services/cartSlice';
import { addToFav } from '../services/productSlice';

const Card = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className=' card ' style={{width: '16rem'}}>
        <div className=" card-body">
            <img src={product?.image} height="100px" className=' d-block mx-auto mb-3' />
            <h5 className=' text-truncate'>{product?.title}</h5>
            <p className=' fw-bold text-primary'>$ {product?.price}</p>
            <button onClick={() => dispatch(addTocart(product))} className=' btn btn-outline-primary'>
                <FaCartPlus />
            </button>
            <button onClick={() => dispatch(addToFav(product))} className=' btn btn-outline-danger ms-2'>
                <FaHeart  />
            </button>
        </div>
    </div>
  )
}

export default Card