import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import './style.scss';

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  product_id: string | undefined;
};

type IDeleteBody = {
  id: string | undefined;
};

const EditProduct: React.FC<IProduct> = ({
  name,
  price,
  quantity,
  product_id,
}: IProduct) => {
  const [priceState, setPrice] = useState<number | undefined>(0);
  const [quantityState, setQuantity] = useState<number | undefined>(0);
  // Product references
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productQuantityRef = useRef<HTMLInputElement>(null);

  const deleteHandler = async () => {
    const config = {
      data: {
        id: product_id,
      },
    };
    await axios.delete('/product', config);
  };
    const saveHandler = () => {
      const productBody = {
          id: product_id,

      }

    }

  useEffect(() => {
    setPrice(price);
    setQuantity(quantity);
  }, [price, quantity]);

  return (
    <li className="list-group-item row">
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <strong>Name:</strong>
                <p>{name}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <strong>Quantity</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="input-col"
                  type="text"
                  value={quantityState}
                  ref={productQuantityRef}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <strong>Price</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  className="input-col"
                  type="text"
                  value={priceState}
                  ref={productPriceRef}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
              <button
                  className="btn btn-outline-info"
                  onClick={saveHandler}
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={deleteHandler}
                  type="submit"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EditProduct;
