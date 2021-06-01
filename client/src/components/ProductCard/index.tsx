import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import SaleContext from '../../utils/SaleContext';
import { IProduct, StoreModel } from '../../types/types';

type ICardProps = {
  name: string | undefined;
  price: number;
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
  const { saleState, setProducts, totalState, setTotal } = useContext<StoreModel>(SaleContext)

  const addHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const newQ = 1;
    const newProduct = {name, price, quantity: newQ, product_id}
    const products: IProduct[] = [...saleState, newProduct]
    setProducts(products)
    setQuantity(quantityState - 1);
    setTotal(totalState + price)
  };
  const removeHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const newQ = -1;
    const newProduct = {name, price, quantity: newQ, product_id}
    const products: IProduct[] = [...saleState, newProduct]
    setProducts(products)
    setQuantity(quantityState + 1);
    setTotal(totalState - price)
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
