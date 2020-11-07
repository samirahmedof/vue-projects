<template>
  <div class="calendar" v-show="show">
    <div class="calendar__content modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div class="calendar__close">
          <a href="#" @click.prevent="hideCalendar">
            <img src="../../assets/img/icons/times-white.svg" alt />
          </a>
        </div>
        <b-row>
          <b-col cols="6">
            <div class="calendar__item" :class="{'calendar__item--disable':rightCalendarActive}">
              <div class="calendar__heading">
                <h6>From</h6>
              </div>
              <div class="calendar__content">
                <CalendarItem />
              </div>
              <div class="calendar__buttons">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="calendar__btn calendar__btn--check"
                      :class="{'calendar__btn--disabled':rightCalendarActive}"
                      @click.prevent="leftCalendar"
                    >
                      <img src="@/assets/img/icons/check-white.svg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="calendar__btn calendar__btn--right"
                      :class="{'calendar__btn--disabled':rightCalendarActive}"
                      @click.prevent="activateRightCalendar"
                    >
                      <img src="@/assets/img/icons/arrow-right.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="calendar__item" :class="{'calendar__item--disable':!rightCalendarActive}">
              <div class="calendar__heading">
                <h6>To</h6>
              </div>
              <div class="calendar__content">
                <CalendarItem />
              </div>
              <div class="calendar__buttons">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="calendar__btn calendar__btn--check"
                      :class="{'calendar__btn--disabled':!rightCalendarActive}"
                      @click.prevent="rightCalendar"
                    >
                      <img src="@/assets/img/icons/check-white.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import CalendarItem from "./CalendarItem";
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      rightCalendarActive: false,
    };
  },
  components: {
    CalendarItem,
  },
  methods: {
    rightCalendar() {
      this.rightCalendarActive = false;
      this.$emit("hide-calendar");
    },
    leftCalendar() {
      this.rightCalendarActive = false;
      this.$emit("hide-calendar");
    },
    activateRightCalendar() {
      this.rightCalendarActive = false;
      this.rightCalendarActive = true;
    },
    hideCalendar() {
      this.rightCalendarActive = false;
      this.$emit("hide-calendar");
    },
  },
};
</script>