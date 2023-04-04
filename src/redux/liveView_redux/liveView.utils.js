export const showHeader = (cartItems, cartItemToAdd) => {
  //   console.log(cartItemToAdd);
  //   console.log(cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd
        ? { ...cartItem, headerShow: true }
        : { ...cartItem, headerShow: false }
    );
  }
  return [...cartItems];
};
export const hideHeader = (cartItems, cartItemToAdd) => {
  //   console.log(cartItemToAdd);
  //   console.log(cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd
        ? { ...cartItem, headerShow: false }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};

export const addVideo = (cartItems, cartItemToAdd) => {
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
            src: cartItemToAdd.src,
            src2: cartItemToAdd.src2,
            headerShow: false,
          }
        : {
            ...cartItem,
          }
    );
  }
  return [...cartItems];
};
export const addAspectVideo = (cartItems, cartItemToAdd) => {
  if (cartItems.length > 0) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItem.id
        ? { ...cartItem, aspectRatio: cartItemToAdd }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const addAspectOneVideo = (cartItems, cartItemToAdd) => {
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
            aspectRatio: cartItemToAdd.aspect,
          }
        : {
            ...cartItem,
          }
    );
  }
  return [...cartItems];
};
export const changeStream = (cartItems, cartItemToAdd) => {
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
            chooseSrc: cartItemToAdd.chooseSrc,
          }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const removeVideo = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove
  );

  if (existingCartItem) {
    console.log(cartItemToRemove);
    console.log(cartItems);
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove
        ? { ...cartItem, src: "", src2: "", headerShow: false }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const removeAllVideo = (cartItems) => {
  if (cartItems.length > 0) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItem.id
        ? { ...cartItem, src: "", src2: "", headerShow: false }
        : { ...cartItem }
    );
  }
  return [...cartItems];
};
export const addNewView = (cartItems, cartItemToAdd) => {
  console.log(cartItemToAdd.groupName);
  console.log(cartItems);
  const existingCartItem = cartItems.View.find(
    (cartItem) => cartItem.title === cartItemToAdd.groupName
  );

  if (existingCartItem) {
    return cartItems.View.map((cartItem) =>
      cartItem.title === cartItemToAdd.groupName
        ? {
            ...cartItem,
            children: [
              ...cartItem.children,
              {
                title: cartItemToAdd.viewName,
                icon: 2,
                key: "0-0-2-5",
                Windows: {
                  id: "1",
                  window: "window",
                  span: 12,
                  height: "50%",
                },
                Windows_video: [
                  {
                    id: "1",
                    window_4: "window_4",
                    src: "http://techslides.com/demos/sample-videos/small.webm",
                    headerShow: false,
                  },
                  {
                    id: "2",
                    window_4: "window_4",
                    src: "http://techslides.com/demos/sample-videos/small.webm",
                    headerShow: false,
                  },
                  {
                    id: "3",
                    window_4: "window_4",
                    src: "http://techslides.com/demos/sample-videos/small.webm",
                    headerShow: false,
                  },
                  {
                    id: "4",
                    window_4: "window_4",
                    src: "http://techslides.com/demos/sample-videos/small.webm",
                    headerShow: false,
                  },
                ],
                Windows_single_video: [
                  {
                    id: "1",
                    window_4: "window_4",
                    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
                  },
                ],

                Windows_single_video1: [
                  {
                    id: "1",
                    window_4: "window_4",
                    src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
                  },
                ],
              },
            ],
          }
        : {
            ...cartItem,
          }
    );
  }
  console.log(cartItems);
  return [...cartItems];
};
// export const setView_Windows_video = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.key === cartItemToAdd
//   );

// if (existingCartItem) {
//   console.log(cartItemToAdd);
//   console.log(cartItems);
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToAdd
//       ? {
//           ...cartItem,
//           Windows_video: cartItem.View.Windows_video,
//         }
//       : { ...cartItem }
//   );
// }
// return [...cartItems];
// };
