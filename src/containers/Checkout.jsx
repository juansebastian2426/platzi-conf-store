import React, { useContext, useMemo } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

export const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const quantityCartProducts = useMemo(() => {
    return cart.length;
  }, [cart]);

  const handleSumTotal = useMemo(() => {
    return cart.reduce((acc, crr) => acc + crr.price, 0);
  }, [cart]);

  const handleRemoveFromCart = product => removeFromCart(product);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {quantityCartProducts > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}

        {
          cart.map(product => (
            <div key={product.id} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
              <button type="button" onClick={() => handleRemoveFromCart(product)}>
                <i className='fas fa-trash-alt' />
              </button>
            </div>
          ))
        }
      </div>
      {
        quantityCartProducts > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio total: $ ${handleSumTotal}`}</h3>
            <Link to='/checkout/information'>
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )
      }
    </div>
  );
};
