import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find(
        (product) => product.id === args.productId
      );
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },

  Product: {
    category: (parent, args, context) => {
      // console.log(parent);
      return db.categories.find(
        (category) => category.id === parent.categoryId
      );
    },
    reviews: (parent, args, context) => {
      return db.reviews.filter((review) => review.productId === parent.id);
    },
  },

  Category: {
    products: (parent, args, context) => {
      // console.log(parent);
      return db.products.filter((product) => product.categoryId === parent.id);
    },
  },
};
