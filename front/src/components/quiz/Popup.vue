<template>
  <b-modal id="quiz-popup" size="lg" hide-header-close centered hide-footer>
    <template v-slot:modal-title>
      <div class="close-area">
        <a href="#" @click.prevent="hideModal">
          <img src="../../assets/img/icons/times-white.svg" alt />
        </a>
      </div>
    </template>
    <b-row class="justify-content-center">
      <b-col cols="12" lg="7">
        <div class="quiz-popup__heading">
          <h3>TOO BAD!</h3>
        </div>
        <div class="quiz-popup__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="quiz-popup__buttons">
          <button class="quiz-popup__btn quiz-popup__btn--pink">RETAKE
              <img src="@/assets/img/icons/quiz-button.svg" >
          </button>
          <button class="quiz-popup__btn">EDUCATION</button>
        </div>
      </b-col>
    </b-row>
  </b-modal>
</template>
<script>
export default {
  methods: {
    hideModal(){
      this.$bvModal.hide("quiz-popup");
    }
  },
}
</script>