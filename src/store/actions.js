import getAllGames from '@/service/appService';

export default {
  getAllGamesAction(context) {
    const response = getAllGames();
    response.then((resp) => {
      context.commit('getAllGames', resp.data);
    })
      .catch((error) => {
        console.log(error);
      });
  },
};
