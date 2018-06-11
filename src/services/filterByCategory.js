export const filterByCategory = {
  state: '',
  reducers: {
    setFilterByCategory: (state, payload) => payload,
  },
  effects: {
    editFilterByCategory(payload) {
      this.setFilterByCategory(payload);
    }
  }
};