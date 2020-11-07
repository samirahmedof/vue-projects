<template>
  <div class="filters">
    <div class="btn-group w-100" role="group">
      <GroupButton
        v-for="(btn,index) in groupBtns"
        :key="btn.id"
        :btn="btn"
        :active-btn="activeBtn"
        :index="index"
        @clicked-btn="btnClicked($event)"
      />
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div class="filter-popup" v-show="showFilter">
        <b-row class="justify-content-center">
          <b-col lg="5" md="7">
            <div class="filter-popup__list">
              <div class="filter-popup__close-icon">
                <a href="#" @click.prevent="closeFilter">
                  <img src="../../assets/img/icons/times-white.svg" />
                </a>
              </div>
              <ul>
                <FilterItem
                  v-for="(item,index) in filterItems"
                  :key="item.id"
                  :item="item"
                  :index="index"
                  :active-index="activeIndex"
                  @change-active-item="changeIndex($event)"
                />
              </ul>
            </div>
          </b-col>
        </b-row>
      </div>
    </transition>
  </div>
</template>
<script>
import FilterItem from "./FilterItem";
import GroupButton from "./GroupButton";
export default {
  data() {
    return {
      market: [
        {
          id: "1",
          text: "FULLTIME",
        },
        {
          id: "2",
          text: "Halftime",
        },
        {
          id: "3",
          text: "Double Chance FT",
        },
        {
          id: "4",
          text: "Double Chance HT",
        },
        {
          id: "5",
          text: "Both Teams to Score",
        },
        {
          id: "6",
          text: "Draw No Bet",
        },
        {
          id: "7",
          text: "FT Over / Under",
          sub: [
            {
              id: "1",
              text: "test 1",
            },
            {
              id: "2",
              text: "test 2",
            },
            {
              id: "3",
              text: "test 3",
            },
          ],
        },
        {
          id: "8",
          text: "FH Over / Under",
          sub: [
            {
              id: "1",
              text: "test 1",
            },
            {
              id: "2",
              text: "test 2",
            },
            {
              id: "3",
              text: "test 3",
            },
          ],
        },
        {
          id: "9",
          text: "SH Over / Under",
          sub: [
            {
              id: "1",
              text: "test 1",
            },
            {
              id: "2",
              text: "test 2",
            },
            {
              id: "3",
              text: "test 3",
            },
          ],
        },
      ],
      league: [
        {
          id: "1",
          text: "ALL",
        },
        {
          id: "2",
          text: "Champions League",
        },
        {
          id: "3",
          text: "Premiere League",
        },
        {
          id: "4",
          text: "Serie A",
        },
        {
          id: "5",
          text: "France League 1",
        },
        {
          id: "6",
          text: "UEFA",
        },
        {
          id: "7",
          text: "World Cup",
        },
        {
          id: "8",
          text: "MLS",
        },
        {
          id: "9",
          text: "Danish Super League",
        },
        {
          id: "10",
          text: "Premiere League",
        },
        {
          id: "11",
          text: "Serie A",
        },
        {
          id: "12",
          text: "France League 1",
        },
        {
          id: "13",
          text: "UEFA",
        },
        {
          id: "14",
          text: "World Cup",
        },
        {
          id: "15",
          text: "MLS",
        },
        {
          id: "16",
          text: "Danish Super League",
        },
        {
          id: "17",
          text: "Champions League",
        },
        {
          id: "18",
          text: "Premiere League",
        },
        {
          id: "19",
          text: "Serie A",
        },
        {
          id: "20",
          text: "France League 1",
        },
        {
          id: "21",
          text: "UEFA",
        },
      ],
      cluster: [
        {
          id: "0",
          text: "ALL",
        },
        {
          id: "1",
          text: "0% - 5%",
        },
        {
          id: "2",
          text: "5% - 10%",
        },
        {
          id: "3",
          text: "10% - 15%",
        },
        {
          id: "4",
          text: "15% - 20%",
        },
        {
          id: "5",
          text: "20% - 25%",
        },
        {
          id: "6",
          text: "35% - 40%",
        },
        {
          id: "7",
          text: "40% - 45%",
        },
        {
          id: "8",
          text: "45% - 50%",
        },
        {
          id: "9",
          text: "50% - 55%",
        },
        {
          id: "10",
          text: "55% - 60%",
        },
        {
          id: "11",
          text: "60% - 65%",
        },
        {
          id: "12",
          text: "65% - 70%",
        },
        {
          id: "13",
          text: "70% - 75%",
        },
        {
          id: "14",
          text: "75% - 80%",
        },
        {
          id: "15",
          text: "80% - 85%",
        },
        {
          id: "16",
          text: "85% - 90%",
        },
        {
          id: "17",
          text: "90% - 95%",
        },
        {
          id: "18",
          text: "95% - 100%",
        },
      ],
      filterItems: [],
      activeIndexMarket: 0,
      activeIndexLeague: 0,
      activeIndexCluster: 0,
      activeIndex: 0,
      showFilter: false,
      activeBtn: 0,
      groupBtns: [
        {
          id: "1",
          text: "Market",
        },
        {
          id: "2",
          text: "League",
        },
        {
          id: "3",
          text: "Cluster",
        },
      ],
    };
  },
  components: {
    FilterItem,
    GroupButton,
  },
  methods: {
    closeFilter() {
      this.showFilter = false;
      this.activeBtn = 0;
    },
    changeIndex(e) {
      this.activeIndex = e;
      if (this.activeBtn === 1) {
        this.activeIndexMarket = e;
      }
      if (this.activeBtn === 2) {
        this.activeIndexLeague = e;
      }
      if (this.activeBtn === 3) {
        this.activeIndexCluster = e;
      }
    },
    btnClicked(e) {
      this.showFilter = true;
      this.activeBtn = e;
      if (e === 1) {
        this.filterItems = this.market;
        this.activeIndex = this.activeIndexMarket;
      } else if (e === 2) {
        this.filterItems = this.league;
        this.activeIndex = this.activeIndexLeague;
      } else if (e === 3) {
        this.filterItems = this.cluster;
        this.activeIndex = this.activeIndexCluster;
      }
    },
  },
};
</script>