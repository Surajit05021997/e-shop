export default {
  resetData(state) {
    state.loading = true;
    state.allGames = [];
    state.gameDetails = {};
  },
  setAllGames(state, allGames) {
    state.allGames = allGames;
  },
  setGameDetails(state, gameDetails) {
    state.gameDetails = gameDetails;
  },
};
