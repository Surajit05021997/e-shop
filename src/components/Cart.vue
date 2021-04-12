<template>
  <div id="cart">
    <b-container>
      <b-row class="my-row" v-for="game in cart" :key=game.game.gameID>
        <b-col cols="2"><img :src="game.game.thumb" alt=""></b-col>
        <b-col cols="3">{{game.game.name}}</b-col>
        <b-col cols="2">Quantity: {{game.quantity}}</b-col>
        <b-col cols="3">
          Price: {{game.game.salePrice}}*{{game.quantity}} = {{game.game.salePrice * game.quantity}}
        </b-col>
        <b-col cols="2">
          <b-button variant="success" @click="addToCart(game.game)">Add</b-button>
        </b-col>
      </b-row>
      <h2>Total: ${{getTotalPrice}}</h2>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
    getTotalPrice() {
      let totalPrice = 0;
      this.cart.forEach((data) => {
        totalPrice += +data.game.salePrice * data.quantity;
      });
      return totalPrice;
    },
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>

<style scoped>
#cart {
  min-height: 100%;
  padding-top: 56px;
  padding-bottom: 24px;
}
.my-row {
  border: 2px solid black;
  border-radius: 5px;
  margin: 5px;
}
img {
  width: 100%;
  margin: 5px;
}
</style>
