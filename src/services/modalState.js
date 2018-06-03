export const modalState = {
    state: false,
    reducers: {
        setModalState: (state, payload) => payload,
    },
    effects: {
      checkModalState(payload) {
          this.setModalState(payload);
      }
    }
};