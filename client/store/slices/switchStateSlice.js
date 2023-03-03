const switchStateSlice = (set, get) => ({
  gameMode: null, // computer and pvp
  setOptions: (state) => {
    set(state);
  },
});

export default switchStateSlice;
