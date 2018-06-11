export const filterByName = {
  state: '',
  reducers: {
    setFilterByName: (state, payload) => payload,
  },
  effects: {
    editFilterByName(payload) {
      this.setFilterByName(payload);
    }
  }
};