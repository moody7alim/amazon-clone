import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton = false }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id
    });
  };
  //remove the item from the basket

  return (
    <div className='checkout-product'>
      <img className='checkout-product__image' src={image} />

      <div className="checkout-product__info">
        <p className='checkout-product__title'>{title}</p>
        <p className='checkout-product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating).fill().map(() => (
            <p>⭐</p>
          ))}
        </div>

        {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
};

export default CheckoutProduct;