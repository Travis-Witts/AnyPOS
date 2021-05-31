/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { StoreModel } from './Interface'

const SaleContext = React.createContext<StoreModel>({
    saleState: [],
    setProducts: () => {},
  });


export default SaleContext;