import mongoose from "mongoose";
const studioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song"
    }
  ],
});
const Producer = mongoose.models.Producer || mongoose.model("Producer", studioSchema);
export default Producer;