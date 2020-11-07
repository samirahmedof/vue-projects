<template>
  <div id="contacts">
    <div class="title__mobile">Contacts</div>
    <div class="page-nav">
      <clink class="page-nav-left cursor-activator" :to="{name: 'partners'}">
        <img src="/icons/arrowEnabled.svg" alt="">
        Back
      </clink>
    </div>
    <div class="d-flex contacts-wrapper">
      <div class="address-wrapper">
        <div class="address">
            <PageHeader v-if="pageData" :title="pageData[`title__${this.$i18n.locale}`] || pageData.title" :text="pageData[`subtitle__${this.$i18n.locale}`] || pageData.subtitle"/>
            <div class="address-wrapper__inner">
              <div class="address__bottom">
                <splitByWord class="address__bottom-header" text="Центральный офис" />
                <splitByLetter class="address__bottom-location" text="Азербайджан, Баку, м. Гянджлик, Улица, 1" />
                <splitByLetter class="address__bottom-phone" text="+99455-305-99-87" />
                <splitByLetter class="address__bottom-email" text="info@tviser.com"/>
              </div>
            </div>
          </div>
      </div>
      <div class="form-wrapper">
        <form class="form">
          <div class="header">Напишите нам</div>
          <div class="input">
            <input
              type="text"
              v-model="formData.name"
              id="name"
              :class="formData.name? 'filled' : ''"
              @click.stop="activeInput = 'name'"
              v-click-outside="cleanActiveItem"
              placeholder="Имя"
            >
            <div class="input-border" :class="pageIsLoaded ? 'input-border__active' : ''"/>

          </div>
          <div class="input">
            <input
              type="text"
              v-model="formData.company"
              id="company"
              :class="formData.company? 'filled' : ''"
              @click.stop="activeInput = 'company'"
              v-click-outside="cleanActiveItem"
              placeholder="Компания"
            >
            <div class="input-border" :class="pageIsLoaded ? 'input-border__active' : ''"/>

          </div>
          <div class="input">
            <input
              type="email"
              v-model="formData.email"
              id="phone"
              :class="formData.email? 'filled' : ''"
              @click.stop="activeInput = 'email'"
              v-click-outside="cleanActiveItem"
              placeholder="Почта"
            >
            <div class="input-border" :class="pageIsLoaded ? 'input-border__active' : ''"/>

          </div>
          <div class="input">
            <textarea
              v-model="formData.text"
              id="text" :class="formData.text? 'filled' : ''"
              cols="5"
              @click.stop="activeInput = 'text'"
              v-click-outside="cleanActiveItem"
              placeholder="Сообщение"
            />
            <div class="input-border" :class="pageIsLoaded ? 'input-border__active' : ''"/>

          </div>
          <button class="cursor-activator" @click.prevent="sendMessage">Отправить</button>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
import transition from '~/mixins/transition'
import swiperChecker from '~/mixins/swiperChecker'
import {mapState} from 'vuex'

export default {
  name: 'contacts',
  mixins: [transition, swiperChecker],
  components: {
    PageHeader: () => import("../components/PageHeader"),
    splitByLetter: () => import("../components/splitByLetter"),
    splitByWord: () => import("../components/splitByWord"),
  },

  async fetch() {
    if (!this.pageData)
      await this.$store.dispatch('pageData/getPageData', 1);
  },

  data() {
    return {
      activeInput: null,
      formData: {
        name: '',
        company: '',
        email: '',
        text: '',
      },
      pageIsLoaded: false
    }
  },

  computed: {
    ...mapState('pageData', {
      pageData: state => state.pageData[1]
    })
  },
  mounted() {
    this.pageIsLoaded = true
  },

  methods: {
    cleanActiveItem() {
      console.log('clicked')
      this.activeInput = null
    },
    sendMessage() {
      console.warn(this.formData)
    }
  }
}
</script>
