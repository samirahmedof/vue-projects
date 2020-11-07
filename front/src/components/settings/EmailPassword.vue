<template>
  <div class="email-password">
    <b-row class="justify-content-center">
      <b-col cols="12">
        <div class="settings-page__popup-heading">
          <span>Email / Password</span>
        </div>
      </b-col>
      <b-col cols="12" md="10">
        <div class="email-password__form">
          <div class="form-group">
            <label>Email</label>
            <div class="profile-settings__input-box">
              <input type="text" class="settings-page__popup-input" v-model="useremail" />
              <a href="#">
                <img src="../../assets/img/icons/pen-white.svg" />
              </a>
            </div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="password"
              class="email-password__input"
              placeholder="Old Password"
              v-model="oldPass"
            />
            <input
              type="password"
              class="email-password__input"
              placeholder="New Password"
              v-model="newPass"
            />
            <input
              type="password"
              class="email-password__input"
              placeholder="Repeat New Password"
              v-model="repeatPass"
            />
          </div>
          <div class="form-group">
            <button
              class="settings-page__popup-button"
              :class="{'settings-page__popup-button--disable':oldPass==null||newPass==null||repeatPass==null}"
            >Change Password</button>
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
      useremail: "johnd1234567@gmail.com",
      oldPass: null,
      newPass: null,
      repeatPass: null,
    };
  },
};
</script>