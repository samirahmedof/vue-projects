<template>
  <div class="subscription">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="settings-page__popup-heading">
          <span>Subscription</span>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="subscription__popup">
          <SubscriptionAbout />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import SubscriptionAbout from "./SubscriptionAbout";
export default {
  components: {
    SubscriptionAbout,
  },
};
</script>