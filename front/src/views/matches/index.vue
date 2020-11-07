<template>
  <div class="matches-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="8" class="p-0">
          <div class="tabs-heading">
            <ul>
              <li class="tabs-heading__item d-none d-md-block">
                <a href="#">Yesterday</a>
              </li>
              <li class="tabs-heading__item">
                <a href="#" class="active">Today</a>
              </li>
              <li class="tabs-heading__item">
                <a href="#">Tomorrow</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col cols="12" lg="8">
          <MatchFilters />
        </b-col>
        <b-col cols="12" lg="8">
          <div class="matches-list">
            <Leagues v-for="league in leagues" :key="league.id" :league="league" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <BetPopup />
  </div>
</template>
<script>
import Leagues from "../../components/matches/Leagues";
import MatchFilters from "../../components/matches/MatchFilters";
import BetPopup from "../../components/matches/BetPopup";

export default {
  data() {
    return {
      leagues: [
        {
          id: "1",
          name: "Champions League",
          icon: require("@/assets/img/icons/matches-popup-icon.svg"),
          matches: [
            {
              id: "1",
              status: {
                text: "end",
              },
              team1: {
                score: "2",
                name: "Barcelona",
              },
              team2: {
                score: "1",
                name: "AJAX",
              },
              home: {
                odds: "2.5",
                percentage: "42",
              },
              draw: {
                odds: "3.2",
                percentage: "12.5",
              },
              away: {
                odds: "2.9",
                percentage: "12.5",
              },
            },
            {
              id: "2",
              status: {
                text: "in-play",
                currentMinute: "35",
              },
              team1: {
                score: "1",
                name: "Real Madrid",
              },
              team2: {
                score: "0",
                name: "PSG",
              },
              home: {
                odds: "1.5",
                percentage: "25",
              },
              draw: {
                odds: "2.1",
                percentage: "11.5",
              },
              away: {
                odds: "1.7",
                percentage: "4.5",
              },
            },
            {
              id: "3",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "4",
              status: {
                text: "scheduled",
                start: "18:00",
              },
              team1: {
                name: "AC Milan",
              },
              team2: {
                name: "FC Utrecht",
              },
              home: {
                odds: "1.5",
                percentage: "25",
              },
              draw: {
                odds: "2.1",
                percentage: "11.5",
              },
              away: {
                odds: "1.7",
                percentage: "4.5",
              },
            },
          ],
        },
        {
          id: "2",
          icon: require("@/assets/img/icons/italian-league.svg"),
          name: "Italian League",
          matches: [
            {
              id: "1",
              status: {
                text: "in-play",
                currentMinute: "HT",
              },
              team1: {
                score: "2",
                name: "Barcelona",
              },
              team2: {
                score: "1",
                name: "AJAX",
              },
              home: {
                odds: "2.5",
                percentage: "42",
              },
              draw: {
                odds: "3.2",
                percentage: "12.5",
              },
              away: {
                odds: "2.9",
                percentage: "12.5",
              },
            },
            {
              id: "2",
              status: {
                text: "start-in",
                currentMinute: "35",
              },
              team1: {
                score: "1",
                name: "Real Madrid",
              },
              team2: {
                score: "0",
                name: "PSG",
              },
              home: {
                odds: "1.5",
                percentage: "25",
              },
              draw: {
                odds: "2.1",
                percentage: "11.5",
              },
              away: {
                odds: "1.7",
                percentage: "4.5",
              },
            },
            {
              id: "3",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "4",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "5",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "6",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "7",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
            {
              id: "8",
              status: {
                text: "scheduled",
                start: "16:00",
              },
              team1: {
                name: "Liverpool",
              },
              team2: {
                name: "Juventus",
              },
              home: {
                odds: "1.8",
                percentage: "1.5",
              },
              draw: {
                odds: "2.2",
                percentage: "45.5",
              },
              away: {
                odds: "1.9",
                percentage: "21",
              },
            },
          ],
        },
      ],
    };
  },
  components: {
    Leagues,
    BetPopup,
    MatchFilters,
  },
};
</script>