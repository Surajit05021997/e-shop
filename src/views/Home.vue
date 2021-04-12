"<template>
  <div id="home">
    <div v-if="loading !== true">
      <b-container>
        <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4" align-h="center">
          <b-col class="my-col" v-for="game in getFirst10Games" :key="game.dealID">
            <router-link :to="{name: 'GameDetails', params: {selectedGame: game}}">
              <div class="card">
                <img :src="game.thumb" alt="Avatar" style="width:100%">
                <div>
                  <h6><b>{{game.title}}</b></h6>
                </div>
              </div>
            </router-link>
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
  name: 'Home',
  components: {

  },
  data() {
    return {

    };
  },
  created() {
    this.resetData();
    this.getAllGamesAction();
  },
  computed: {
    ...mapState(['allGames', 'loading']),
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
    ...mapActions(['getAllGamesAction', 'resetData']),
  },
};
</script>

<style scoped>
#home {
  min-height: 100%;
  padding-top: 56px;
  padding-bottom: 24px;
}
.my-col {
  padding-top: 10px;
  padding-bottom: 10px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  width: 80%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,1.0);
}
</style>
