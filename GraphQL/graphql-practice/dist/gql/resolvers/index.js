import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find((product) => product.id === args.productId);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            return db.categories.find((category) => category.id === args.categoryId);
        },
    },
    Product: {
        category: (parent, args, context) => {
            // console.log(parent);
            return db.categories.find((category) => category.id === parent.categoryId);
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
