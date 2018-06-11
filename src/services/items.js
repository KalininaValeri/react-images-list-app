import {arrItems} from '../helpers/const';
export const items = {
  state: arrItems,
  reducers: {
      setNewItem: (state, payload) => [...state, payload],
      removeItem: (state, payload) => payload,
  },
  effects: {
      add(payload,rootState) {
          this.setNewItem(payload);
      },
      remove(payload, rootState) {
          const {items} = rootState;
          const newItems = items.filter(item => item.id !== payload);
          this.removeItem(newItems);
      }
  },
};