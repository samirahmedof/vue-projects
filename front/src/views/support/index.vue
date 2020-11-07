<template>
  <div class="support-page dark-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="10">
          <div class="dark-page__head">
            <div class="dark-page__icon">
              <img src="../../assets/img/icons/support-page.svg" />
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
        <b-col cols="12" lg="5">
          <Tabs v-model="activeIndex" :items="tabs" />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" md="6" lg="5" v-show="activeIndex===0">
          <div class="support-page__contact">
            <Contact />
          </div>
        </b-col>
        <b-col cols="12" md="7" lg="6" v-show="activeIndex===1">
          <div class="support-page__chat">
            <Chat />
          </div>
        </b-col>
        <b-col cols="12" md="7" lg="6" v-show="activeIndex===2">
          <div class="support-page__faq">
            <FAQ />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import FAQ from "../../components/support/FAQ";
import Contact from "../../components/support/Contact";
import Chat from "../../components/support/Chat";

import Tabs from "../../components/tabs";

export default {
  data() {
    return {
      tabs: ["Contact", "Chat", "FAQ"],
      activeIndex: 0,
    };
  },
  components: {
    FAQ,
    Contact,
    Tabs,
    Chat,
  },
  methods: {
    changeTab(e) {
      this.activeIndex = e;
    },
  },
};
</script>
