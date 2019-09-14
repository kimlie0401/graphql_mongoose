import Product from "./models/product";
import Movie from "./models/movie";

export const resolvers = {
  Query: {
    async getProduct(root, { _id }) {
      return await Product.findById(_id);
    },
    async allProducts() {
      return await Product.find();
    },
    async getMovie(root, { _id }) {
      return await Movie.findById(_id);
    },
    async allMovies() {
      return await Movie.find();
    }
  },
  Mutation: {
    async createProduct(root, { input }) {
      return await Product.create(input);
    },
    async updateProduct(root, { _id, input }) {
      return await Product.findOneAndUpdate(
        {
          _id
        },
        input,
        {
          new: true
        }
      );
    },
    async deleteProduct(root, { _id }) {
      return await Product.findOneAndRemove({
        _id
      });
    },
    async createMovie(root, { input }) {
      return await Movie.create(input);
    },
    async updateMovie(root, { _id, input }) {
      return await Movie.findOneAndUpdate(
        {
          _id
        },
        input,
        {
          new: true
        }
      );
    },
    async deleteMovie(root, { _id }) {
      return await Movie.findOneAndRemove({
        _id
      });
    }
  }
};
