export const modalState = {
    state: null,
    reducers: {
        setModalState: (state, payload) => payload,
    },
    effects: {
      checkModalState(payload) {
          this.setModalState(payload);
      }
    }
};