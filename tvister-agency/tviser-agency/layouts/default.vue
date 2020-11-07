<template>
  <div class="wrapper">
    <div class="cursor">
      <div class="cursor__ball cursor__ball--big" style="transform: translate(-40px, -40px);">
        <svg height="30" width="30" class="circle" :style="{ transform: `${cursorActive ? 'scale(1.5)' : ''}` }"><circle cx="15" cy="17" r="12" stroke-width="0"></circle></svg>
      </div>
    </div>
    <!-- <vhCalculator />
    <vwCalculator /> -->
    <script src="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.5.0/js-cloudimage-360-view.min.js"></script>
    <Menu />
    <IconsBar />
    <Header />
    <div class="container">
      <div class="container-page">
        <nuxt />
      </div>
    </div>
    <BackGround :pos="calcBackgroundPosition" />
    <Footer />
    <Grid :pos="calcLinesPosition" />
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {APP_URL} from '~/config/types';

export default {
  data() {
    return {
      show: true,
      modalIsOpen: false,
      sliderPosition: 0,
      sliderPositionChangable: true,
      mouseOnScrollable: false,
      currentScrollables: [],
      wait: false,
      noTransition: true,
      cursorActive: false
    }
  },

  components: {
    IconsBar: () => import ('~/components/wrapper/IconsBar'),
    Header: () => import ('~/components/wrapper/Header'),
    Footer: () => import ('~/components/wrapper/Footer'),
    Menu: () => import ('~/components/global/Menu'),
    Grid: () => import ('~/components/wrapper/Grid'),
    BackGround: () => import ('~/components/wrapper/BackGround'),
    // vhCalculator: () => import ('~/components/global/vhCalculator'),
    // vwCalculator: () => import ('~/components/global/vwCalculator'),
  },

  head() {
    return this.pageData ? {
      title: this.pageData[`meta_title__${this.$i18n.locale}`] || this.pageData.meta_title,
      meta: [
        {hid: 'description', name: 'description', content: this.pageData[`meta_subtitle__${this.$i18n.locale}`] || this.pageData.meta_subtitle},
        {itemprop: "name", content: this.pageData[`meta_title__${this.$i18n.locale}`] || this.pageData.meta_title},
        {itemprop: "description", content: this.pageData[`meta_subtitle__${this.$i18n.locale}`] || this.pageData.meta_subtitle},
        { name: 'keywords', content: this.pageData[`meta_keywords__${this.$i18n.locale}`] || this.pageData.meta_keywords},
        {itemprop: "image", content: ``}, // TODO
        {property: "og:image", content: ``}, // TODO
        {property: "og:url", content: APP_URL},
        {property: "og:title", content: this.pageData[`meta_title__${this.$i18n.locale}`] || this.pageData.meta_title},
        {property: "og:description", content: this.pageData[`meta_subtitle__${this.$i18n.locale}`] || this.pageData.meta_subtitle}
      ],
    } : {
      title: 'Tviser',
      meta: [
        {hid: 'description', name: 'description', content: 'Web studio'},
        {itemprop: "name", content: 'Tviser'},
        {itemprop: "description", content: 'Web studio'},
        { name: 'keywords', content: 'Creating websites' },
        {itemprop: "image", content: ``}, // TODO
        {property: "og:image", content: ``}, // TODO
        {property: "og:url", content: APP_URL},
        {property: "og:title", content: 'Tviser'},
        {property: "og:description", content: 'Web studio'}
      ]
    }
  },

  mounted() {
    this.recheckScrollables();

    // set initial bg w/o transition
    this.setSlider(this.currentPageIndex);
    setTimeout(() => {this.noTransition = false}, 1);

    this.$nuxt.$on('recheckScrollables', () => {
      this.recheckScrollables();
    });

    this.$nuxt.$on('incrementSlider', () => {
      if (this.sliderPositionChangable) {
        this.sliderPosition++;
        this.sliderPositionChangable = false;
        setTimeout(() => {
          this.sliderPositionChangable = true;
        }, 10);
      }
    });

    this.$nuxt.$on('decrementSlider', () => {
      if (this.sliderPositionChangable) {
        this.sliderPosition--;
        this.sliderPositionChangable = false;
        setTimeout(() => {
          this.sliderPositionChangable = true;
        }, 10);
      }
    });
    this.$nuxt.$on('setSlider', this.setSlider);

    // detecting whether it's a touch device or a computer
    let watchForHover = () => {
      let hasHoverClass = false;
      let container = document.body;
      let lastTouchTime = 0;

      let enableHover = () => {
        // discard emulated mouseMove events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.classList.remove('touch');
        hasHoverClass = true;
        this.$bus.isTouch = false;
      }

      let disableHover = () => {
        if (!hasHoverClass) return;

        container.classList.add('touch');
        hasHoverClass = false;
        this.$bus.isTouch = true;
      }

      let updateLastTouchTime = () => {
        lastTouchTime = new Date();
      }

      document.addEventListener('touchstart', updateLastTouchTime, true);
      document.addEventListener('touchstart', disableHover, true);
      document.addEventListener('mousemove', enableHover, true);

      enableHover();
    }

    watchForHover();

    // scrolling changes the page
    document.addEventListener('wheel', e => {
      if (!this.mouseOnScrollable && !this.wait && !this.isMenuOpen && !this.normalScroll) {
        setTimeout(() => {this.wait = false}, 200);
        this.wait = true;
        if (e.deltaY > 0) {
          this.$nuxt.$emit('thank-you-next');
        } else if (this.sliderPosition != 0) {
          this.$router.go(-1);
        }
      }
    });

    // handling the cursor
    const cursor = document.querySelector('.cursor__ball--big');
          // cursorBallSmall = document.querySelector('.cursor__ball--small');
    document.addEventListener('mousemove', e => {
      if (!this.$bus.isTouch)
        cursor.style.transform = `translate(${e.x - 15}px, ${e.y - 15}px)`;
      else cursor.style.transform = 'translate(-50px, -50px)';
      // cursorBallSmall.style.transform = `translate(${e.x - 5}px, ${e.y - 7}px)`;
    });

    this.$nuxt.$on('cursor-active', () => {
      this.cursorActive = true;
    });
    this.$nuxt.$on('cursor-inactive', () => {
      this.cursorActive = false;
    });
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[state.activePageIndex]
    }),
    ...mapState(['routes', 'isMenuOpen', 'normalScroll']),

    calcBackgroundPosition() {
      if (this.sliderPosition >= 0) {
        return `background-position: calc(${this.sliderPosition * -100}vw); ${this.noTransition ? 'transition: none': ''}`
      } else {
        return `background-position: calc(${this.sliderPosition * 100}vw); ${this.noTransition ? 'transition: none': ''}`
      }
    },
    calcLinesPosition() {
      if (this.sliderPosition >= 0) {
        return `transform: translateX(${this.sliderPosition * -100}vw); ${this.noTransition ? 'transition: none': ''}`
      } else {
        return `transform: translateX(${this.sliderPosition * 100}vw); ${this.noTransition ? 'transition: none': ''}`
      }
    },
    getBackground() {
      if (this.$route.fullPath === '/') {
        return "main-background"
      } else if (this.$route.fullPath === '/about-us' || this.$route.fullPath === '/portfolio') {
        return "top-background"
      } else {
        return "bottom-background"
      }
    },
    currentPageIndex() {
      return this.routes.findIndex(v => v == this.$route.name.slice(0, this.$route.name.length - 5));
    }
  },

  methods: {
    setSlider(v) {
      if (this.sliderPositionChangable) {
        this.sliderPosition = v;
        this.sliderPositionChangable = false;
        setTimeout(() => {
          this.sliderPositionChangable = true;
        }, 10);
      }
    },

    recheckScrollables() {
      this.currentScrollables.forEach(s => {
        s.removeEventListener('mouseover', this.onMouseOverScrollable, false);
        s.removeEventListener('mouseleave', this.onMouseLeaveScrollable, false);
        this.mouseOnScrollable = false;
      });

      this.currentScrollables = [];

      this.currentScrollables = document.querySelectorAll('.scrollable-area');
      this.currentScrollables.forEach(s => {
        s.addEventListener('mouseover', this.onMouseOverScrollable, false);
        s.addEventListener('mouseleave', this.onMouseLeaveScrollable, false);
      });
    },

    onMouseOverScrollable(e) {
      this.mouseOnScrollable = true;
    },

    onMouseLeaveScrollable(e) {
      this.mouseOnScrollable = false;
    }
  }
}
</script>
