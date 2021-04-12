import { getAllGames, getGameDetails } from '@/service/appService';

export default {
  resetData({ commit }) {
    commit('resetData');
  },
  getAllGamesAction({ commit, state }) {
    const response = getAllGames();
    response.then((resp) => {
      commit('setAllGames', resp.data);
      state.loading = false;
    })
      .catch((error) => {
        console.log(error);
        state.loading = false;
      });
  },
  getGameDetailsAction({ commit, state }, dealID) {
    const response = getGameDetails(dealID);
    response.then((resp) => {
      commit('setGameDetails', resp.data);
      state.loading = false;
    })
      .catch((error) => {
        console.log(error);
        state.loading = false;
      });
  },
  addToCart({ commit }, game) {
    commit('addToCart', game);
  },
};
