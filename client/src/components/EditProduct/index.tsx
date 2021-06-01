import axios from 'axios';
import React, { useRef, useState, useEffect, useContext } from 'react';
import './style.scss';
import ProductContext from '../../context/ProductContext';
import { IProduct } from '../../types/types';



const EditProduct: React.FC<IProduct> = ({
  name,
  price,
  quantity,
  product_id,
}: IProduct) => {
  const [priceState, setPrice] = useState<number | undefined>(0);
  const [quantityState, setQuantity] = useState<number | undefined>(0);
  const { setProducts } = useContext(ProductContext)


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
    const newProducts = await axios.get('/product')
    setProducts(newProducts.data)
  };
  const saveHandler = async () => {
    await axios.put('/product', {
      id: product_id,
      value: productPriceRef.current?.value,
      quantity: productQuantityRef.current?.value,
    });
    const newProducts = await axios.get('/product')
    setProducts(newProducts.data)
  };

  useEffect(() => {
    setPrice(price);
    setQuantity(quantity);
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
