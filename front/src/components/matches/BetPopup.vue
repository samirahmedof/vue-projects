<template>
  <b-modal id="bet-modal" hide-header-close centered>
    <template v-slot:modal-title>
      <img src="../../assets/img/icons/matches-popup-icon.svg" />
      Champions League
    </template>
    <div class="about-game">
      <b-row class="align-items-center">
        <b-col cols="4">
          <div class="left-content">
            <div class="time">
              <span>16:00</span>
            </div>
            <div class="teams">
              <ul>
                <li>Liverpool</li>
                <li class="selected-team">Juventus</li>
              </ul>
            </div>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="right-content">
            <ul>
              <li>Away</li>
              <li>Halftime</li>
              <li>2.5</li>
              <li>12.5%</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </div>
    <template v-slot:modal-footer>
      <b-row>
        <b-col cols="4">
          <button class="btn btn-pr max-button">Max</button>
        </b-col>
        <b-col cols="8">
          <div class="input-button">
            <a href="#" class="minus-btn" @click.prevent="currentBet--">-</a>
            <div class="input-text">
              $
              <input type="text" v-model="currentBet" />
            </div>
            <a href="#" class="plus-btn" @click.prevent="currentBet++">+</a>
          </div>
        </b-col>
        <b-col offset="4" cols="8">
          <ul>
            <li class="profit">
              Profit
              <span>$200</span>
            </li>
            <li class="max">
              Max
              <span>$8200</span>
            </li>
          </ul>
        </b-col>
        <b-col cols="4">
           <button class="btn btn-pr close-button" @click.prevent="hideModal">
            <img src="../../assets/img/icons/times.svg" />
          </button>
        </b-col>
        <b-col cols="8">
          <button class="btn btn-pr place-bet-button">
            Place Bet
            <img src="../../assets/img/icons/check.svg" />
          </button>
        </b-col>
      

       
      </b-row>
    </template>
  </b-modal>
</template>
<script>
export default {
  data() {
    return {
      currentBet: 100,
    };
  },
  methods: {
    hideModal() {
      this.$bvModal.hide("bet-modal");
    },
  },
};
</script>