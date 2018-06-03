import { init } from '@rematch/core';
import { items } from '../services/items';
import { modalState } from '../services/modalState';

const store = init({
    models: {
        items,
        modalState,
    }
});

export default store;