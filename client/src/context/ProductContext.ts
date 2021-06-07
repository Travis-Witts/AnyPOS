import React from "react";
import { EditModel } from '../types/types'


const ProductContext = React.createContext<EditModel>({
    productsEditState: [],
    setEditProducts: () => {},
  });


export default ProductContext;