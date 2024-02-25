"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import Album from "../models/album.model";
import Song from "../models/song.model";
import Comment from "../models/comment.model";
import Devotee from "../models/devotee.model";

import { connectToDB } from "../mongoose";

export async function fetchDevotee(userId: string) {
  try {
    console.log(userId)
    connectToDB();

    return await Devotee.findOne({ id: userId })
      .populate({
        path: "favouriteSongs",
        model: Song,
      })
      .populate({
        path: "favouriteAlbums",
        model: Album,
      })
      .populate({
        path: "comments",
        model: Comment,
      })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  name: string;
  lastname: string,
  country: string,
  bio: string;
  image: string;
  path: string;
}
export async function updateDevotee({
  userId,
  bio,
  name,
  lastname,
  path,
  username,
  image,
  country
}: Params): Promise<void> {
  try {
    connectToDB();

    await Devotee.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        lastname,
        country,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

