import React, { useEffect, useContext } from 'react';
import './style.scss';
import axios from 'axios';
import EditProduct from '../EditProduct';
import ProductContext from '../../context/ProductContext';
import { EditModel, IProduct } from '../../types/types'

const ProductList: React.FC = () => {
  const {productsState, setProducts} = useContext<EditModel>(ProductContext);

  const getProducts = async () => {
    const products = await axios.get('/product');
    setProducts(products.data);
  };

    
  useEffect(() => {
    void getProducts();
  }, []);
  return (
    <div>
      <th>
        <td>Name</td>
        <td>Price $</td>
        <td>Quantity (Units)</td>
        <td>Actions</td>
      </th>
      {productsState.length ? (
          <ul className="list-group">
            {productsState.map((product: IProduct) => (
              <EditProduct
              product_id={product.product_id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </ul>
      ) : (
        <h4>No Products to display.</h4>
      )}
    </div>
  );
};

export default ProductList;
