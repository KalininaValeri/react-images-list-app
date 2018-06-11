import store from '../shared/create-store';
import { arrItems } from '../helpers/const';


export const setLocalStorage = () => {
  const {
    items,
  } = store.getState();
  localStorage.clear();
  localStorage.setItem('dataImagesReactApp', JSON.stringify(items));
};

export const getDataLocalStorage = () => {
  const data = localStorage.getItem('dataImagesReactApp');
  return data ? JSON.parse(data) : arrItems;
};