/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import './style.scss';
import SaleContext from '../../utils/SaleContext';
import { IProduct, StoreModel} from '../../utils/Interface';

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
<<<<<<< HEAD
  const { productsState, setProducts } = useContext<StoreModel>(SaleContext)
=======
  const { saleState, setProducts } = useContext<StoreModel>(SaleContext)
>>>>>>> parent of 45ffb64 (:construction: fix: fix ts error on context :construction:)

  const addHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const newQ = quantityState + 1;
    const newProduct = {name, price, quantity, product_id}
    const products: IProduct[] = [...saleState, newProduct]
    setProducts(products)
    setQuantity(quantityState + 1);
  };

  const removeHandler = (event: React.MouseEvent) => {
<<<<<<< HEAD
    event.preventDefault();
    const newQ = -1;
    const newProduct = {name, price, quantity: newQ, product_id}
    const products: IProduct[] = [...productsState, newProduct]
    setProducts(products)
    setQuantity(quantityState -1);
=======
    const newQ = quantityState - 1;
    setQuantity(newQ);
>>>>>>> parent of 45ffb64 (:construction: fix: fix ts error on context :construction:)
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
