import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
const typeDefs = `
type Product {
  _id: ID!
  title: String!
  qty: Int
 }
type Movie{
  _id: ID!
  name: String!
  score: Int
}
type Query {
  getProduct(_id: ID!): Product
  allProducts: [Product]
  getMovie(_id: ID!): Movie
  allMovies: [Movie]
 }
input ProductInput {
    title: String!
    qty: Int
   }
   input MovieInput {
    name: String!
    score: Int
   }
  type Mutation {
    createProduct(input: ProductInput) : Product
    updateProduct(_id: ID!, input: ProductInput): Product
    deleteProduct(_id: ID!) : Product
    createMovie(input: MovieInput) : Movie
    updateMovie(_id: ID!, input: MovieInput): Movie
    deleteMovie(_id: ID!) : Movie
   }
`;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default schema;
