<template>
  <picker v-model="visible" :data-items="items" @change="onValuesChange">
    <div class="calendar__helper calendar__helper--left" slot="top-content"></div>
    <div class="calendar__helper calendar__helper--right" slot="top-content"></div>
  </picker>
</template>
<script>
export default {
  //   props: {
  //     item: {
  //       type: [String, Number],
  //       required: true,
  //     },
  //     index: {
  //       type: Number,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      visible: true,
      items: [
        {
          index: 0,
          values: [],
        },
        {
          index: 1,

          values: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        {
          index: 0,
          values: [],
          maxScrollValue: 30,
        },
      ],
      firstCase: [],
      secondCase: [],
      thirdCase: [],
      fourthCase: [],
      defaultYear: 3,
      defaultMonth: 2,
      defaultDay: 5,
    };
  },

  created() {
    for (let i = 0; i < 28; i++) {
      this.firstCase.push(i + 1);
      this.secondCase.push(i + 1);
      this.thirdCase.push(i + 1);
      this.fourthCase.push(i + 1);
    }

    this.secondCase.push(29);
    this.thirdCase.push(29, 30);
    this.fourthCase.push(29, 30, 31);
    var yearbegin = 2000;
    for (let j = 0; j < 35; j++) {
      this.items[0].values.push(yearbegin + j);
    }
    this.items[0].index = this.defaultYear;
    this.items[1].index = this.defaultMonth;
    this.items[2].index = this.defaultDay;

    this.items[2].values = this.fourthCase;
  },
  methods: {
    onValuesChange(val1, val2) {
      console.log(val1, val2);
      if (
        val2 == this.items[1].values[3] ||
        val2 == this.items[1].values[5] ||
        val2 == this.items[1].values[8] ||
        val2 == this.items[1].values[10]
      ) {
        this.items[2].maxScrollValue = 30;
      } else if (val2 == this.items[1].values[1]) {
        if (val1 % 4 == 0) {
          this.items[2].maxScrollValue = 29;
        } else {
          this.items[2].maxScrollValue = 28;
        }
      } else {
        this.items[2].maxScrollValue = 31;
      }
    },
  },
};
</script>