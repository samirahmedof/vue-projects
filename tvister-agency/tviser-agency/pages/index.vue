<template>
  <div id="index">
    <div class="title__mobile">Tviser web agency the quality qaranted. See our awards on ilham.com</div>
    <div class="header-block">
      <div class="page-nav" />
      <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title" :text="pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle" />
      <div class="header__mobile">
        <h1>{{ pageData[`title__${this.$i18n.locale}`] || pageData.title }}</h1>
        <h2>{{ pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle }}</h2>
      </div>
      <div class="routes">
        <div class="routes-box" v-for="(route, index) in routes" :key="index">
          <clink class="route cursor-activator" :to="{name: route.link}">
            {{route.name}}
          </clink>
        </div>
      </div>
      <clink :to="{name: 'about-us'}" class="blob-wrapper">
        <div class="cursor-activator">
          <div class="blob">
            <svg id="blob1" viewBox="0 0 170 140">
              <Blob color="#000" /></svg>
          </div>
        </div>
        <span>Start</span>
      </clink>
    </div>
    <div class="bottom-block">
      <div class="right">
        <div class="arrow-block-prev">
          <img v-show="activeSlide !== 0" src="/icons/arrowNext.svg" alt="" class="arrow cursor-activator" @click="slidePrev()">
        </div>
        <div class="slider">
          <div class="scrollable-area custom-slider text-slider horizontal-slide">
            <div class="swiper-slide-textblock custom-slider__slide" :key="i" v-for="(item, i) in pageData.slides" :class="{active: activeSlide == i, prev: activeSlide == i + 1, next: activeSlide == i - 1}">
              <h2 class="swiper-slide-header">
                {{ item[`title__${$i18n.locale}`] || item.title }}
              </h2>
              <div class="swiper-slide-text-wrapper">
                <p class="swiper-slide-text">{{ item[`subtitle__${$i18n.locale}`] || item.subtitle }}</p>
              </div>
            </div>
          </div>
          <div class="custom-slider scrollable-area pics-slider horizontal-slide">
            <div class="custom-slider__slide" :key="`1-${i}`" v-for="(item, i) in pageData.slides" :class="{active: slide1Index == i, prev: slide1Index == i + 1, next: slide1Index == i - 1}" v-if="pageData.slides[slide1Index]">
              <img :src="pageData.slides[slide1Index].image_link" :alt="pageData.slides[slide1Index].image_alt" class="slide-image">
            </div>
            <div class="custom-slider__slide pics-slider__center" :key="`2-${i}`" v-for="(item, i) in pageData.slides" :class="{active: slide2Index == i, prev: slide2Index == i + 1, next: slide2Index == i - 1}" v-if="pageData.slides[slide2Index]">
              <img :src="pageData.slides[slide2Index].image_link" :alt="pageData.slides[slide2Index].image_alt" class="slide-image">
            </div>
            <!-- v-if="innerWidth > 850" -->
            <div class="custom-slider__slide pics-slider__right" :key="`3-${i}`" v-for="(item, i) in pageData.slides" :class="{active: slide3Index == i, prev: slide3Index == i + 1, next: slide3Index == i - 1}" v-if="pageData.slides[slide3Index]">
              <img :src="pageData.slides[slide3Index].image_link" :alt="pageData.slides[slide3Index].image_alt" class="slide-image">
            </div>
          </div>
        </div>
        <div class="arrow-block-next">
          <img src="/icons/arrowNext.svg" alt="" class="arrow cursor-activator" @click="slideNext()" v-if="activeSlide !== lastSlide">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '~/mixins/transition'
import swiperChecker from '~/mixins/swiperChecker'
import customSlider from '~/mixins/customSlider'
import { mapState } from 'vuex'

export default {
  name: 'index',
  mixins: [transition, swiperChecker, customSlider],
  components: {
    Blob: () => import("../components/global/Blob"),
    PageHeader: () => import("../components/PageHeader")
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 6);
  },

  data() {
    return {
      activeSlide: 0,
      activeSlideCount: 3,
      routes: [{
          name: 'Portfolio',
          link: 'portfolio'
        },
        {
          name: 'Services',
          link: 'services'
        },
        {
          name: 'Contacts',
          link: 'contacts'
        },
        {
          name: 'Partners',
          link: 'partners'
        },
        {
          name: 'About',
          link: 'about-us'
        },
      ],
      innerWidth: null
    }
  },

  methods: {
    slideNext() {
      if (this.activeSlide < this.lastSlide) this.activeSlide++;
    },

    slidePrev() {
      if (this.activeSlide > 0) this.activeSlide--;
    }
  },
  mounted() {
    this.$nuxt.$on('slideNext', () => {
      this.slideNext();
    })
    this.$nuxt.$on('slidePrev', () => {
      this.slidePrev();
    })
    this.innerWidth = window.innerWidth
    window.onresize = () => {
      this.innerWidth = window.innerWidth
    }
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[6]
    }),

    slide1Index() {
      return this.activeSlide > this.lastSlide - 2 ? this.lastSlide - 2 : this.activeSlide;
    },

    slide2Index() {
      return this.activeSlide + 1 > this.lastSlide - 1 ? this.lastSlide - 1 : this.activeSlide + 1;
    },

    slide3Index() {
      return this.activeSlide + 2 > this.lastSlide ? this.lastSlide : this.activeSlide + 2;
    },

    lastSlide() {
      // return Math.floor((this.pageData.slides.length - 1)/this.activeSlideCount);
      return this.pageData.slides.length - 1
    }
  }
}
</script>
