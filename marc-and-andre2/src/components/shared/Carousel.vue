<template>
  <div class="productCarousel">
    <div class="row">
      <div class="col-4">
        <div class="carouselNav d-flex align-items-center justify-content-center">
          <a href="#" class="btn btn-pr" @click.prevent="slidePrev">
            <i class="fas fa-angle-up"></i>
          </a>
          <div class="navRow">
            <div class="slide" :style="{transform: translatePx}">
              <div class="row flex-column" ref="col">
                <CarouselNav
                  v-for="(item,index) in media"
                  :key="item.id"
                  :item="item"
                  :index="index"
                  :activeIndex="activeIndex"
                  @clickedImageIndex="clickedImageNav($event)"
                />
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-pr" @click.prevent="slideNext">
            <i class="fas fa-angle-down"></i>
          </a>
        </div>
      </div>
      <div class="col-8">
        <div class="mainImage text-center">
          <img :src="media[activeIndex].src" v-if="media[activeIndex].type=='img'" />
          <video v-else controls>
            <source :src="media[activeIndex].src" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselNav from "./CarouselNav";
export default {
  props: ["media"],
  data() {
    return {
      px: 0,
      colWidth: 0,
      rowWidth: 0,
      position: 1,
      activeIndex: 0,
      trPx: 0,
      colHeight: 110,
    };
  },
  computed: {
    translatePx() {
      return `translateY(${this.px}px)`;
    },
  },
  methods: {
    // slidePrev() {
    //   if (this.position != 1) {
    //     this.px += this.colWidth;
    //     this.position--;
    //   }
    //   if (this.activeIndex != 0) {
    //     this.activeIndex--;
    //   }
    // },
    // slideNext() {
    //   if (this.media.length - this.position != 2) {
    //     this.px -= this.colWidth;
    //     this.position++;
    //   }
    //   if (this.activeIndex != this.media.length - 1) {
    //     this.activeIndex++;
    //   }
    // },
    // setWidths(event) {
    //   this.rowWidth = this.$refs.col.clientWidth;
    //   this.colHeight = this.rowWidth / 3;
    //   this.px = -((this.position - 1) * this.colHeight);
    // },
    slideNext() {
      if (this.media.length - this.position != 2) {
        this.px -= this.colHeight;
        this.position++;
      }
      if (this.activeIndex != this.media.length - 1) {
        this.activeIndex++;
      }
    },
    slidePrev() {
      if (this.position != 1) {
        this.px += this.colHeight;
        this.position--;
      }
      if (this.activeIndex != 0) {
        this.activeIndex--;
      }
    },

    clickedImageNav(e) {
      var lng = Math.abs(e - this.activeIndex);
      if (e > this.activeIndex) {
        for (let i = 0; i < lng; i++) {
          this.slideNext();
        }
      } else {
        for (let i = 0; i < lng; i++) {
          this.slidePrev();
        }
      }
    },
  },
  // mounted() {
  //   window.addEventListener("resize", this.setWidths);
  //   setTimeout(() => {
  //     this.setWidths();
  //   }, 1000);
  // },
  components: {
    CarouselNav,
  },
};
</script>
