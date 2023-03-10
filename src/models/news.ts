export enum NewsActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
}

export interface NewsState {
  news: any[];
  loading: boolean;
  error: null | string;
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccesAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: any[];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type NewsAction =
  | FetchNewsAction
  | FetchNewsSuccesAction
  | FetchNewsErrorAction;
