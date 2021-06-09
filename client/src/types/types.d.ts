export type IProductEdit = {
  name: string;
  description: string;
  cost: number;
  price: number;
  quantity: number;
  product_id: string;
};

export type IProduct = {
    name: string | undefined;
    description: string;
    cost: number;
    price: number;
    quantity: number;
    product_id: string;
  };
  

export type StoreModel = {
    saleState: IProduct[] | [];
    setProducts: any;
    totalState: number;
    setTotal: (value: number) => void;
}

export type EditModel = {
  productsEditState: IProductEdit[] | [];
  setEditProducts: any;
}

export type LoginProps = {
  setLogin: (value: string) => void;
}

export type DiscountType = {
  discountState: number;
  setDiscount: (value: number) => void;
}

export type ISearch = {
  searchState: IProduct[] | [];
  setSearch: any;
}

export type ISaleProduct = {
  name: string | undefined;
  price: number;
  cost: number;
  quantity: number;
  product_id: string;
  transaction_id: string;
};

export type SaleModel = {
  saleState: newSaleProduct[] | [];
  setProducts: any;
  totalState: number;
  setTotal: (value: number) => void;
  discountState: number;
  setDiscount: (value: number) => void;
}

export type IHook = () => boolean;

export type newSaleProduct = {
  name: string | undefined;
  price: number;
  cost: number;
  quantity: number;
  product_id: string;
}

export type ModalModel = {
  isOpen: boolean;
  setOpen: any
}

export type IReceipt = {
  transaction_id: string;
  total: number;
  discount: number;
  createdAt: string;
}