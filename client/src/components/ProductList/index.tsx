import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';
import EditProduct from '../EditProduct';

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  product_id: string | undefined;
};

const ProductList: React.FC = () => {
  const [productsState, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const products = await axios.get('/product');
    setProducts(products.data);
    console.log(products.data)
  };

  useEffect(() => {
    void getProducts();
  }, []);
  return (
    <div>
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
