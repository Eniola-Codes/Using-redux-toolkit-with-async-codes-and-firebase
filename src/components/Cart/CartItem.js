import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartItemActions } from '../../store/cartitem';


const CartItem = (props) => {
 const dispatch = useDispatch();

  const onAddHandler = () =>
  {   
    dispatch(cartItemActions.addToCart({
      id,
      title,
      price,
    }));
  }

  const onRemoveHandler = () =>
  {   
    dispatch(cartItemActions.removeFromCart(id));
  }


  const { title, quantity, price, total, id} = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x  <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
