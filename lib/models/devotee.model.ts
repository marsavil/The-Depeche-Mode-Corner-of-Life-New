import mongoose from "mongoose";
const devoteeSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  bio: {
    type: String,
  },
  favouriteSongs : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song"
    }
  ],
  favouriteAlbums : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Albums"
    }
  ],
  image: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  onboarded: {
    type: Boolean,
    default: false,
  }
});
const Devotee = mongoose.models.Devotee || mongoose.model("Devotee", devoteeSchema);
export default Devotee;