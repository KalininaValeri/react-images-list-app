import { init } from '@rematch/core';
import { items } from '../services/items';
import { modalState } from '../services/modalState';
import { filterByName } from '../services/filterByName';
import { filterByCategory } from '../services/filterByCategory';

const store = init({
  models: {
    items,
    modalState,
    filterByName,
    filterByCategory,
  },
});

export default store;