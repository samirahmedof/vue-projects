<template>
  <div class="faq-page">
    <ul>
      <FaqItem v-for="item in list" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
<script>
import FaqItem from "./FaqItem";
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          question: "I forgot email and password ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "2",
          question: "Why are there no games today ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "3",
          question: "My card has been rejected ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "4",
          question: "I can't reset my account ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "5",
          question: "Why did my pot balance go to 0 ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "6",
          question: "Why did my pot balance go to 0 ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
        {
          id: "7",
          question: "How do I unsubscribe ?",
          content:
            "Our algorithm allows you to make calculated decisions by precisely estimating the probability of a soccer event. We provide you with the real odds, which you can compare with those of bookmakers and conclude whether your investment will be profitable.",
        },
      ],
    };
  },
  components: {
    FaqItem,
  },
};
</script>