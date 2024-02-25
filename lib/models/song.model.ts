import mongoose from "mongoose";
const SongSchema = new mongoose.Schema({
  title: {
    type: String,
    unique:true,
    required: true
  },
  release: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album"
    }
  ],
  date: {
    type: Date,
    required: true,
  },
  composer :[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Composer"
    }
  ],
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
const Song = mongoose.models.Song || mongoose.model("Song", SongSchema);
export default Song;