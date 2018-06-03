export const items = {
  state: 0,
  reducers: {
      setNewItem: (state, payload) => state
  },
  effects: {
      add(payload,rootState) {
          this.setNewItem();
      }
  },
};