// Type definition for a single product
export type Product = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
};
