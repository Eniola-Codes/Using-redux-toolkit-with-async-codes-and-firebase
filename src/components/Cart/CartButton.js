import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { showCartActions } from '../../store/showcart';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector(state => state.cartItems.totalQuantity)

  const onToggleCartHandler = () =>
  {
      dispatch(showCartActions.showCart());
  }

  return (
    <button className={classes.button} onClick={onToggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
