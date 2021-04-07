<template>
  <div id="home">
    <h1>This is home page</h1>
    <p>{{allImageData}}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {

  },
  created() {
    this.getAllImageDataAction();
  },
  computed: {
    ...mapState(['allImageData']),
  },
  methods: {
    ...mapActions(['getAllImageDataAction']),
  },
};
</script>

<style scoped>
#home {
  min-height: 100%;
  padding-top: 56px;
  padding-bottom: 24px;
}
</style>
