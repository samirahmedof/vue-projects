<template>
  <div class="ordersPage">
    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-8">
        <div class="btnRow mb-3 text-right">
          <button class="btn btn-pr" v-b-modal.orderModal>Add new order</button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <Order
              v-for="(item,index) in showedTableData"
              :key="item.id"
              :item="item"
              :index="index"
            />
          </tbody>
        </table>
      </div>
      <div class="col-12 mt-5 d-flex justify-content-center">
        <Pagination :count="pageCount" @changedPage="currentPage=$event" />
      </div>
    </div>
    <b-modal id="orderModal" size="sm" hide-header hide-footer centered>
      <div class="buttons">
        <router-link class="btn btn-pr" to="/orders/1">Select 1</router-link>
        <router-link class="btn btn-pr" to="/orders/2">Select 2</router-link>
        <router-link class="btn btn-pr" to="/orders/3">Select 3</router-link>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Order from "./Order";
import Pagination from "./../../shared/Pagination";

export default {
  data() {
    return {
      Page: "Orders",
      dataPerPage: 5,
      currentPage: 1,
      showedTableData: [],
      tableData: [],
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
          date: "18.06.2020",
          status: "in progress",
        },
        {
          id: "2",
          date: "01.06.2020",
          status: "sent",
        },
        {
          id: "3",
          date: "11.06.2020",
          status: "sent",
        },
        {
          id: "4",
          date: "18.06.2020",
          status: "in progress",
        },
        {
          id: "5",
          date: "01.06.2020",
          status: "sent",
        },
        {
          id: "6",
          date: "11.06.2020",
          status: "sent",
        },
      ];
      return data;
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
  },
  components: {
    Pagination,
    Order,
  },
};
</script>