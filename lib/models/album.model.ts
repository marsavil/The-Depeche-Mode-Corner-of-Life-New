import mongoose from "mongoose";
const AlbumSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    unique:true,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  media: [
    {
      source: {
        type: String,
      },
      route: {
        type: String,
      },
      insert: {
        type: String,
      }   
    }
  ],
  date: {
    type: Date,
    required: true,
  },
  producer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producer"
    }
  ],
  engineer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Engineer"
    }
  ],
  studio: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Studio"
    }
  ],
  rank: {
    type: Number,
    required: true,
    default: 0
  }

});
const Album = mongoose.models.Album || mongoose.model("Album", AlbumSchema);
export default Album;
