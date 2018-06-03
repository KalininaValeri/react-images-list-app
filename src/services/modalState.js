export const modalState = {
    state: true,
    reducers: {
        setModalState: (state, payload) => payload,
    },
    effects: {
      checkModalState(payload) {
          this.setModalState(payload);
      }
    }
};