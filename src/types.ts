export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'bread' | 'pastry' | 'cake' | 'cookie';
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface DeliveryInfo {
    address: string;
    additionalDetails: string;
  }