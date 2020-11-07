<template>
  <div class="profile-settings">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="settings-page__popup-heading">
          <span>Profile Settings</span>
        </div>
      </b-col>
      <b-col cols="12" md="8">
        <div class="profile-settings__photo-container text-center">
          <img src="../../assets/img/user.png" />
        </div>
        <div class="profile-settings__edit text-center">
          <a href="#">
            <img src="../../assets/img/icons/pen-black.svg" alt />
          </a>
        </div>
        <div class="profile-settings__name">
          <div class="form-group">
            <label>Name to be shown</label>
            <div class="profile-settings__input-box">
              <input type="text" class="settings-page__popup-input" v-model="username" />
              <a href="#">
                <img src="../../assets/img/icons/pen-white.svg" />
              </a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "johnd1234567",
    };
  },
};
</script>