import mongoose from "mongoose";
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    unique:true,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  author: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Devotee"
    },

});
const News = mongoose.models.news || mongoose.model("News", NewsSchema);
export default News;
