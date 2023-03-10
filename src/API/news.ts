import axios from "axios";
import { StoryData } from "../models/story";
import { CommentData } from "../models/comment";

const URL = "https://hacker-news.firebaseio.com/v0";

export const fetchNewsIds = async (): Promise<number[]> => {
  const newsIds = await axios
    .get<number[]>(`${URL}/newstories.json`)
    .then((res) => res.data.slice(0, 100));
  return newsIds;
};

export const fetchItem = async (
  id: number
): Promise<StoryData | CommentData> => {
  const item = await axios
    .get(`${URL}/item/${id}.json`)
    .then((res) => res.data);
  return item;
};
