import { useDispatch } from 'react-redux';
import { cartItemActions } from '../../store/cartitem';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';


const ProductItem = (props) => {
  const dispatch = useDispatch();

  const onAddToCartHandler = () =>
  {   
    dispatch(cartItemActions.addToCart({
      id,
      title,
      price,
      description
    }));
  }

  const { title, price, description, id } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button button='button' onClick={onAddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
