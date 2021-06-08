import React from "react";
import { SaleModel } from '../types/types'

const SaleContext = React.createContext<SaleModel>({
    saleState: [],
    setProducts: () => {},
    totalState: 0,
    setTotal: () => {},
    discountState: 0,
    setDiscount: () => {}
  });


export default SaleContext;