<template>
  <div class="home-slider__item">
    <div class="home-slider__container">
      <img class="static-bg" src="../../assets/img/slider-bg.png" />
      <div class="home-slider__trending">
        <div class="row no-gutters justify-content-center w-100">
          <div class="col-3">
            <div class="home-slider__team">
              <img :src="item.team1.img" />
              <div class="home-slider__team-name">{{item.team1.name}}</div>
            </div>
          </div>
          <div class="col-1"></div>
          <div class="col-2 d-flex align-items-center justify-content-center">
            <div class="home-slider__match-time">
              <div class="day">today</div>
              <div class="hour">{{item.time}}</div>
              <h4>VS</h4>
            </div>
          </div>
          <div class="col-1"></div>

          <div class="col-3">
            <div class="home-slider__team">
              <img :src="item.team2.img" />
              <div class="home-slider__team-name">{{item.team2.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>