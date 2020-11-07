<template>
  <div id="about-us">
    <div class="title__mobile">About us</div>
    <div class="page-nav">
      <clink class="page-nav-left cursor-activator" :to="{name: 'index'}">
        <img src="/icons/arrowEnabled.svg" alt="">
        Back
      </clink>
    </div>
    <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title" :text="pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle"/>
    <div class="d-flex scrollable-area about-us__bottom">
      <div class="slider left-slider custom-slider scrollable-area horizontal-slide">
        <div class="custom-slider__slide slide" :key="i" v-for="(item, i) in pageData.slides" :class="{active: activeSlide == i, prev: activeSlide > i, next: activeSlide < i}">
          <div class="slide-head">
            <div class="slide-number">0{{i + 1}}</div>
          </div>
          <div class="slide-body">
            <div class="slide-header">{{ item[`title__${$i18n.locale}`] || item.title }}</div>
            <div class="slide-text">
              {{ item[`subtitle__${$i18n.locale}`] || item.subtitle }}
            </div>
          </div>
        </div>
        <div class="slider-control custom-slider__pagination">
          <div class="custom-slider__pagination__item" v-for="i in pageData.slides.length" :key="i">
            <div class="custom-slider__pagination__item__active" :style="{transition: `transform ${autoplayDuration}ms ease`}" :class="{full: i <= activeSlide + 1 }"></div>
          </div>
        </div>
      </div>
      <div class="scrollable-area image-swiper custom-slider horizontal-slide">
        <div class="custom-slider__slide" :key="i" v-for="(item, i) in pageData.slides" :class="{active: activeSlide == i, prev: activeSlide == i + 1, next: activeSlide == i - 1}">
          <img :src="item.image_link" :alt="item.image_alt">
        </div>
      </div>

    </div>
    <div class="about-us__mobile">
      <div class="slider">
        <div class="slide">
          <div class="slide-head">
            <div class="slide-number">1</div>
            <div class="slide-header">Нешаблонное решение</div>
          </div>
          <div class="slide-body">
            Вы не похожи на других — так зачем подражать кому-то? тенеподражаемый голос вашего бренда
          </div>
        </div>
        <div class="slide">
          <div class="slide-head">
            <div class="slide-number">2</div>
            <div class="slide-header">Нешаблонное решение</div>
          </div>
          <div class="slide-body">
            Вы не похожи на других — так зачем подражать кому-то? тенеподражаемый голос вашего бренда
          </div>
        </div>
        <div class="slide">
          <div class="slide-head">
            <div class="slide-number">3</div>
            <div class="slide-header">Нешаблонное решение</div>
          </div>
          <div class="slide-body">
            Вы не похожи на других — так зачем подражать кому-то? тенеподражаемый голос вашего бренда
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '~/mixins/transition'
import swiperChecker from '~/mixins/swiperChecker'
import customSlider from '~/mixins/customSlider'
import paginationPlacer from '~/mixins/paginationPlacer'
import {mapState} from 'vuex'

export default {
  name: 'about-us',
  mixins: [transition, swiperChecker, customSlider, paginationPlacer],
  components: {
    PageHeader: () => import("../components/PageHeader"),
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 2);
  },

  data () {
    return {
      activeSlide: -1,
      autoplayDuration: 4000,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
      ]
    }
  },
  
  methods: {
    slideNext() {
      if (this.activeSlide < this.pageData.slides.length-1) this.activeSlide++;
    },

    slidePrev() {
      if (this.activeSlide > 0) this.activeSlide--;
    }
  },

  computed: {
    pageData() {
      return this.$store.state.pageData.pageData[2]
    }
  },

  mounted() {
    const temp = this.autoplayDuration;
    this.autoplayDuration = 200;
    setTimeout(() => {this.autoplayDuration = temp; this.activeSlide = 0}, 200);
    this.$nuxt.$on('slideNext', () => {
      this.slideNext();
    });
    this.$nuxt.$on('slidePrev', () => {
      this.slidePrev();
    });
    setTimeout(() => {
      setInterval(() => {
        if (this.activeSlide != this.pageData.slides.length-1)
          this.slideNext();
        else {
          const temp = this.autoplayDuration;
          this.autoplayDuration = 200;
          this.activeSlide = -1;
          setTimeout(() => {this.autoplayDuration = temp; this.activeSlide = 0}, 200);
        }
      }, this.autoplayDuration);
    }, 200);

    // placing pagination at it's correct spot
    this.placePagination('.left-slider .custom-slider__slide .slide-body', '.left-slider .custom-slider__pagination');
  },
}
</script>
