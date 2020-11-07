<template>
  <div class="profile-page">
    <div class="container">
      <b-row class="mt-4 align-items-center mb-5">
        <b-col cols="4" lg="3" offset-lg="1" class="pr-0">
          <state-list />
        </b-col>
        <b-col cols="8" lg="4">
          <user-card />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="5">
          <Tabs v-model="activeIndex" :items="tabs" />
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg='11' v-show="activeIndex==0">
          <div class="about-page__contact">
            <TableBets @show-calendar='showCalendar'/>
          </div>
        </b-col>
        <b-col cols="12" lg="8" md="7" v-show="activeIndex==1">
          <div class="about-page__chat">
            <TableEfficiency />
          </div>
        </b-col>
      </b-row>
      <!-- <table-matches @show-calendar="showCalendar" /> -->
      <Calendar :show="calendar" @hide-calendar="hide" />
    </div>
  </div>
</template>

<script>
import Tabs from "../../components/tabs";
import StateList from "../../components/profile/StateList";
import UserCard from "../../components/profile/UserCard";
import Calendar from "../../components/profile/Calendar";

import TableBets from "../../components/profile/TableBets";
import TableEfficiency from "../../components/profile/TableEfficiency";
export default {
  name: "ProfilePage",
  data() {
    return {
      calendar: false,
      tabs: ["My Bets", "My Efficiency"],
      activeIndex: 0,
    };
  },
  components: {
    UserCard,
    StateList,
    Calendar,
    Tabs,
    TableBets,
    TableEfficiency,
  },
  methods: {
    showCalendar() {
      this.calendar = true;
    },
    hide() {
      this.calendar = false;
    },
    changeTab(e) {
      this.activeIndex = e;
    },
  },
};
</script>