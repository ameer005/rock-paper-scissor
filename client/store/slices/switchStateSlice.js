const switchStateSlice = (set, get) => ({
  gameMode: null, // computer and pvp
  roomJoined: false,
  setOptions: (state) => {
    set(state);
  },
});

export default switchStateSlice;
