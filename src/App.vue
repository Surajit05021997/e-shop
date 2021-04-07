<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
