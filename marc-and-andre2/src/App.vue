<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Main,
  },
};
</script>

<style lang="scss">
</style>
