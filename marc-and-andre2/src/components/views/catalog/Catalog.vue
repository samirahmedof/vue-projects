<template>
  <div class="catalogPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <CatalogItem
                v-for="(item,index) in showedTableData"
                :key="item.id"
                :item="item"
                :index="index"
                :mainTableSizes="mainTableSizes"
                @topCount="topCountChange($event)"
                @bottomCount="bottomCountChange($event)"
                @oneTableCount="oneTableCountChange($event)"
              />
            </div>
            <div class="showMoreBtn text-center mt-3">
              <button class="btn btn-pr" @click.prevent="showMoreItem">Show more</button>
            </div>
          </div>
          <div class="col-md-3 tableCol">
            <div class="totalTable">
              <div class="tableContent">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th colspan="7">Size</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th>One-piece</th>
                      <th>36</th>
                      <th>38</th>
                      <th>40</th>
                      <th>42</th>
                      <th>44</th>
                      <th>46</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <CatalogTotalItem
                        v-for="(item,index) in mainTableSizes.one"
                        :key="index"
                        :item="item"
                      />
                      <td>{{oneTotal}}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>For the top</th>
                      <th>36</th>
                      <th>38</th>
                      <th>40</th>
                      <th>42</th>
                      <th>44</th>
                      <th>46</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <CatalogTotalItem
                        v-for="(item,index) in mainTableSizes.top"
                        :key="index"
                        :item="item"
                      />
                      <td>{{topTotal}}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>For the bottom</th>
                      <th>70</th>
                      <th>75</th>
                      <th>80</th>
                      <th>85</th>
                      <th>90</th>
                      <th>95</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <CatalogTotalItem
                        v-for="(item,index) in mainTableSizes.bottom"
                        :key="index"
                        :item="item"
                      />
                      <td>{{bottomTotal}}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="btnRow text-center">
                  <button class="btn btn-pr">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9 mt-5 d-flex justify-content-center">
            <Pagination :count="pageCount" @changedPage="currentPage=$event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "./../../shared/Pagination";
import CatalogItem from "./CatalogItem";
import MainTableOne from "./MainTableOne";
import CatalogTotalItem from "./CatalogTotalItem";
export default {
  data() {
    return {
      Page: "Catalog",
      dataPerPage: 6,
      currentPage: 1,
      showedTableData: [],
      tableData: [],
      mainTableSizes: {
        top: {
          s36: 0,
          s38: 0,
          s40: 0,
          s42: 0,
          s44: 0,
          s46: 0,
        },
        bottom: {
          s70: 0,
          s75: 0,
          s80: 0,
          s85: 0,
          s90: 0,
          s95: 0,
        },
        one: {
          s36: 0,
          s38: 0,
          s40: 0,
          s42: 0,
          s44: 0,
          s46: 0,
        },
      },
    };
  },
  methods: {
    paginate() {
      let page = this.currentPage;
      let perPage = this.dataPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      this.showedTableData = this.tableData.slice(from, to);
    },
    topCountChange(e) {
      this.mainTableSizes.top[e.index] += Number(e.value);
    },
    bottomCountChange(e) {
      this.mainTableSizes.bottom[e.index] += Number(e.value);
    },
    oneTableCountChange(e) {
      this.mainTableSizes.one[e.index] += Number(e.value);
    },
    showMoreItem() {
      this.dataPerPage += this.dataPerPage;
    },
  },
  computed: {
    pageCount() {
      let count = Math.ceil(this.tableData.length / this.dataPerPage);
      return count;
    },
    mainData() {
      let data = [
        {
          id: "1",
          type: "one",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "C"],
            stock: [
              {
                size: "36",
                letter: "C",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "A",
              },
            ],
          },
        },
        {
          id: "2",
          type: "top",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/1000x1500",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["36", "38", "40"],
          },
        },
        {
          id: "3",
          type: "bottom",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/140x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "75", "85"],
          },
        },
        {
          id: "4",
          name: "Test",
          type: "top",
          vendor: "L2001",
          img: "https://via.placeholder.com/150x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["42", "44", "46"],
          },
        },
        {
          id: "5",
          name: "Test",
          type: "bottom",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "90"],
          },
        },
        {
          id: "6",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B", "D"],
            stock: [
              {
                size: "36",
                letter: "D",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "B",
              },
            ],
          },
        },
        {
          id: "7",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B"],
            stock: [
              {
                size: "38",
                letter: "C",
              },
              {
                size: "42",
                letter: "C",
              },
              {
                size: "46",
                letter: "A",
              },
            ],
          },
        },
        {
          id: "11",
          type: "one",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "C"],
            stock: [
              {
                size: "36",
                letter: "C",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "A",
              },
            ],
          },
        },
        {
          id: "12",
          type: "top",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/1000x1500",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["36", "38", "40"],
          },
        },
        {
          id: "13",
          type: "bottom",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/140x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "75", "85"],
          },
        },
        {
          id: "14",
          name: "Test",
          type: "top",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["42", "44", "46"],
          },
        },
        {
          id: "15",
          name: "Test",
          type: "bottom",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "90"],
          },
        },
        {
          id: "16",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B", "D"],
            stock: [
              {
                size: "36",
                letter: "D",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "B",
              },
            ],
          },
        },
        {
          id: "17",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B"],
            stock: [
              {
                size: "38",
                letter: "C",
              },
              {
                size: "42",
                letter: "C",
              },
              {
                size: "46",
                letter: "A",
              },
            ],
          },
        },
      ];
      return data;
    },
    topTotal() {
      var result = 0;
      for (const [key, value] of Object.entries(this.mainTableSizes.top)) {
        result += value;
      }
      return result;
    },
    bottomTotal() {
      var result = 0;
      for (const [key, value] of Object.entries(this.mainTableSizes.bottom)) {
        result += value;
      }
      return result;
    },
    oneTotal() {
      var result = 0;
      for (const [key, value] of Object.entries(this.mainTableSizes.one)) {
        result += value;
      }
      return result;
    },
  },
  watch: {
    currentPage() {
      this.paginate();
    },
    tableData() {
      this.paginate();
    },
    pageCount() {
      this.currentPage = 1;
      this.paginate();
    },
  },
  created() {
    this.paginate();
    this.tableData = this.mainData;

    // var totalSizes = [];
    // for (let i = 0; i < this.mainData.length; i++) {
    //   if (this.mainData[i].type == "one") {
    //     totalSizes = totalSizes.concat(this.mainData[i].table.letter);
    //   }
    // }
    // totalSizes = [...new Set(totalSizes)];
    // var lettersArr = totalSizes.sort();
    // var newObj = {};
    // for (let j = 0; j < lettersArr.length; j++) {
    //   newObj[lettersArr[j]] = new Object();
    //   newObj[lettersArr[j]].s36 = 0;
    //   newObj[lettersArr[j]].s38 = 0;
    //   newObj[lettersArr[j]].s40 = 0;
    //   newObj[lettersArr[j]].s42 = 0;
    //   newObj[lettersArr[j]].s44 = 0;
    //   newObj[lettersArr[j]].s46 = 0;
    // }
    // this.mainTableSizes.one = newObj;
  },
  components: {
    Pagination,
    CatalogItem,
    MainTableOne,
    CatalogTotalItem,
  },
};
</script>