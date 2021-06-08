import React from "react";
import { ModalModel } from '../types/types'


const ModalContext = React.createContext<ModalModel>({
    isOpen: false,
    setOpen: () => {},
  });


export default ModalContext;