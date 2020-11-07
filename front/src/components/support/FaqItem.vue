<template>
  <li class="faq-page__item" @click="showContent=!showContent">
    <div class="faq-page__heading">
      <h6>{{item.question}}</h6>
    </div>
    <div class="faq-page__content" v-show="showContent">
      <p>{{item.content}}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showContent: false,
    };
  },
};
</script>