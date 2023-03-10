import { Dispatch } from "redux";
import { NewsAction, NewsActionTypes } from "../../models/news";
import { fetchItem, fetchNewsIds } from "../../API/news";

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsActionTypes.FETCH_NEWS });
      const Ids = await fetchNewsIds();
      const response = await Promise.all(Ids.map(fetchItem));
      dispatch({ type: NewsActionTypes.FETCH_NEWS_SUCCESS, payload: response });
    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: "Произошла ошибка при загрузке новостей",
      });
    }
  };
};
