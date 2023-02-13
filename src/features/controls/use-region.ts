import { useAppDispatch } from './../../store';
import { Regions } from './../../types/regions';
import { CountryOptions } from './CustomSelect';
import {useSelector, useDispatch} from 'react-redux'
import { selectRegion } from './controls-selector';

import { setRegion } from './controls-slice';
import { ActionMeta, SingleValue } from 'react-select';

type onSelect = (reg: SingleValue< CountryOptions>) => void;
export const useRegion = (): [Regions | "", onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg: SingleValue< CountryOptions>) => {
    if (reg) {
       dispatch(setRegion(reg.value))
    }
     else {
       dispatch(setRegion(''))  
    }
   
  }

  return [region, handleSelect];
}
