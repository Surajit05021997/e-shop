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
  addToCart(state, game) {
    if (state.gameIDList.includes(game.gameID)) {
      state.cart.forEach((data, index) => {
        if (game.gameID === data.game.gameID) {
          state.cart[index].quantity += 1;
        }
      });
    } else {
      state.gameIDList.push(game.gameID);
      state.cart.push({
        game,
        quantity: 1,
      });
    }
  },
};
