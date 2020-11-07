<template>
  <div class="main-reset">
    <div class="reset__info">
      <ul>
        <li>
          <span>1 free</span> pot balance reset.
        </li>
        <li>
          <span>17 days left</span> for a free monthly all reset.
        </li>
      </ul>
    </div>
    <div class="reset__buttons">
      <div class="reset__heading">Tap box to RESET</div>
      <div class="form-group">
        <button
          class="settings-page__popup-button settings-page__popup-button--yellow"
          @click.prevent="resetClicked(1)"
        >free POT Balance RESET</button>
      </div>
      <div class="form-group">
        <button
          class="settings-page__popup-button settings-page__popup-button--disable"
          @click.prevent="resetClicked(2)"
        >free all monthly reset</button>
      </div>

      <div class="form-group">
        <div class="settings-page__popup-button reset__large-btn" @click.prevent="resetClicked(3)">
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
      </div>
      <div class="form-group">
        <div class="settings-page__popup-button reset__large-btn" @click.prevent="resetClicked(4)">
          <div class="left-text">
            <div class="reset__icon">
              <img src="../../assets/img/icons/reset-all.svg" />
            </div>
            <div class="reset__button-text">
              <h3>All RESET</h3>
              <p>This will reset your full account and all data will be erased ( Virtual balance, pot balance, betting history, efficiency )</p>
            </div>
          </div>
          <div class="reset__price">$5</div>
        </div>
      </div>
    </div>
    <div class="reset__footer">
      <span>
        <img src="../../assets/img/icons/info.svg" />
        Info
      </span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    resetClicked() {
      this.$emit("reset-button-clicked", 1);
    },
  },
};
</script>