<template>
  <div id="cart">
    <div v-if="cart.length !== 0">
      <b-container>
        <b-row class="my-row text-center"  v-for="game in cart" :key=game.game.gameID>
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
    <div class="empty-cart" v-else>
      <h2>Nothing in cart</h2>
    </div>
    <div class="my-modal">
        <div class="checkout-btn">
          <b-button v-show="disable" v-b-modal="'chk-mdl'" variant="success"  @click="clearCart()">
            Checkout
          </b-button>
        </div>
        <b-modal id="chk-mdl" title="Successful" no-close-on-backdrop hide-footer>
        <p class="my-4">Order successfully placed :)</p>
        </b-modal>
      </div>
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
    disable() {
      if (this.cart.length === 0) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(['addToCart', 'clearCart']),
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
.checkout-btn, .empty-cart {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
