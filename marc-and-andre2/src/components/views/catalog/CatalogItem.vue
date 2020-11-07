<template>
  <div class="col-md-4 mb-4">
    <div class="catalogCard">
      <div class="cardName">{{item.name}}</div>
      <div class="imageContainer">
        <img :src="item.img" />
      </div>
      <div class="cardBody">
        <h5 class="cardTitle">{{item.vendor}}</h5>
        <p class="cardDescr">{{item.description}}</p>
        <div class="row price">
          <div class="col-md-6">
            <span>wholesale: {{item.wholesale}}$</span>
          </div>
          <div class="col-md-6">
            <span>retail: {{item.retail}}$</span>
          </div>
        </div>
        <div class="tableArea">
          <table class="table table-bordered" v-if="item.type=='one'">
            <thead>
              <tr>
                <th>Size</th>
                <th v-for="(size,index) in item.table.sizes" :key="index">{{size}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(letter,index2) in item.table.letter" :key="index2">
                <td>{{letter}}</td>
                <OneTable
                  v-for="(size,index) in item.table.sizes"
                  :key="index"
                  :index="index"
                  :letter="returnLetter(letter)"
                  :hasSize="hasOnePieceSize(size,letter)"
                  :tableSizes="mainTableSizes.one"
                  @countChanged="oneTableChanged($event)"
                />
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered" v-else-if="item.type=='top'">
            <thead>
              <tr>
                <th>Size</th>
                <th v-for="(size,index) in item.table.sizes" :key="index">{{size}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <SingleTable
                  v-for="(size,index) in item.table.sizes"
                  :key="index"
                  :index="index"
                  :type="'top'"
                  :hasSize="hasSize(size)"
                  :tableSizes="mainTableSizes.top"
                  @countChanged="topCountChanged($event)"
                />
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered" v-else>
            <thead>
              <tr>
                <th>Size</th>
                <th v-for="(size,index) in item.table.sizes" :key="index">{{size}}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <SingleTable
                  v-for="(size,index) in item.table.sizes"
                  :key="index"
                  :index="index"
                  :type="'bottom'"
                  :tableSizes="mainTableSizes.bottom"
                  @countChanged="bottomCountChanged($event)"
                  :hasSize="hasSize(size)"
                />
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btnRow text-center">
          <router-link :to="moreLink" class="btn btn-pr btn-sm">More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OneTable from "./OneTable";
import SingleTable from "./SingleTable";

export default {
  props: ["item", "index", "mainTableSizes"],
  computed: {
    moreLink() {
      return `catalog/${this.index + 1}`;
    },
  },
  methods: {
    hasSize(currentSize) {
      if (this.item.table.stock.indexOf(currentSize) != -1) {
        return true;
      } else {
        return false;
      }
    },
    hasOnePieceSize(currentSize, currentLetter) {
      var hasInTable = this.item.table.stock.filter((x) => {
        if (x.size == currentSize && x.letter == currentLetter) {
          return true;
        }
      });
      return hasInTable.length;
    },
    topCountChanged(e) {
      e.index = "s" + this.item.table.sizes[e.index];
      this.$emit("topCount", e);
    },
    bottomCountChanged(e) {
      e.index = "s" + this.item.table.sizes[e.index];
      this.$emit("bottomCount", e);
    },
    oneTableChanged(e) {
      e.index = "s" + this.item.table.sizes[e.index];
      this.$emit("oneTableCount", e);
    },
    returnLetter(letter) {
      return letter;
    },
  },
  components: {
    OneTable,
    SingleTable,
  },
};
</script>
