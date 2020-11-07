<template>
  <div class="user-card">
    <b-row>
      <b-col cols="4" lg="12" class="d-flex align-items-center justify-content-center">
        <div class="user-card__about">
          <div class="user-card__title">
            <p>Joseph M</p>
            <router-link to="/settings" class="d-none d-lg-inline">
              <img src="../../assets/img/icons/setting.svg" alt="set" />
            </router-link>
          </div>
          <div class="user-card__img">
            <img src="../../assets/img/user.png" />
            <span>
              <img src="@/assets/img/avatar.svg" alt />
            </span>
          </div>
        </div>
      </b-col>
      <b-col cols="8" lg="12">
        <div class="user-card__state">
          <div class="text-center">
            <p>Won</p>
            <p>88</p>
          </div>
          <div class="text-center">
            <p>Lost</p>
            <p>142</p>
          </div>
          <div class="text-center">
            <p>In-Play</p>
            <p>2</p>
          </div>
        </div>
        <div class="user-card__edit d-block d-lg-none">
          <button class="settings-page__popup-button">Edit Profile</button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "UserCard",
};
</script>
