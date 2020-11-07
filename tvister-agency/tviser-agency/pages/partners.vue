<template>
  <div id="partners">
    <div class="page-nav">
      <clink class="page-nav-left cursor-activator" :to="{name: 'services'}">
        <img src="/icons/arrowEnabled.svg" alt="">
        Back
      </clink>
      <clink class="page-nav-right cursor-activator" :to="{name: 'contacts'}">Стать партнером</clink>
    </div>
    <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title" :text="pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle"/>
    <div class="partners-wrapper">
      <div v-swiper:mySwiperText="swiperOptionPartners" class="scrollable-area">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="i" v-for="(imgs, i) in formattedImages">
            <div class="partners">
              <img v-for="(item, k) in imgs" :src="item.image_link" :key="k" :alt="item.image_alt" class="partners-container">
            </div>
          </div>
        </div>
      </div>

      <div class="partners__bottom">
        <div class="slider-control" v-show="this.formattedImages.length > 1">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="title__mobile">Партнеры</div>
    <div class="partners__mobile">
      <div class="partners__mobile-title">Станьте нашим партнером</div>
      <div class="partners__mobile-text">3 года опыта работы в данной сфере рынка, обеспечим вам лучший результат. 3 года опыта работы в данной сфере рынка, обеспечим вам лучший результат.</div>
      <div class="partners__mobile-contacts">
        <img src="/images/apple.png" alt="" class="partners__mobile-contact">
        <img src="/images/instagramm.png" alt="" class="partners__mobile-contact">
        <img src="/images/terminal.png" alt="" class="partners__mobile-contact">
        <img src="/images/google.png" alt="" class="partners__mobile-contact">
      </div>
      <clink :to="{name: 'about-us'}" class="blob-wrapper">
        <div>
          <div class="blob">
            <svg id="blob1" viewBox="0 0 170 140"><Blob color="#000" /></svg>
          </div>
        </div>
        <span>Start</span>
      </clink>
    </div>
  </div>
</template>

<script>
import transition from '~/mixins/transition'
import swiperChecker from '~/mixins/swiperChecker'
import {mapState} from 'vuex'

export default {
  name: 'partners',
  mixins: [transition, swiperChecker],
  components: {
    PageHeader: () => import("../components/PageHeader"),
    Blob: () => import("../components/global/Blob"),
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 5);
  },

  data() {
    return {
      swiperOptionPartners: {
        pagination: {
          el: '.swiper-pagination',
        },
        fadeEffect: { crossFade: true },
        effect: 'fade',
        init: false,
        slidesPerView: 1,
        mousewheel: {
          invert: false,
        }
      }
    }
  },

  methods: {
    recalcSlidesToShow() {
      for (let i = 0; i < this.mySwiperText.slides.length; i++) {
        if (this.mySwiperText.slides[i].querySelectorAll('img')[1]) {
          if (!this.showImg(i))
            this.mySwiperText.slides[i].querySelectorAll('img')[1].style.display = 'none';
          else this.mySwiperText.slides[i].querySelectorAll('img')[1].style.display = 'block';
        }
      }
    },
    showImg(i) {
      if (this.mySwiperText && this.mySwiperText.activeIndex + 3 == i)
        return false;
      return true;
    },
    addCounter(){
      if (this.itemSelected >= this.items.length - 1 ) return
      this.itemSelected = this.itemSelected + 1
    },
    removeCounter(){
      if (this.itemSelected <= 0) return
      this.itemSelected = this.itemSelected - 1
    }
  },

  mounted() {
    this.mySwiperText.on('transitionEnd', () => {
      this.recalcSlidesToShow();
    });

    this.mySwiperText.init(this.mySwiperText);

    this.recalcSlidesToShow();
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[5]
    }),

    formattedImages() {
      let images = [], seventhsCount = 0, sevenths = [];
      for (let i = 0; i < this.pageData.slides.length; i++) {
        sevenths.push(this.pageData.slides[i]);
        if (seventhsCount == 7) {
          seventhsCount = -1;
          images.push(sevenths);
          sevenths = [];
        }
        seventhsCount++;
      }
      return images;
    }
  },
}
</script>
