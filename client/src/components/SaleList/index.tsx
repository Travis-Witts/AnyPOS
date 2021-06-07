import React, { useEffect, useContext } from 'react';
import './style.scss';
import SaleProduct from '../SaleProduct';
import SaleContext from '../../context/SaleContext'
import { SaleModel, IProduct } from '../../types/types'

const SaleList: React.FC = () => {
  const { saleState } = useContext<SaleModel>(SaleContext);

  useEffect(() => {
  }, []);
  return (
    <div className="container">

        <div id="col-name" className="sale-product-col">Name</div>
        <div id="col-price" className="sale-product-col">Price $</div>
        <div id="col-quantity" className="sale-product-col">Quantity</div>
      {saleState.length ? (
        <ul className="list-group">
          {saleState.map((product: IProduct) => (
            <SaleProduct
              product_id={product.product_id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </ul>
      ) : (
        <ul className="no-products">No Products to display.</ul>
      )}
    </div>
  );
};

export default SaleList;
