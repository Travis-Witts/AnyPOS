/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import SaleContext from '../../utils/SaleContext';

type ICardProps = {
  name: string | undefined;
  price: number | undefined;
  quantity: number;
  product_id: string | undefined;
};

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  product_id: string | undefined;
};

const ProductCard: React.FC<ICardProps> = ({
  name,
  price,
  quantity,
  product_id,
}: ICardProps) => {
  const quantityRef = useRef<HTMLParagraphElement>(null);
  const [quantityState, setQuantity] = useState<number>(quantity);
  const { saleState, setProducts } = useContext(SaleContext)

  const addHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const newQ = quantityState + 1;
    const newProduct = {name, price, quantity, product_id}
    const products: IProduct[] = [...saleState, newProduct]
    setProducts(products)
    setQuantity(newQ);
  };

  const removeHandler = (event: React.MouseEvent) => {
    const newQ = quantityState - 1;
    setQuantity(newQ);
  };

  return (
    <div id={product_id}>
      <div className="card has-background-grey-light">
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
          <a
            onClick={addHandler}
            className="card-footer-item button is-success"
          >
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
    </div>
  );
};

export default ProductCard;
