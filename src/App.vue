<template>
  <my-navbar />
  <router-view />
  <user-info-button />
</template>
<script>
import MyNavbar from "./components/UI/MyNavbar.vue";
import UserInfoButton from "@/components/UserInfoButton.vue";
export default {
  components: {
    MyNavbar,
    UserInfoButton,
  },
  created() {
    let tg = window.Telegram.WebApp;
    console.log(tg);
    tg.initDataUnsafe;
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  background: #ffffff;
}
</style>
