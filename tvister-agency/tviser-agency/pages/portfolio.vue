<template>
  <div id="portfolio">
    <div class="page-nav">
      <clink class="page-nav-left cursor-activator" :to="localePath('/about-us')">
        <img src="/icons/arrowEnabled.svg" alt="back">
        Back
      </clink>
    </div>
    <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title"/>
    <div class="portfolio-bottom">
      <div class="d-flex portfolio__slider">
        <div class="slider-paginator">
          <div class="paginator">
            <img src="/icons/arrowPrev.svg" alt="" class="paginator-prev cursor-activator" @click="slidePrev">
            <div class="paginator-active custom-slider vertical">
              <div class="custom-slider__slide" v-for="i in pageData.slides.length" :class="{active: activeSlide == i - 1, prev: activeSlide == i, next: activeSlide == i - 2}"><span>{{ i < 9 ? `0${i}` : i }}</span></div>
            </div>
            <sub class="paginator-total">/ {{ pageData.slides.length < 9 ? `0${pageData.slides.length}` : pageData.slides.length }}</sub>
            <img src="/icons/arrowNext.svg" alt="" class="paginator-next cursor-activator" @click="slideNext">
          </div>
          <div class="portfolio__bottom cursor-activator">Во весь экран</div>
        </div>
        <div class="slider-img custom-slider horizontal-slide scrollable-area">
          <div class="custom-slider__slide" :key="i" v-for="(item, i) in pageData.slides" :class="{active: activeSlide == i, prev: activeSlide == i + 1, next: activeSlide == i - 1}">
            <div class="custom-slider__slide__inner">
              <div class="img-gradient" />
              <img :src="item.image_link" :alt="item.image_alt">
              <div class="portfolio-button">
                <clink :to="{name: 'about-us'}" class="blob-wrapper">
                  <div class="cursor-activator">
                    <div class="blob">
                      <svg id="blob1" viewBox="0 0 170 140"><Blob color="white" /></svg>
                    </div>
                  </div>
                  <span style="color: white">Подробнее</span>
                </clink>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-company custom-slider horizontal-slide">
          <div class="scrollable-area">
            <div class="custom-slider__slide" :key="i" v-for="(item, i) in pageData.slides" :class="{active: activeSlide == i, prev: activeSlide > i, next: activeSlide < i}">
              <h2 class="company-name">{{ item[`title__${$i18n.locale}`] || item.title }}</h2>
              <p class="company-type-of-work">{{ item[`type__${$i18n.locale}`] || item.type }}</p>
              <p class="company-description">
                {{ item[`subtitle__${$i18n.locale}`] || item.subtitle }}
              </p>
            </div>
          </div>
          <div class="slider-control custom-slider__pagination">
            <div class="custom-slider__pagination__item" v-for="i in pageData.slides.length" :key="i">
              <div class="custom-slider__pagination__item__active" :style="{transition: `transform ${autoplayDuration}ms ease`}" :class="{full: i <= activeSlide + 1 }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title__mobile">Портфолио</div>
    <div class="portfolio__mobile">
      <div class="portfolio__mobile-container" v-for="(item, index) in pageData.slides" :key="index">
        <img src="/temp/portfolio_slide.png" alt="" class="portfolio__mobile-img">
        <div class="portfolio__mobile-block">
          <div class="portfolio-head">
            <div class="portfolio-name">Midas Company</div>
            <div style="display: flex; align-items: center">
              <div class="portfolio-info">
                <span>{{ index + 1 }}</span>
                <span style="color: #969696">/ {{pageData.slides.length}}</span>
              </div>
              <img style="cursor: pointer; margin-right: 10px" src="/icons/arrowRoute.png" alt="" class="arrow">
            </div>
          </div>
          <div class="portfolio-type">Лэндинг</div>
          <div class="portfolio-fullscreen">Во весь экран</div>
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
  name: 'portfolio',
  mixins: [transition, swiperChecker, customSlider, paginationPlacer],
  components: {
    Paragraph: () => import("../components/splitByWord"),
    PageHeader: () => import("../components/PageHeader"),
    Blob: () => import("../components/global/Blob")
  },

  data() {
    return {
      activeSlide: -1,
      autoplayDuration: 4000
    }
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 3);
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[3]
    })
  },

  methods: {
    slideNext() {
      if (this.activeSlide < this.pageData.slides.length-1) this.activeSlide++;
    },

    slidePrev() {
      if (this.activeSlide > 0) this.activeSlide--;
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
    this.placePagination('.slider-company .custom-slider__slide', '.slider-company .custom-slider__pagination');
  },
}
</script>
