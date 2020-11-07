<template>
  <div id="services">
    <div class="page-nav">
      <clink class="page-nav-left cursor-activator" :to="localePath('/portfolio')">
        <img src="/icons/arrowEnabled.svg" alt="back">
        Back
      </clink>
      <clink class="page-nav-right cursor-activator" :to="{name: 'contacts'}">Заказать</clink>
    </div>
    <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title" :text="pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle"/>
    <div class="d-flex services-wrapper">
      <div class="ios scrollable-area">
        <div v-swiper:mySwiperIos="swiperOptionIos" class="slider">
          <div class="swiper-wrapper ios-wrapper">
            <div
              class="swiper-slide ios-items"
              :key="i"
              v-for="(item, i) in pageData.slides"
              @click="slideTo(i)">
              <div>{{ item[`title__${$i18n.locale}`] || item.title }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ios-slider">
        <div class="swiper-pagination">
          <div class="swiper-pagination-bullet cursor-activator" :class="{'swiper-pagination-bullet-active': activeSlide == i}" v-for="(item, i) in pageData.slides" :key="i" @click="slideTo(i)"></div>
        </div>
      </div>
      <div class="services-box custom-slider scrollable-area vertical">
        <div class="custom-slider__slide" v-for="(item, i) in pageData.slides" :key="i" :class="{active: activeSlide == i, prev: activeSlide > i, next: activeSlide < i}">
          <img :src="item.image_link" :alt="item.image_alt" class="img">
          <div class="img-gradient" />
          <div class="services-button">
            <clink :to="localePath('about-us')" class="blob-wrapper cursor-activator">
              <div>
                <div class="blob">
                  <svg id="blob1" viewBox="0 0 170 140"><Blob color="white" /></svg>
                </div>
              </div>
              <span>Подробнее</span>
            </clink>
          </div>
        </div>
      </div>
    </div>
    <div class="title__mobile">Услуги</div>
    <div class="services__mobile">
      <div class="service-block" v-for="(item, id) in pageData.slides" :key="id">
        <div class="service-header">{{ item[`title__${$i18n.locale}`] || item.title }}</div>
        <div class="service-body">{{ item[`subtitle__${$i18n.locale}`] || item.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import transition from '~/mixins/transition'
import swiperChecker from '~/mixins/swiperChecker'
import {mapState} from 'vuex';

export default {
  name: 'services',
  mixins: [transition, swiperChecker],
  components: {
    PageHeader: () => import("../components/PageHeader"),
    Blob: () => import("../components/global/Blob")
  },

  data() {
    return {
      isShowHeader: null,
      itemSelected: 0,
      activeSlide: 0,
      swiperOptionIos: {
        simulateTouch: false,
        direction: 'vertical',
        slidesPerView: 1
      },
    }
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 4);
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[4]
    })
  },

  methods: {
    slideTo(i) {
      this.activeSlide = i;
      this.mySwiperIos.slideTo(i);
      this.iosify();
    },

    iosify() {
      if (this.mySwiperIos.slides) {
        for (let i = 0; i < this.mySwiperIos.slides.length; i++) {
          if (i < this.activeSlide) {
            if (i == this.activeSlide - 1) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.4`;
            }
            else if (i == this.activeSlide - 2) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.25`;
            }
            else if (i == this.activeSlide - 3) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.15`;
            }
            else if (i == this.activeSlide - 4) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0`;
            }
            else if (i == this.activeSlide - 5) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0`;
            }
          } else if (i > this.activeSlide) {
            if (i == this.activeSlide + 1) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.4`;
            }
            else if (i == this.activeSlide + 2) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.25`;
            }
            else if (i == this.activeSlide + 3) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0.15`;
            }
            else if (i == this.activeSlide + 4) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0`;
            }
            else if (i == this.activeSlide + 5) {
              this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
              this.mySwiperIos.slides[i].style.opacity = `0`;
            }
          } else {
            this.mySwiperIos.slides[i].style.transform = `none`;
            this.mySwiperIos.slides[i].style.fontSize = `1.125rem`;
            this.mySwiperIos.slides[i].style.opacity = `1`;
          }
        }
      }
    },

    slidePrev(){
      if (this.mySwiperIos.activeIndex != 0) {
        this.slideTo(this.mySwiperIos.activeIndex - 1);
      }
    },
    slideNext(){
      if (this.mySwiperIos.activeIndex != this.mySwiperIos.slides.length - 1) {
        this.slideTo(this.mySwiperIos.activeIndex + 1);
      }
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
    this.iosify();

    let iosSlider = document.querySelector('.ios'),
      iosSliderPagination = document.querySelector('.ios-slider .swiper-pagination');
    if (iosSlider) {
      iosSlider.addEventListener('wheel', e => {
        if (e.deltaY > 0 && this.mySwiperIos.activeIndex != this.mySwiperIos.activeIndex - 1) {
          this.slideNext();
        } else if (e.deltaY < 0 && this.mySwiperIos.activeIndex != 0) {
          this.slidePrev();
        }
      });
    }
    if (iosSliderPagination) {
      for (let i = 0; i < iosSliderPagination.children.length; i++) {
        iosSliderPagination.children[i].onclick = () => {
          if (i != this.mySwiperIos.activeIndex) {
            this.slideTo(i);
          }
        };
      }
    }

    this.mySwiperIos.on('transitionStart', () => {
      setTimeout(() => {
        this.iosify();
      }, 1);
    });
  },
}
</script>
