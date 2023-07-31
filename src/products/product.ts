class Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {[key: string]: number};

  constructor(
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {rate: number, count: number}
  ) {
    this.id = id;
    this.title = title;
    this.price =  price;
    this.description =  description;
    this.category =  category;
    this.image =  image;
    this.rating = {rate: rating.rate, count: rating.count}
  }

}

export default Product;