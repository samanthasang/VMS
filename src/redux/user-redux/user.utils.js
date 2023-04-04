export const ChangeComponent = (cartItems, cartItemToAdd) => {
  //   console.log(cartItemToAdd);
  //   console.log(cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd
  );

  if (existingCartItem) {
    console.log(cartItemToAdd);
    console.log(cartItems);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd
        ? { ...cartItem, value: 1 }
        : { ...cartItem, value: 0 }
    );
  }
  return [...cartItems];
};
