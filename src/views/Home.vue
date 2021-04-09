"<template>
  <div id="home">
    <b-container>
      <b-row>
        <b-col>
          <div v-if="getFirst10Games !== []">
            <div class="card" v-for="product in getFirst10Games" :key="product.dealID">
              <img :src="product.thumb" alt="Avatar" style="width:100%">
              <div class="container">
                <h6><b>{{product.title}}</b></h6>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {

    };
  },
  created() {
    this.getAllGamesAction();
  },
  computed: {
    ...mapState(['allGames']),
    getFirst10Games() {
      const first10Games = [];
      if (this.allGames.length !== 0) {
        for (let i = 0; i < 10; i += 1) {
          first10Games.push(this.allGames[i]);
        }
      }
      return first10Games;
    },
  },
  methods: {
    ...mapActions(['getAllGamesAction']),
  },
};
</script>

<style scoped>
#home {
  min-height: 100%;
  padding-top: 56px;
  padding-bottom: 24px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  width: 20%;
  padding: 10px;
  margin: 20px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,1.0);
}
</style>
