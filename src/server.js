import { createServer, Model } from 'miragejs';

import productsInitial from './data/products';
import stockInitial from './data/stock';
import categoryInitial from './data/stock';

export default function server() {
  createServer({
    models: {
      products: Model,
      stock: Model,
      category: Model,
    }, 

    seeds({ schema }) {
      productsInitial.map(item => (
        schema.create("products", item)
      ));

      stockInitial.map(item => (
        schema.create("stock", item)
      ));

      categoryInitial.map(item => (
        schema.create("category", item)
      ));
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get("/products/:id", (schema, request) => {
        const { id } = request.params;

        return schema.products.find(id);
      });

      this.get("/consoles", (schema, request) => {
        return schema.products.where(item => item.categoryId == 2);
      });

      this.get("/games", (schema, request) => {
        return schema.products.where(item => item.categoryId == 1);
      });
    }
  })
}