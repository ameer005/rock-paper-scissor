const modalSlice = (set, get) => ({
  showGameOverModal: false,
  showToastModal: false,
  toastProperties: {
    type: "",
    message: "",
  },
  setModalState: (modal) => {
    set(modal);
  },
});

export default modalSlice;
