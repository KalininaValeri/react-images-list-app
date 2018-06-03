import { init } from '@rematch/core';
import { items } from '../services/items';

const store = init({
    models: {
        items,
    }
});

export default store;