<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <tr v-show="index<showable" class="match-row">
      <td v-if="match.status.text==='scheduled'">
        <div class="match-row__start">{{match.status.start}}</div>
      </td>
      <td v-else-if="match.status.text==='in-play'">
        <div class="match-row__secondary-status">In-Play</div>
        <div class="match-row__current-minute">{{match.status.currentMinute}}'</div>
      </td>
      <td v-else-if="match.status.text==='start-in'">
        <div class="match-row__secondary-status">Start in</div>
        <div class="match-row__start-in-minute">{{match.status.currentMinute}}'</div>
      </td>
      <td v-else>
        <div class="match-row__status">{{match.status.text}}</div>
      </td>

      <td>
        <div class="match-row__teams">
          <div>
            <span
              v-if="match.status.text==='in-play'||match.status.text==='end'"
            >{{match.team1.score}}</span>
            {{match.team1.name}}
          </div>
          <div>
            <span
              v-if="match.status.text==='in-play'||match.status.text==='end'"
            >{{match.team2.score}}</span>
            {{match.team2.name}}
          </div>
        </div>
      </td>
      <td>
        <div>
          <a href="#">
            <img src="../../assets/img/icons/chart.svg" />
          </a>
        </div>
      </td>
      <td class="match-bet">
        <a
          href="#"
          class="match-bet__box match-bet__box--home"
          :class="{'disabled':isDisabled}"
          v-b-modal.bet-modal
        >
          <div class="odds">{{match.home.odds}}</div>
          <div class="percentage">{{match.home.percentage}}%</div>
        </a>
      </td>
      <td class="match-bet">
        <a
          href="#"
          class="match-bet__box match-bet__box--draw"
          :class="{'disabled':isDisabled}"
          v-b-modal.bet-modal
        >
          <div class="odds">{{match.draw.odds}}</div>
          <div class="percentage">{{match.draw.percentage}}%</div>
        </a>
      </td>
      <td class="match-bet">
        <a
          href="#"
          class="match-bet__box match-bet__box--away"
          :class="{'disabled':isDisabled}"
          v-b-modal.bet-modal
        >
          <div class="odds">{{match.away.odds}}</div>
          <div class="percentage">{{match.away.percentage}}%</div>
        </a>
      </td>
    </tr>
  </transition>
</template>
<script>
export default {
   props: {
    match: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    showable: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isDisabled() {
      if (
        this.match.status.text === "in-play" ||
        this.match.status.text === "end"
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>