import { setLocalStorage, getDataLocalStorage } from '../helpers/handlerForLocalStorage';

const arrayItems = getDataLocalStorage();

export const items = {
  state: arrayItems,
  reducers: {
    setNewItem: (state, payload) => [...state, payload],
    editItem: (state, payload) => payload,
    removeItem: (state, payload) => payload,
  },
  effects: {
    add(payload, rootState) {
      this.setNewItem(payload);
      setLocalStorage();
    },
    edit(payload, rootState) {
      const {
        items,
      } = rootState;
      const editItems = items.map(item => item.id === payload.id ? payload : item);
      this.editItem(editItems);
      setLocalStorage();
    },
    remove(payload, rootState) {
      const {items} = rootState;
      const newItems = items.filter(item => item.id !== payload);
      this.removeItem(newItems);
      setLocalStorage();
    },
  },
};