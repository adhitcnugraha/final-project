import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  // tambah lagi karena belum ada ide mau diisi apa
});

const PostContents = mongoose.model("PostContents", postSchema);
export default PostContents;
