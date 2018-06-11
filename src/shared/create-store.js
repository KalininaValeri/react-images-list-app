import { init } from '@rematch/core';
import { items } from '../services/items';
import { modalState } from '../services/modalState';
import { modalStateImg } from '../services/modalStateImg';
import { filterByName } from '../services/filterByName';
import { filterByCategory } from '../services/filterByCategory';

const store = init({
  models: {
    items,
    modalState,
    filterByName,
    filterByCategory,
    modalStateImg,
  },
});

export default store;