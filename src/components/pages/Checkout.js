import { useState, useEffect } from "react";

function Checkout() {
  const cart_product = localStorage.getItem("social-cart");
  const [cartProduct, setCartProduct] = useState([]);
  const [err, setErr] = useState(true);

  useEffect(() => {
    if (cart_product) {
      setCartProduct(JSON.parse(cart_product));
      setErr(false);
    }
  }, [cart_product]);

  let subtotal = 0;
  let totalPrice = 0;

  if (!err) {
    for (let i = 0; i < cartProduct.length; i++) {
      const product = cartProduct[i];
      subtotal += parseFloat(product.price);
      totalPrice += parseFloat(product.totalPrice);
    }
  }

  return (
    <div>
      {err === true ? (
        <div>No product in Cart</div>
      ) : (
        <div className='cart-list3'>
          <div className='flex'>
            <p>Subtotal</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>

          <div className='flex'>
            <p className='green'>Discount on Order</p>
            <p>-$0.00</p>
          </div>

          <div className='flex'>
            <p>Shipping & Handling</p>
            <p>$0.00</p>
          </div>

          <div className='blue'>98101</div>
          <hr />

          <div className='flex'>
            <p className='est-total'>Estimated Total</p>
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>

          <p>Applicable taxes will be calculated at checkout.</p>
          <p className='text-center checkout-btn'>Checkout</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
