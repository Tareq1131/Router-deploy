//import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //Conditional rendering(if,else)
  let message;
  if (cart.length === 0) {
    message = <p>Pleass add some products</p>;
  } else {
    message = (
      <div>
        <h4>Right choices</h4>
        <p>
          <small>Select more</small>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* style condition */}
      <h3 className={cart.length === 1 ? 'yellow': 'orange'}>Order summery: {cart.length}</h3>
      <p className={`bold ${cart.length === 1? 'red': 'blue'}`}>Welcome</p>
      {/* //ternary condition? "":"" */}
      {cart.length > 2 ? <span className="orange">Buy more..</span> : <span>show more</span>}
      {message}

      {
      cart.map(tshirt=> 
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      )}
      {/* logical && condition..if the condition is true then next thing  will bbe displayed */}
      {
        cart.length === 2 && <p> Double bonanza!!</p>
      }
      {/* logical or || */}
      {
        cart.length  === 3 || <h5>Buy only 3</h5>
      }
    </div>
  );
};

export default Cart;


