/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import './style.scss';
import { IProduct } from '../../utils/Interface';



const EditProduct: React.FC<IProduct> = ({
  name,
  price,
  quantity,
}: IProduct) => {


  // Product references

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr className="product-row">
      <td>
        <p>{name}</p>
      </td>
      <td>
        <input
          className="input-col"
          disabled
          type="text"
          value={price}
        />
      </td>
      <td>
        <input className="input-col" disabled type="text" value={quantity} />
      </td>
      <hr />
    </tr>
  );
};

export default EditProduct;
