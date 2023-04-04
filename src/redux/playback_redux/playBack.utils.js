export const addVideoPlayBack = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    console.log(cartItemToAdd);
    console.log(cartItems);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            url: cartItemToAdd.src,
          }
        : {
            ...cartItem,
          }
    );
  }
  return [...cartItems];
};
export const aspectVideoPlayBack = (cartItems, cartItemToRemove) => {
  console.log(cartItemToRemove);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    console.log(cartItemToRemove);
    console.log(cartItems);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, aspect: cartItemToRemove.aspect }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const removeVideoPlayBack = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove
  );

  if (existingCartItem) {
    console.log(cartItemToRemove);
    console.log(cartItems);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove
        ? { ...cartItem, url: "" }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const removeAllVideoPlayBack = (cartItems) => {
  if (cartItems.length > 0) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItem.id ? { ...cartItem, url: "" } : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const showHeaderPlayBack = (cartItems, cartItemToAdd) => {
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
        ? { ...cartItem, headerShow: true }
        : { ...cartItem, headerShow: false }
    );
  }
  return [...cartItems];
};
export const removeShowHeaderPlayBack = (cartItems, cartItemToAdd) => {
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
        ? { ...cartItem, headerShow: false }
        : { ...cartItem, headerShow: false }
    );
  }
  return [...cartItems];
};