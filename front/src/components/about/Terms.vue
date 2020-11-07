<template>
  <div class="terms">
    <div class="form-group">
      <button class="settings-page__popup-button" @click="componentId=cmps[0]">Terms & Conditions</button>
    </div>
    <div class="form-group">
      <button class="settings-page__popup-button" @click="componentId=cmps[1]">Payment Info Policy</button>
    </div>
    <div class="settings-page__popups" v-if="componentId">
      <div class="settings-page__popup-close">
        <a href="#" @click.prevent="componentId=null">
          <img src="/img/times-white.6f802065.svg" />
        </a>
      </div>
      <div class="terms__popup">
        <component :is="componentId" @slide-popup="cahngePopup"></component>
      </div>
    </div>
  </div>
</template>
<script>
import TermsPopup from "./TermsPopup";
import Privacy from "./Privacy";

export default {
  data() {
    return {
      componentId: null,
      cmps: ["TermsPopup", "Privacy"],
    };
  },
  components: {
    TermsPopup,
    Privacy,
  },
  methods: {
    cahngePopup() {
      if (this.componentId === this.cmps[0]) {
        this.componentId = this.cmps[1];
      } else {
        this.componentId = this.cmps[0];
      }
    },
  },
};
</script>