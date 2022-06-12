export interface IProduct {
  id: number;
  name: string;
  type: string;
  image: string;
  longDescription?: string;
  amount?: number;
  specs: ISpecs;
}
export interface ISpecs {
  price: string;
}

export interface ICartItemPostData {
  productId: number;
  amount: number;
}

export class CartCollection {
  items: IProduct[];
  constructor() {
    this.items = [
      {
        id: 1,
        name: 'One',
        type: 'one',
        image: 'one.svg',
        amount: 10,
        specs: {
          price: '1',
        },
      },
      {
        id: 3,
        name: 'Three',
        type: 'three',
        image: 'three.svg',
        amount: 10,
        specs: {
          price: '3',
        },
      },
      {
        id: 7,
        name: 'Seven',
        type: 'seven',
        image: 'seven.svg',
        amount: 10,
        specs: {
          price: '7',
        },
      },
    ];
  }
}
