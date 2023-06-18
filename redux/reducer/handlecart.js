const cart = [];

export const handlecart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "addcart":
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "delcart":
      const exist2 = state.find((x) => x.id === product.id);

      if (exist2.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

    case "pluscart":
      return state.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );

    case "minuscart":
      const exist3 = state.find((x) => x.id === product.id);

      if (exist3.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((item) =>
          item.id === product.id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        );
      }

    default:
      return state;
      break;
  }
};
