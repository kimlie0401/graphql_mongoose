import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number
  }
});
mongoose.set("useFindAndModify", false);
export default mongoose.model("movie", MovieSchema);
