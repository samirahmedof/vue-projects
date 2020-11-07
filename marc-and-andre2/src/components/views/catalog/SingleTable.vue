<template>
  <td>
    <span v-if="hasSize">
      <input
        type="text"
        min="0"
        class="form-control"
        v-model="count"
        :class="{'invalid':invalid}"
        @input="changeInput"
      />
    </span>
    <span v-else>
    </span>
  </td>
</template>
<script>
import { numeric } from "vuelidate/lib/validators";

export default {
  props: ["hasSize", "index", "tableSizes", "type"],
  data() {
    return {
      count: null,
      invalid: false,
      beforeValue: null,
    };
  },
  validations: {
    count: {
      numeric,
    },
  },
  created() {
    if (this.type == "top") {
      switch (this.index) {
        case 0:
          this.count = Number(this.tableSizes.s36);
          break;
        case 1:
          this.count = Number(this.tableSizes.s38);
          break;
        case 2:
          this.count = Number(this.tableSizes.s40);
          break;
        case 3:
          this.count = Number(this.tableSizes.s42);
          break;
        case 4:
          this.count = Number(this.tableSizes.s44);
          break;
        case 5:
          this.count = Number(this.tableSizes.s46);
          break;
      }
    } else {
      switch (this.index) {
        case 0:
          this.count = Number(this.tableSizes.s70);
          break;
        case 1:
          this.count = Number(this.tableSizes.s75);
          break;
        case 2:
          this.count = Number(this.tableSizes.s80);
          break;
        case 3:
          this.count = Number(this.tableSizes.s85);
          break;
        case 4:
          this.count = Number(this.tableSizes.s90);
          break;
        case 5:
          this.count = Number(this.tableSizes.s95);
          break;
      }
    }
  },
  methods: {
    changeInput(e) {
      var val1 = e.target.value;
      var val2= this.beforeValue;

      if (!this.$v.count.$invalid && val2 >= 0) {
        this.create = true;
        this.invalid = false;
        this.$emit("countChanged", { value: val1 - val2, index: this.index });
      } else {
        this.invalid = true;
      }
    },
  },
  watch: {
    count(val) {
      this.beforeValue = val;
    },
  },
};
</script>