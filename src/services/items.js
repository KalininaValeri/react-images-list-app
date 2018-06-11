import { arrItems } from '../helpers/const';

export const items = {
  state: arrItems,
  reducers: {
    setNewItem: (state, payload) => [...state, payload],
    editItem: (state, payload) => payload,
    removeItem: (state, payload) => payload,
  },
  effects: {
    add(payload, rootState) {
      this.setNewItem(payload);
    },
    edit(payload, rootState) {
      const {
        items,
      } = rootState;
      const editItems = items.map(item => item.id === payload.id ? payload : item);
      this.editItem(editItems);
    },
    remove(payload, rootState) {
      const {items} = rootState;
      const newItems = items.filter(item => item.id !== payload);
      this.removeItem(newItems);
    },
  },
};