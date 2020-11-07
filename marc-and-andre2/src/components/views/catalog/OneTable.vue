<template>
  <td>
    <span v-if="hasSize">
      <input
        type="text"
        min="0"
        class="form-control"
        v-model="count"
        :class="{'invalid':invalid}"
      />
    </span>
    <span v-else>
    </span>
  </td>
</template>
<script>
import { numeric } from "vuelidate/lib/validators";

export default {
  props: ["hasSize", "index", "letter",'tableSizes'],
  data() {
    return {
      count: null,
      invalid: false,
    };
  },
  validations: {
    count: {
      numeric,
    },
  },

  watch: {
    count(val, val2) {
      if (!this.$v.count.$invalid && val2 >= 0) {
        this.invalid = false;
        this.$emit("countChanged", {
          value: val - val2,
          index: this.index,
          letter: this.letter,
        });
      } else {
        this.invalid = true;
      }
    },
  },
};
</script>