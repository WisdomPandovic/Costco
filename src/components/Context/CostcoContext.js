import { useState, createContext, useEffect } from "react";

export const CostcoContext = createContext();

function CostcoProvider(props) {
    const [cart, setCart] = useState([]);

    const localStorageCart = localStorage.getItem("social-cart");

    useEffect(() => {
        if(localStorageCart){
          let CartData = JSON.parse(localStorageCart);
          setCart(CartData);
        }

    }, [localStorageCart]);

  const addToCart = (product) => {
    let cartData = [...cart];
    let checkDataExist = cartData.find((data) => {
        return data._id === product._id;
    });
    if (checkDataExist) {
        alert("Product in cart");
        return;
    }
    alert("product added to cart");
   let newProduct = {...product, qty:1, totalPrice: product.price};
   cartData.push(newProduct);
    setCart(cartData);
    localStorage.setItem("social-cart", JSON.stringify(cartData));
    console.log(cartData)
};



const increaseCartQty = (product) => {
  let initialCart = [...cart];
  initialCart.find((productItem) => {
    if(productItem._id === product._id) {
      productItem.qty += 1;
      productItem.totalPrice = productItem.qty * productItem.price;
    }
      
  })
  // console.log(initialCart)
  setCart(initialCart);
  localStorage.setItem("social-cart", JSON.stringify(initialCart));
   
};

const decreaseCartQty = (product) => {
  let initialCart = [...cart];
  initialCart.find((productItems) => {
    if(productItems._id === product._id) {
        if(productItems.qty > 1) {
          productItems.qty -= 1;
          productItems.totalPrice = productItems.qty * productItems.price;
        }
    }
  });
  console.log(initialCart)
  setCart(initialCart);
  localStorage.setItem("social-cart", JSON.stringify(initialCart));

}

const deleteCartProduct = (product) => {
  let initialCart = [...cart];
  let productItems = initialCart.filter((productItem) => {
       return productItem._id !== product._id;
  });
  setCart(productItems);
  localStorage.setItem("social-cart", JSON.stringify(productItems));
  alert("Do you want to remove product?");

  // window.location.reload(true)

}

    return <CostcoContext.Provider value={{cart, setCart, addToCart, increaseCartQty, decreaseCartQty, deleteCartProduct}}>{props.children}</CostcoContext.Provider>
}

export default CostcoProvider;