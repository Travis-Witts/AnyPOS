import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import SaleContext from '../../context/SaleContext';
import { newSaleProduct, SaleModel } from '../../types/types';

const ProductCard: React.FC<newSaleProduct> = ({
  name,
  price,
  cost,
  quantity,
  product_id,
}: newSaleProduct) => {
  const quantityRef = useRef<HTMLParagraphElement>(null);
  const [quantityState, setQuantity] = useState<number>(quantity);
  const { saleState, setProducts, totalState, setTotal } =
    useContext<SaleModel>(SaleContext);

  const addHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      if (quantityState === 0) {
        throw new Error
      }
      const newProduct: newSaleProduct = { name, price, cost, quantity: 1, product_id };
      let exists = false;
      for (let i = 0; i < saleState.length; i += 1) {
        if (product_id === saleState[i].product_id) {
          saleState[i].quantity += 1;
          exists = true;
        }
      }
      if (!exists) {
        const newProducts: newSaleProduct[] = [...saleState, newProduct];
        setProducts(newProducts);
      } else {
        const products: newSaleProduct[] = saleState;
        setProducts(products);
      }
      setQuantity(quantityState - 1);
      setTotal(totalState + price);
    } catch (error) {
      console.log("Out of stock!");
    }
  };

  const removeHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const newProduct: newSaleProduct = { name, price, cost, quantity: -1, product_id };
      let exists = false;
      for (let i = 0; i < saleState.length; i += 1) {
        if (product_id === saleState[i].product_id) {
          saleState[i].quantity -= 1;
          exists = true;
        }
      }
      if (!exists) {
        const newProducts: newSaleProduct[] = [...saleState, newProduct];
        setProducts(newProducts);
      } else {
        const products: newSaleProduct[] = saleState;
        setProducts(products);
      }
      setQuantity(quantityState + 1);
      setTotal(totalState - price);
    } catch (error) {
      console.log("Crediting stock failed!")
    }
  };

  return (
    <div id={product_id} className="card has-background-grey-light">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>Price: ${price}.00</p>
          <p>
            Quantity: <span ref={quantityRef}>{quantityState}</span>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <a onClick={addHandler} className="card-footer-item button is-success">
          Add
        </a>
        <a
          onClick={removeHandler}
          className="card-footer-item button is-danger"
        >
          Remove
        </a>
      </footer>
    </div>
  );
};

export default ProductCard;
