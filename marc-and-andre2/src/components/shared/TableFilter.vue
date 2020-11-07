<template>
  <th :class="thead.obj">
    <div class="tableFilter d-flex align-items-center" v-if="thead.hasFilter">
      <select class="form-control" v-model="selectedFilter">
        <option value="0" disabled>Select</option>
        <option value="1">asc</option>
        <option value="2">desc</option>
      </select>
      <div class="search ml-2" v-if="thead.obj!='no'&&thead.obj!='color'">
        <i class="fas fa-search" @click="openSearchInput"></i>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in"
      >
        <div class="searchInput" v-show="showSearch">
          <input type="text" class="form-control" v-model="search" />
          <i class="fas fa-times" @click="clearSearch"></i>
        </div>
      </transition>
    </div>
    <div class="emptyFilter" v-else></div>
  </th>
</template>
<script>
export default {
  props: ["thead", "index", "filteredIndex", "searchedIndex"],
  data() {
    return {
      showSearch: false,
      selectedFilter: "0",
      search: "",
    };
  },
  methods: {
    clearSearch() {
      this.showSearch = false;
      this.search = "";
    },
    openSearchInput() {
      this.search = "";
      this.showSearch = true;
    },
  },
  computed: {
    showTh() {
      if (this.thead.obj != "edit") {
        return true;
      } else {
        if (this.$store.getters.getUserStatus == "manager") {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  watch: {
    selectedFilter(val) {
      if (val != 0) {
        this.$emit("filtered", { index: this.index, value: val });
      }
    },
    filteredIndex(val) {
      if (val != this.index) {
        this.selectedFilter = "0";
      }
    },

    search(val) {
      this.$emit("searched", { index: this.index, value: val });
    },
    searchedIndex(value) {
      if (value != this.index) {
        // this.search = "";
        this.showSearch = false;
      }
    },
  },
};
</script>