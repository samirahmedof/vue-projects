<template>
  <div class="right-menu" :class="{'open-menu':menuOpen}">
    <div class="right-menu__balance-and-photo">
      <div class="right-menu__balance-area">
        <h4 class="virtual-balance">
          <img src="../../../assets/img/icons/arrow-down.svg" />

          <span>$12,225</span>
        </h4>
        <h4 class="pot-balance">
          POT BALANCE
          <span>$235</span>
        </h4>
      </div>
      <div class="right-menu__photo-area" @click="toggleRightMenu">
        <img src="../../../assets/img/profilephoto.png" />
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div class="right-menu-popup" v-show="menuOpen" v-click-outside="hide">
        <div class="right-menu-popup__info-area">
          <ul>
            <li>
              <b-row>
                <b-col cols="6" class="pl-0">
                  <span>R.O.I</span>
                </b-col>
                <b-col cols="6" class="pr-0">
                  <span>194.32%</span>
                </b-col>
              </b-row>
            </li>
            <li>
              <b-row>
                <b-col cols="6" class="pl-0">
                  <span>Started</span>
                </b-col>
                <b-col cols="6" class="pr-0">
                  <span>$10,000</span>
                </b-col>
              </b-row>
            </li>
            <li>
              <b-row>
                <b-col cols="6" class="pl-0">
                  <span>Invested</span>
                </b-col>
                <b-col cols="6" class="pr-0">
                  <span>$1,145</span>
                </b-col>
              </b-row>
            </li>
            <li>
              <b-row>
                <b-col cols="6" class="pl-0">
                  <span>Net Profit</span>
                </b-col>
                <b-col cols="6" class="pr-0">
                  <span>$2,225</span>
                </b-col>
              </b-row>
            </li>
          </ul>
        </div>
        <div class="right-menu-popup__level-area">
          <radial-progress-bar
            :diameter="percentageDiameter"
            :completed-steps="completedSteps"
            :total-steps="totalSteps"
            :strokeWidth="strokeWidth"
            :inner-stroke-width="innerStrokeWidth"
            :is-clockwise="isClockwise"
            :inner-stroke-color="innerStrokeColor"
            :stop-color="stopColor"
            :start-color="startColor"
          >
            <div
              class="right-menu-popup__level-text right-menu-popup__level-text--intermediate"
            >intermediate</div>
            <div class="svg-icon">
              <img src="../../../assets/img/icons/intermediate.svg" />
            </div>
            <svg
              width="150"
              height="150"
              viewBox="0 0 119 106"
              :transform="`rotate(${rotateSvg})`"
              class="right-menu-popup__percentage"
            >
              <text x="50" y="1%" fill="white" :transform="rotate">{{completedSteps}}%</text>
            </svg>
          </radial-progress-bar>
        </div>
        <div class="right-menu-popup__buttons-area">
          <ul>
            <li>
              <button class="right-menu-popup__btn right-menu-popup__btn--disable">Take Quiz</button>
            </li>
            <li>
              <button class="right-menu-popup__btn right-menu-popup__btn--disable">Challenges</button>
            </li>
            <li>
              <button class="right-menu-popup__btn" @click="completedSteps++">Logout</button>
            </li>
            <li>
              <button class="right-menu-popup__btn" v-b-modal.quiz-popup>RESET</button>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import RadialProgressBar from "vue-radial-progress";
export default {
  data() {
    return {
      menuOpen: false,
      completedSteps: 0,
      totalSteps: 100,
      strokeWidth: 2,
      innerStrokeWidth: 2,
      isClockwise: false,
      innerStrokeColor: "transparent",
      stopColor: "#5a00ff",
      startColor: "#5a00ff",
      percentageDiameter: 150,
    };
  },
  methods: {
    toggleRightMenu() {
      this.menuOpen = !this.menuOpen;
    },
    hide() {
      this.menuOpen = false;
    },
  },
  computed: {
    translateSvg() {
      return `translate(${this.percentagePosition[0]}%, ${this.percentagePosition[1]}%)`;
    },
    rotate() {
      return `rotate(${this.rotatePercentage})`;
    },
    rotatePercentage() {
      if (this.completedSteps === 1) {
        return 20;
      }
      return this.completedSteps * 3.6;
    },
    rotateSvg() {
      return -15 - this.completedSteps * 3.6;
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  components: {
    RadialProgressBar,
  },
};
</script>