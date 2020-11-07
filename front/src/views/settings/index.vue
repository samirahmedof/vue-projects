<template>
  <div class="settings-page dark-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="10">
          <div class="dark-page__head">
            <div class="dark-page__icon">
              <img src="../../assets/img/icons/setting.svg" />
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
          <Tabs v-model="activeTab" :items="tabs" />
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="12" :md="md" :lg="lg">
          <div class="settings-page__account">
            <ul class="account-list">
              <Account
                v-for="(item,index) in accountList"
                :key="item.id"
                :index="index"
                :item="item"
                @clicked-item="itemClicked($event)"
              />
            </ul>
            <transition
              enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster"
            >
              <div class="settings-page__popups" v-show="currentComponent">
                <div class="settings-page__popup-close">
                  <a href="#" @click.prevent="currentComponent=null">
                    <img src="../../assets/img/icons/times-white.svg" />
                  </a>
                </div>
                <component :is="currentComponent"></component>
              </div>
            </transition>
          </div>
        </b-col>
        <b-col cols="12" lg="5" class="d-none">
          <div class="settings-page__notifications">
            <NotificationsSettings />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Account from "../../components/settings/Account";
import ProfileSettings from "../../components/settings/ProfileSettings";
import NotificationsSettings from "../../components/settings/NotificationsSettings";
import EmailPassword from "../../components/settings/EmailPassword";
import Currency from "../../components/settings/Currency";
import Reset from "../../components/settings/Reset";
import Subscription from "../../components/settings/Subscription";
import Tabs from "../../components/tabs";
import FormSwitch from "../../components/forms/switch";

export default {
  components: {
    Account,
    ProfileSettings,
    NotificationsSettings,
    EmailPassword,
    Currency,
    Reset,
    Subscription,
    Tabs,
    FormSwitch,
  },
  data() {
    return {
      activeTab: 0,
      tabs: ["Account", "Notifications"],
      accountList: [
        {
          id: "1",
          text: "Profile Settings",
        },
        {
          id: "2",
          text: "Email / Password",
        },
        {
          id: "3",
          text: "Currency",
        },
        {
          id: "4",
          text: "Subscription",
        },
        {
          id: "5",
          text: "Payment",
        },
        {
          id: "6",
          text: "Reset Account",
        },
        {
          id: "7",
          text: "Delete  Account",
        },
      ],
      cmps: [
        "ProfileSettings",
        "EmailPassword",
        "Currency",
        "Subscription",
        "",
        "Reset",
        "",
      ],
      notifications: {
        push: false,
        email: false,
      },
      currentComponent: null,
      md: 7,
      lg: 5,
    };
  },
  methods: {
    itemClicked(e) {
      if (e == 3) {
        this.md = 12;
        this.lg = 10;
      } else {
        this.md = 7;
        this.lg = 5;
      }
      this.currentComponent = this.cmps[e];
    },
  },
};
</script>
