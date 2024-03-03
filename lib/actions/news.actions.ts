"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";
import News from "../models/new.model";
import { connectToDB } from "../mongoose";

interface Props {
  image: string;
  title: string;
  author: string;
  text: string;
}
export async function addNew({
  image,
  title,
  author,
  text,} : Props) {

    try {
      console.log("inicia el guardado en BD")
      connectToDB();
      const newNews = new News({
        image,
        title,
        author,
        text,
      });
    await newNews.save();
    } catch (error: any) {
      throw new Error(`failed to publish the new: ${error.message}`)
    }
    
  }
