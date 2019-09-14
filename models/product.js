import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  }
});
mongoose.set("useFindAndModify", false);
export default mongoose.model("product", ProductSchema);
