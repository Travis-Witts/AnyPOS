import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import './style.scss';

type IProduct = {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  product_id: string | undefined;
  onUpdate: () => void;
};

type IDeleteBody = {
  id: string | undefined;
};

const EditProduct: React.FC<IProduct> = ({
  name,
  price,
  quantity,
  product_id,
  onUpdate,
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
    onUpdate();
  };
  const saveHandler = async () => {
    await axios.put('/product', {
      id: product_id,
      value: productPriceRef.current?.value,
      quantity: productQuantityRef.current?.value,
    });
    onUpdate();
  };

  useEffect(() => {
    setPrice(price);
    setQuantity(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr className="product-row">
      <td>
        <p>(Current)</p>
        <p>{name}</p>
      </td>
      <td>
        <input
          className="input-col"
          disabled
          type="text"
          value={quantityState}
        />
        <input
          className="input-col"
          type="text"
          defaultValue={quantityState}
          ref={productQuantityRef}
        />
      </td>
      <td>
        <input className="input-col" disabled type="text" value={priceState} />
        <input
          className="input-col"
          type="text"
          defaultValue={priceState}
          ref={productPriceRef}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-dark"
          onClick={deleteHandler}
          type="submit"
        >
          Delete
        </button>
        <button
          className="btn btn-outline-info"
          onClick={saveHandler}
          type="submit"
        >
          Save
        </button>
      </td>
      <hr />
    </tr>
  );
};

export default EditProduct;
