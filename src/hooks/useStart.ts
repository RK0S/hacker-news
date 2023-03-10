import { useEffect } from "react";
import { useActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useStart = () => {
  const { news } = useTypedSelector((state) => state.news);
  const { fetchNews } = useActions();
  useEffect(() => {
    if (!news.length) {
      //При нажатии кнопки "Вернуться" данные не подгружаются, а берутся со store из Redux для скорости. Можно удалить проверку и каждый раз будут подгружаться новые данные
      fetchNews();
    }
    const intervalCall = setInterval(() => {
      fetchNews();
    }, 60000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);
};
