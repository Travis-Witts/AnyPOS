/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';
import './style.scss';

type ICardProps = {
  name: string | undefined;
  price: number | undefined;
  quantity: number;
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

  const addHandler = (event: React.MouseEvent) => {
    const newQ = quantityState + 1;
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
