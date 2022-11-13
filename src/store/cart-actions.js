import { showCartActions } from "./showcart";
import { cartItemActions } from "./cartitem";


export const fetchCartRequest = () =>
{
    return async(dispatch) => {

        const fetchRequest = async () =>
        {
        const response = await fetch('https://redux-cart-system-default-rtdb.firebaseio.com/cart.json');

        if(!response.ok)
        {
            throw new Error('Something went wrong');
        }

        const data = response.json();
        return data;
    }

    try {
        const cartData = await fetchRequest();
        dispatch(cartItemActions.replaceCart(cartData));
    }
    catch(error)
    {
        dispatch(
            showCartActions.showNotification({
              status: "error",
              title: "error!!!",
              message: "your request is Invalid!",
            }))
    }
    }
}


export const sendCartRequest = (cart) => {
    return async (dispatch) => {
      dispatch(
        showCartActions.showNotification({
          status: "pending",
          title: "Pending...",
          message: "your request is pending",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch
        (
          "https://redux-cart-system-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify({items : cart.items, totalQuantity : cart.totalQuantity}) }
        );
  
        if (!response.ok) {
          throw new Error("Something went wrong while sending");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          showCartActions.showNotification({
            status: "success",
            title: "success!!!",
            message: "your request is Successful!",
          })
        );
      } catch (error) {
        dispatch(
          showCartActions.showNotification({
            status: "error",
            title: "error!!!",
            message: "your request is Invalid!",
          })
        );
      }
    };
  };
  