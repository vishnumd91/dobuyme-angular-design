// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class Product_old {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  tags?: ProductTags[];
  colors?: ProductColor[];

  constructor(
    id?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    pictures?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    tags?: ProductTags[],
    colors?: ProductColor[]
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.tags = tags;
    this.colors = colors;
  }

 }
  // Color Filter
  export interface ColorFilter {
    color?: ProductColor;
  }
export interface Product {
  id: number,
  identity: number,
  ad_category: string,
  images: string[],
  title: string,
  currency: number,
  price: string,
  make: string,
  model: string,
  trim: string,
  year: number,
  location: string,
  mobile: string,
  username: string,
  date: string,
  kilometer: string,
}