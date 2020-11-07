<template>
  <div id="app" :class="{'dark-bg':$store.state.darkBg}">
    <Header />
    <router-view></router-view>
    <Footer />
    <QuizPopup />
  </div>
</template>
<script>
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import QuizPopup from "./components/quiz/Popup";

export default {
  data() {
    return {
      darkBg: true,
    };
  },
  components: {
    Header,
    Footer,
    QuizPopup
  },
};
</script>

<style lang="scss">
@import "assets/styles/main";
</style>
