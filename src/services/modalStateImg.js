export const modalStateImg = {
  state: null,
  reducers: {
    setModalImgState: (state, payload) => payload,
  },
  effects: {
    checkModalImgState(payload) {
      this.setModalImgState(payload);
    }
  }
};