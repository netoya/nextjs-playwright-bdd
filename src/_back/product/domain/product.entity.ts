export class Product {
  constructor(
    private _id: string | null,
    private name: string,
    private price: number,
    private stock: number
  ) {}

  static create(name: string, price: number, stock: number): Product {
    if (price < 0) throw new Error("Price must be positive");
    if (stock < 0) throw new Error("Stock must be positive");

    return new Product(null, name, price, stock);
  }

  get id() {
    return this._id;
  }

  get productName() {
    return this.name;
  }

  updateStock(newStock: number) {
    if (newStock < 0) throw new Error("Stock must be positive");
    this.stock = newStock;
  }

  toJSON() {
    return {
      id: this._id,
      name: this.name,
      price: this.price,
      stock: this.stock,
    };
  }
}
