import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import {sendCartRequest, fetchCartRequest} from './store/cart-actions'

let initial = true;

function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.showCartState.showCart);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector((state) => state.showCartState.notification);

  // useEffect(() => {
  //   const sendToCart = async () => {

  //     dispatch(showCartActions.showNotification({
  //       status : 'pending',
  //       title: 'Pending...',
  //       message: 'your request is pending',
  //     }));

  //     const response = await fetch(
  //       "https://redux-async-cart-c73f6-default-rtdb.firebaseio.com/cart.json",
  //       { method: "PUT", body: JSON.stringify(cart) }
  //     );

  //     if(!response.ok)
  //     {
  //       throw new Error('Something went wrong while sending');
  //     }

  //       dispatch(showCartActions.showNotification({
  //         status : 'success',
  //         title: 'success!!!',
  //         message: 'your request is Successful!',
  //       }));
  //   };

  //   if(initial)
  //   {
  //     initial=false
  //     return;
  //   }

  //   sendToCart().catch((error) => {
  //     dispatch(showCartActions.showNotification({
  //       status : 'error',
  //       title: 'error!!!',
  //       message: 'your request is Invalid!',
  //     }));
  //   });
  // }, [cart,dispatch]);


  useEffect(() => {

    dispatch(fetchCartRequest());
  }, [dispatch]);


  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    if(cart.changed === true)
    {
      dispatch(sendCartRequest(cart));
    }

  }, [cart, dispatch]);


  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
