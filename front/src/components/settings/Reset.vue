<template>
  <div class="reset">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="settings-page__popup-heading" v-show="currentComponent!=cmps[5]">
          <span>RESET</span>
        </div>
      </b-col>
      <b-col cols="12">
        <component
          :is="currentComponent"
          @reset-button-clicked="resetButton($event)"
          @cancel-reset="currentComponent=cmps[0]"
        ></component>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import MainReset from "./MainReset";
import PotBalanceReset from "./PotBalanceReset";
import ResetSuccess from "./ResetSuccess";

export default {
  data() {
    return {
      cmps: [
        "MainReset",
        "PotBalanceReset",
        "MonthlyReset",
        "FreePotBalanceReset",
        "AllReset",
        "ResetSuccess",
      ],
      currentComponent: "MainReset",
    };
  },
  components: {
    MainReset,
    PotBalanceReset,
    ResetSuccess,
  },
  methods: {
    resetButton(e) {
      this.currentComponent = this.cmps[e];
    },
  },
};
</script>