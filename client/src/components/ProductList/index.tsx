import React, { useEffect, useState } from 'react';
import './style.scss';
import axios from 'axios';
import EditProduct from '../EditProduct';

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  product_id: string | undefined;
  onUpdate: () => void;
};

const ProductList: React.FC = () => {
  const [productsState, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const products = await axios.get('/product');
    setProducts(products.data);
  };

  useEffect(() => {
    void getProducts();
  }, []);
  return (
    <div className="product-table-container">
      {productsState.length ? (
          <table className="product-table">
          <tr className="product-table-headings">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
            {productsState.map((product: IProduct) => (
              <EditProduct
              onUpdate = {getProducts}
              product_id={product.product_id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </table>
      ) : (
        <h4>No Products to display.</h4>
      )}
    </div>
  );
};

export default ProductList;
