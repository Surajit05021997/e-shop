import getAllProducts from '@/service/appService';

export default {
  getAllImageDataAction(context) {
    const response = getAllProducts();
    response.then((resp) => {
      context.commit('getAllImageData', resp.data);
    })
      .catch((error) => {
        console.log(error);
      });
  },
};
