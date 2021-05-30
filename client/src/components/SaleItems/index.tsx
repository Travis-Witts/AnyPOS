import React from 'react';
import './style.scss';

type IProduct = {
    name: string;
    price: number;
    quantity: number;
}

const SaleItems: React.FC<IProduct> = ({ name, price, quantity }: IProduct) => {

    const a = 1
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
    )
}

export default SaleItems;