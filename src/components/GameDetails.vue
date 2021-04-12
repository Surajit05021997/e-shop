<template>
  <div id="game-details">
    <div v-if="loading !== true">
      <b-container>
        <b-row>
          <b-col cols="4">
            <div id="image">
              <img :src="gameDetails.gameInfo.thumb" alt="Game Image">
            </div>
          </b-col>
          <b-col cols="8">
            <div id="details">
              <h2>{{gameDetails.gameInfo.name}}</h2>
              <h4>Sale Price: </h4>${{gameDetails.gameInfo.salePrice}}
              <h4>Retail Price: </h4>${{gameDetails.gameInfo.retailPrice}}
              <h4>In Cart: {{cartCount}}</h4><br>
              <b-button variant="success" @click="add(gameDetails.gameInfo)">Add</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div v-else>
      <div class="text-center">
        <b-spinner class="m-5" label="Spinning"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'GameDetails',
  data() {
    return {
      cartCount: 0,
      selectedGame: this.$route.params.selectedGame,
    };
  },
  created() {
    // this.resetData();
    console.log(this.$route.params.selectedGame);
    this.$store.state.loading = true;
    this.getGameDetailsAction(this.selectedGame.dealID);
    this.getCartCount();
  },
  computed: {
    ...mapState(['gameDetails', 'loading', 'cart']),
  },
  methods: {
    ...mapActions(['getGameDetailsAction', 'resetData', 'addToCart']),
    getCartCount() {
      console.log(this.cart);
      this.cart.forEach((data) => {
        if (this.selectedGame.gameID === data.game.gameID) {
          this.cartCount = data.quantity;
        }
      });
    },
    add(game) {
      this.addToCart(game);
      this.getCartCount();
    },
  },
};
</script>

<style scoped>
#game-details {
  min-height: 100%;
  padding-top: 56px;
  padding-bottom: 24px;
}
</style>
