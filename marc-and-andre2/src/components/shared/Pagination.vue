<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': currentActive == 1}">
        <a class="page-link" href="#" @click.prevent="goFirst">
          <i class="fas fa-angle-double-left"></i>
        </a>
      </li>
      <li class="page-item" :class="{'disabled': currentActive == 1}">
        <a class="page-link" href="#" @click.prevent="goPrev">
          <i class="fas fa-angle-left"></i>
        </a>
      </li>
      <li class="page-item disabled" v-show="currentActive!=1&&currentActive-1!=1">
        <a class="page-link">.</a>
      </li>
      <li
        class="page-item"
        v-for="(currentCount,index) in count"
        :key="currentCount"
        :class="{'active':index==currentActive-1}"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="pageChanged(currentCount)"
          v-if="checkShow(currentCount)"
        >{{currentCount}}</a>
      </li>
      <li class="page-item disabled" v-show="currentActive!=count&&currentActive+1!=count">
        <a class="page-link">.</a>
      </li>
      <li class="page-item" :class="{'disabled': currentActive == count}">
        <a class="page-link" href="#" @click.prevent="goNext">
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
      <li class="page-item" :class="{'disabled': currentActive == count}">
        <a class="page-link" href="#" @click.prevent="goLast">
          <i class="fas fa-angle-double-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["count"],
  data() {
    return {
      currentActive: 1,
    };
  },
  methods: {
    pageChanged(e) {
      this.currentActive = e;
      this.$emit("changedPage", e);
    },
    goNext() {
      this.currentActive++;
      this.$emit("changedPage", this.currentActive);
    },
    goPrev() {
      this.currentActive--;
      this.$emit("changedPage", this.currentActive);
    },
    goLast() {
      this.currentActive = this.count;
      this.$emit("changedPage", this.currentActive);
    },
    goFirst() {
      this.currentActive = 1;
      this.$emit("changedPage", this.currentActive);
    },
    checkShow(e) {
      if (
        e == this.currentActive ||
        e == this.currentActive + 1 ||
        e == this.currentActive - 1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    count(e) {
      if (e < this.currentActive) {
        this.currentActive--;
        this.$emit("changedPage", this.currentActive);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-item.active {
  pointer-events: none;
  a {
    color: white;
  }
}
</style>