import React from "react";
import { SaleModel } from '../types/types'

const SaleContext = React.createContext<SaleModel>({
    saleState: [],
    setProducts: () => {},
    totalState: 0,
    setTotal: () => {},
  });


export default SaleContext;