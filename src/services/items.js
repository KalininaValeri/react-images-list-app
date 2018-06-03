export const items = {
  state: [],
  reducers: {
      setNewItem: (state, payload) => [...state, payload],
  },
  effects: {
      add(payload,rootState) {
          this.setNewItem(payload);
      }
  },
};