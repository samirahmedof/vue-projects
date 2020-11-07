<template>
  <div class="notification-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="5" class="p-0">
          <div class="tabs-heading">
            <Tabs v-model="activeTab" :items="tabs" />
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="6" v-show="activeTab===0">
          <div class="notification-page__list">
            <MainList v-for="item in notifications" :key="item.id" :item="item" />
          </div>
        </b-col>
        <b-col cols="12" lg="5" v-show="activeTab===1">
          <div class="inbox">
            <Inbox v-for="item in inbox" :key="item.id" :item="item" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import MainList from "./../../components/notifications/MainList";
import Inbox from "./../../components/notifications/Inbox";
import Tabs from "../../components/tabs";
export default {
  data() {
    return {
      notifications: [
        {
          id: "1",
          day: "Today",
          list: [
            {
              id: "1",
              amount: "-200",
              team1: "Manchester City",
              team2: "Liver Poo",
              time: "Fulltime",
              palace: "Home",
            },
            {
              id: "2",
              amount: "-100",
              team1: "Juventus",
              team2: "AC Milan",
              time: "Halftime",
              palace: "Away",
            },
            {
              id: "3",
              amount: "300",
              team1: "Manchester United",
              team2: "Barcelona",
              time: "BTS",
              palace: "Yes",
            },
            {
              id: "4",
              amount: "200",
              team1: "Pepsi",
              team2: "Coca Cola",
              time: "Fulltime",
              palace: "Draw",
            },
            {
              id: "5",
              amount: "500",
              team1: "Socks",
              team2: "Silver Plates",
              time: "U2.5",
              palace: "-",
            },
            {
              id: "6",
              amount: "-100",
              team1: "Juventus",
              team2: "AC Milan",
              time: "Halftime",
              palace: "Home",
            },
          ],
        },
        {
          id: "2",
          day: "Yesterday",
          list: [
            {
              id: "2",
              amount: "-100",
              team1: "Juventus",
              team2: "AC Milan",
              time: "Halftime",
              palace: "Away",
            },
            {
              id: "3",
              amount: "300",
              team1: "Manchester United",
              team2: "Barcelona",
              time: "BTS",
              palace: "Yes",
            },
            {
              id: "4",
              amount: "200",
              team1: "Pepsi",
              team2: "Coca Cola",
              time: "Fulltime",
              palace: "Draw",
            },
            {
              id: "5",
              amount: "500",
              team1: "Socks",
              team2: "Silver Plates",
              time: "U2.5",
              palace: "-",
            },
            {
              id: "6",
              amount: "-100",
              team1: "Juventus",
              team2: "AC Milan",
              time: "Halftime",
              palace: "Home",
            },
          ],
        },
        {
          id: "3",
          day: "Jan 21",
          list: [
            {
              id: "4",
              amount: "200",
              team1: "Pepsi",
              team2: "Coca Cola",
              time: "Fulltime",
              palace: "Draw",
            },
            {
              id: "5",
              amount: "500",
              team1: "Socks",
              team2: "Silver Plates",
              time: "U2.5",
              palace: "-",
            },
            {
              id: "6",
              amount: "-100",
              team1: "Juventus",
              team2: "AC Milan",
              time: "Halftime",
              palace: "Home",
            },
          ],
        },
      ],
      inbox: [
        {
          id: "1",
          day: "Today",
          notifications: [
            {
              id: "1",
              head: "Welcome to DBInvest",
              date: "Feb, 02 5:32PM",
              text:
                "Your journey as a soccer investor starts here, we'd love for you to watch this video for a better understating of the concept and how to make your way through it all.",
              media: {
                type: "img",
                src: require("@/assets/img/matches-bg.png"),
              },
              readed: "false",
            },
            {
              id: "2",
              head: "Psychology",
              date: "Feb, 01 8:32AM",
              text:
                "There is a fine line between thinking out of emotions and thinking using the analytical mind. Psychology of the human mind when it comes to investing plays a big role check this section and understand more. ",

              button: {
                text: "LEARN MORE",
                type: "more",
              },
              readed: "true",
            },
          ],
        },
        {
          id: "2",
          day: "Yesterday",
          notifications: [
            {
              id: "1",
              head: "Great Work!",
              date: "Feb, 01 8:32AM",
              text:
                "You have made progress with your betting your VB is now looking good, you have earned +200. Keep it Up!",
              button: {
                text: "COLLECT  +200",
                type: "collect",
              },
              readed: "true",
            },
          ],
        },
      ],
      showableTab: 1,
      activeTab: 0,
      tabs: ["Won / Los", "Inbox"],
    };
  },
  components: {
    MainList,
    Inbox,
    Tabs
  },
};
</script>
