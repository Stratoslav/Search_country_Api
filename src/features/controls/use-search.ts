import { useAppDispatch } from './../../store';
import { ChangeEventHandler } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { selectSearch } from './controls-selector';
import {setSearch } from './controls-slice';

type onSearch = ChangeEventHandler<HTMLInputElement> 
export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
