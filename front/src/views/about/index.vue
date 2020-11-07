<template>
  <div class="about-page dark-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="10">
          <div class="dark-page__head">
            <div class="dark-page__icon">
              <img src="../../assets/img/icons/info.svg" />
            </div>
            <div class="dark-page__back">
              <a href="#" @click.prevent="$router.go(-1)">
                <img src="../../assets/img/icons/arrow-left.svg" />
                <span class="d-none d-md-block">Back</span>
              </a>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="12" lg="6">
          <Tabs v-model="activeIndex" :items="tabs" />
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="12" lg="7" md="6" v-show="activeIndex==0">
          <div class="about-page__contact">
            <About />
          </div>
        </b-col>
        <b-col cols="12" lg="8" md="7" v-show="activeIndex==1">
          <div class="about-page__chat">
            <Terms />
          </div>
        </b-col>
        <b-col cols="12" lg="7" md="6" v-show="activeIndex==2">
          <div class="about-page__faq"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Tabs from "../../components/tabs";
import About from "../../components/about/About";
import Terms from "../../components/about/Terms";

export default {
  data() {
    return {
      tabs: ["About", "Terms of use", "Feedback"],
      activeIndex: 0,
    };
  },
  components: {
    Tabs,
    About,
    Terms,
  },
  methods: {
    changeTab(e) {
      this.activeIndex = e;
    },
  },
};
</script>
