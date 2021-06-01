export type IProductEdit = {
  name: string | undefined;
  price: number;
  quantity: number;
};

export type IProduct = {
    name: string | undefined;
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
  productsState: IProduct[] | [];
  setProducts: any;
}

export type LoginProps = {
  setLogin: (value: string) => void;
}

export type DiscountType = {
  discountState: number;
  setDiscount: (value: number) => void;
}

export type ISaleProduct = {
  name: string | undefined;
  price: number;
  quantity: number;
  product_id: string;
  transaction_id: string;
};

export type SaleModel = {
  saleState: ISaleProduct[] | [];
  setProducts: any;
  totalState: number;
  setTotal: (value: number) => void;
}