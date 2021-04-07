<template>
  <div id="app-header">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/">
          <span style="color: #b2b5b8">
            <span id="brand">ES</span>E-Shop
          </span>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/about">About</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
#brand {
  background-color: rgb(196, 238, 8);
  color: black;
  border-radius: 5px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 4px;
}
a {
  color: #5c6268;
  margin: 4px;
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
.router-link-exact-active {
  color: #b2b5b8;
}
</style>
