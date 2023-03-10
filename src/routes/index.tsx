import MainPage from "../pages/MainPage";
import NewsItemPage from "./../pages/NewsItemPage";

export enum RouteNames {
  MAIN = "/",
  NEWS = "/news/:id",
}

export interface IRoute {
  path: string;
  element: any;
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, element: <MainPage /> },
  { path: RouteNames.NEWS, element: <NewsItemPage /> },
];
