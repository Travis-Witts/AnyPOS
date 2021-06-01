import React from "react";
import { EditModel } from '../types/types'


const ProductContext = React.createContext<EditModel>({
    productsState: [],
    setProducts: () => {},
  });


export default ProductContext;