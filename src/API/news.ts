import axios from "axios";

const URL = "https://hacker-news.firebaseio.com/v0";

export const fetchNewsIds = async (): Promise<number[]> => {
     const newsIds = await axios
          .get<number[]>(`${URL}/newstories.json`)
          .then(res => res.data.slice(0, 100))
     return newsIds
};

export const fetchStory = async (id: number) => {
     const story = await axios
          .get<number[]>(`${URL}/item/${id}.json`)
          .then(res => res.data)
     return story
};
