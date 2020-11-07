<template>
  <div class="pot-balance-reset">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div
          class="settings-page__popup-button reset__large-btn settings-page__popup-button--green"
        >
          <div class="left-text">
            <div class="reset__icon">
              <img src="../../assets/img/icons/reset-pot.svg" />
            </div>
            <div class="reset__button-text">
              <h3>POT Balance RESET</h3>
              <p>This will reset your pot balance back to $0, it will not affect your virtual balance, or data.</p>
            </div>
          </div>
          <div class="reset__price">$5</div>
        </div>
      </b-col>
      <b-col cols="10" :class="{'pot-balance-reset__hide-col':acceptQuestion}">
        <div class="pot-balance-reset__text">
          <p>
            You have selected "Pot Balance Reset" and will be charged
            "
            <strong>$5</strong>" for this process
          </p>
        </div>
        <div class="pot-balance-reset__question">
          <h6>Are you sure you want to continue ?</h6>
          <ul>
            <li>
              <a href="#" class="pot-balance-reset__question--accept" @click.prevent="accept">
                <img src="../../assets/img/icons/check-white.svg" />
              </a>
            </li>
            <li>
              <a href="#" class="pot-balance-reset__question--cancel" @click.prevent="cancel">
                <img src="../../assets/img/icons/times-white.svg" />
              </a>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="form-group mt-4">
          <button
            class="settings-page__popup-button settings-page__popup-button--red"
            :class="{'settings-page__popup-button--disable':!acceptQuestion}"
            @click="acceptReset"
          >RESET</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      acceptQuestion: false,
    };
  },
  methods: {
    accept() {
      this.acceptQuestion = true;
    },
    cancel() {
      this.$emit("cancel-reset");
    },
    acceptReset() {
      this.$emit("reset-button-clicked", 5);
    },
  },
};
</script>