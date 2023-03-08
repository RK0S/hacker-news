import { useAppDispatch } from './useAppDispatch';
import { bindActionCreators } from 'redux'
import * as NewsActionCreators from '../store/action-creators/news'

export const useActions = () => {
     const dispatch = useAppDispatch();
     return bindActionCreators(NewsActionCreators, dispatch)
}