export const addToCart = (id, allproduct) => {
  const localCartData = localStorage.getItem("cart-data");

  if (localCartData) {
    const cartdata = JSON.parse(localCartData);

    const existingItemIndex = cartdata.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // If item already exists, increment quantity
      cartdata[existingItemIndex].qty += 1;
    } else {
      // If item doesn't exist, add it to the cart
      allproduct.qty = 1;
      cartdata.push(allproduct);
    }

    localStorage.setItem("cart-data", JSON.stringify(cartdata)); // Save updated cart data to local storage
  } else {
    // If no cart data exists, create a new cart with the product
    allproduct.qty = 1;
    localStorage.setItem("cart-data", JSON.stringify([allproduct]));
  }
};
