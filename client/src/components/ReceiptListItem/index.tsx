import React from 'react';
import { IReceipt } from '../../types/types';

const ReceiptListItem: React.FC<IReceipt> = ({transaction_id, total, discount, createdAt}: IReceipt) => (
    <React.Fragment>
    <div className="col-edit-name">
    <input
      disabled
        className="input-col"
        type="text"
        defaultValue={transaction_id}
      />
    </div>
    <div className="col-edit-cost">
      <input
      disabled
        className="input-col"
        type="text"
        defaultValue={total}
      />
    </div>
    <div className="col-edit-price">
      <input
      disabled
        className="input-col"
        type="text"
        defaultValue={discount}
      />
    </div>
    <div className="col-edit-quantity">
      <input
      disabled
        className="input-col"
        type="text"
        defaultValue={createdAt}
      />
    </div>
    </React.Fragment>
  )


export default ReceiptListItem;