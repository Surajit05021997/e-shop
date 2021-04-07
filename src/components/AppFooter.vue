<template>
  <div id="app-footer">
    <footer>
      <div >© 2021 Copyright:
        <a href="https://e-shop.com/">E-Shop.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
#app-footer {
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(52, 58, 64);
  margin-top: -24px;
}
a {
  color: rgb(255, 255, 255);
}
a:hover {
  color: #b2b5b8;
  text-decoration: none;
}
</style>
