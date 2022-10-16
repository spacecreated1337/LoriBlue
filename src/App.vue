<template>
  <my-navbar />
  <router-view />
  <user-info-button :userInfo="userInfo" />
</template>
<script>
import MyNavbar from "./components/UI/MyNavbar.vue";
import UserInfoButton from "@/components/UserInfoButton.vue";
export default {
  components: {
    MyNavbar,
    UserInfoButton,
  },
  mounted() {
    let tg = window.Telegram.WebApp;
    tg.expand();
    this.userInfo = tg.initDataUnsafe;
    tg.ThemeParams.bg_color;
    tg.ThemeParams.text_color;
    tg.ThemeParams.hint_color;
    tg.ThemeParams.link_color;
    tg.ThemeParams.button_color;
    tg.ThemeParams.button_text_colorString;
  },
  data() {
    return {
      userInfo: null,
    };
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
