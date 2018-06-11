import { init } from '@rematch/core';
import { items } from '../services/items';
import { modalState } from '../services/modalState';
import { filterByName } from '../services/filterByName';

const store = init({
  models: {
    items,
    modalState,
    filterByName,
  },
});

export default store;