<template>
  <div class="currency">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="settings-page__popup-heading">
          <span>Currency</span>
        </div>
      </b-col>
      <b-col cols="10">
        <div class="currency__text">
          <p>This function changes the currency symbol only. All numbers stay the same regardless of currency status. $ is equal to euros.</p>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="currency__buttons">
          <button
            class="settings-page__popup-button settings-page__popup-button--green"
          >US DOLLARS $</button>
          <button class="settings-page__popup-button">EUROS</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      useremail: "johnd1234567@gmail.com",
      oldPass: null,
      newPass: null,
      repeatPass: null,
    };
  },
};
</script>