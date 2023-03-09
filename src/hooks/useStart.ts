import { useEffect } from "react";
import { useActions } from './useActions';
import { useTypedSelector } from './useTypedSelector';

export const useStart = () => {
    const {news} = useTypedSelector(state => state.news)
    const {fetchNews} = useActions()
    useEffect(() => {
        if (!news.length) {
            fetchNews()
        }
        const intervalCall = setInterval(() => {
            fetchNews()
        }, 60000);
        return () => {
            clearInterval(intervalCall);
        };
   }, [])
}