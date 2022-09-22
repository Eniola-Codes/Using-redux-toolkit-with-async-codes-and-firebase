import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

const dummyItems = [
  {
    id: 'm1',
    title: 'Test',
    price: 6,
    description : 'This is a first product - amazing!'
  },
  {
    id: 'm2',
    title: 'Second test',
    price: 20,
    description : 'This is a second product - amazing!'
  },
  {
    id: 'm3',
    title: 'Third test',
    price: 45,
    description : 'This is a third product - amazing!'
  },
]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        { dummyItems.map((item) => (<ProductItem
        key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description= {item.description}
        />)) }    
      </ul>
    </section>
  );
};

export default Products;
