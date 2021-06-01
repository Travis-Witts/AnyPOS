import React from "react";
import { StoreModel } from '../types/types'

const SaleContext = React.createContext<StoreModel>({
    saleState: [],
    setProducts: () => {},
    totalState: 0,
    setTotal: () => {},
  });


export default SaleContext;