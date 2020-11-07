<template>
  <footer class="footer d-lg-none d-md-block">
    <b-container>
      <b-row>
        <b-col>
          <div class="footer__main-menu">
            <ul>
              <li v-for="(item,index) in menu" :key="item.id">
                <a href="#" @click.prevent="clickedMenuItem(index)" v-if="!item.link">
                  <img :src="item.src" />
                  <span>{{item.text}}</span>
                </a>
                <router-link :to="item.link" active-class="active" exact v-else>
                  <img :src="item.src" />
                  <span>{{item.text}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          id: "1",
          src: require("@/assets/img/icons/home.svg"),
          text: "Home",
          link: "/",
        },
        {
          id: "2",
          src: require("@/assets/img/icons/matches.svg"),
          text: "Matches",
          link: "/matches",
        },
        {
          id: "3",
          src: require("@/assets/img/icons/profile.svg"),
          text: "Profile",

          link: "/profile",
        },
        {
          id: "4",
          src: require("@/assets/img/icons/education.svg"),
          text: "Education",
        },
        {
          id: "5",
          src: require("@/assets/img/icons/notification.svg"),
          text: "Notifications",

          link: "/notifications",
        },
      ],
    };
  },
  methods: {
    clickedMenuItem(e) {
      if (e === 0) {
        this.$bvModal.show("leaderboard-modal");
      }
      if (e === 1) {
        this.$bvModal.show("bet-modal");
      }
    },
  },
};
</script>
