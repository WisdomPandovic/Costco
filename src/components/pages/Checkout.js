import {useState, useEffect, useContext} from "react" ;

function Checkout (){

    let cart_product = localStorage.getItem("social-cart");
    const [cartProduct, setCartProduct] = useState([]);
    const [err, setErr] = useState(true);

// const {increaseCartQty, decreaseCartQty, deleteCartProduct} = useContext(CostcoContext);

useEffect (() => {
    if (cart_product){
        setCartProduct(JSON.parse(cart_product));
        setErr(false)
    }
}, [cart_product]);



    return(
        <div>
            {err === true ? (
                                <div>No product in Cart</div>
                            ) : (
                    cartProduct.map((product) => (


                    <div className='cart-list3' key={product._id}>
                            <div className='flex'>
                                <p>Subtotal</p>
                                <p>$ {product.price}</p>
                            </div>

                            <div className='flex'>
                                <p className='green'>Discount on Order</p>
                                 <p>-$0.00</p>
                            </div>

                            <div className='flex'>
                                <p>Shippig & Handling for</p>
                                <p>$0.00</p>
                            </div>
                            <div className='blue'>98101</div><hr/>

                            <div className='flex'>
                                <p className='est-total'>Estimated Total</p>
                                <p>$ {product.totalPrice}</p>
                            </div>

                            <p>Applicable taxes will be calculated at checkout.</p>
                            <p className='text-center checkout-btn'>Checkout</p>

                            
                    
                        </div> 
                        ))
                            )}

        </div>
    )
}

export default Checkout;