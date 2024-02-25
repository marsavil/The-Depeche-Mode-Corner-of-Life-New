import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: { type: "string", required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Devotee",
    required: true,
  },
  Song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
  },
  Album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
  createdAt:{
    type: Date,
    default: Date.now
  },
  parentId: {
    type: String
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }
  ]
});
const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);
export default Comment