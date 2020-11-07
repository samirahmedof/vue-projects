<template>
  <div class="exhibitionPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
        <div class="buttons mb-2">
          <div class="row">
            <div class="col-6 text-left">
              <router-link class="btn btn-pr" to="/catalog">Go to catalog</router-link>
            </div>
            <div class="col-6 text-right">
              <button class="btn btn-pr">Download</button>
              <button class="btn btn-pr" v-b-modal.sendTableModal>Send</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="table-rep-plugin">
              <div class="table-responsive mb-0">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <TableHead v-for="thead in tableHead" :key="thead.id" :thead="thead" />
                    </tr>
                    <tr>
                      <TableFilter
                        v-for="(thead,index) in tableHead"
                        :key="thead.id"
                        :thead="thead"
                        :index="index"
                        :filteredIndex="filteredIndex"
                        :searchedIndex="searchedIndex"
                        @filtered="filteredCol($event)"
                        @searched="searchedCol($event)"
                      />
                    </tr>
                  </thead>
                  <tbody>
                    <ExhibitionRow
                      v-for="(item,index) in showedTableData"
                      :key="item.id"
                      :item="item"
                      :index="index"
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-12 mt-5 d-flex justify-content-center">
                <Pagination :count="pageCount" @changedPage="currentPage=$event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="sendTableModal" hide-header hide-footer centered>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" v-model="sendTableEmail" />
        <div class="buttonRow text-center">
          <button class="btn btn-pr mt-2" @click="sendEmail">Send</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import ExhibitionRow from "./ExhibitionRow";
import TableHead from "./../../shared/TableHead";
import TableFilter from "./../../shared/TableFilter";
import Pagination from "./../../shared/Pagination";
export default {
  data() {
    return {
      Page: "Exhibition",
      sendTableEmail: null,
      tableHead: [
        {
          id: "1",
          text: "No",
          hasSearch: false,
          obj: "no",
        },
        {
          id: "2",
          text: "Number",
          hasSearch: false,
          obj: "number",
        },
        {
          id: "3",
          text: "Name",
          hasSearch: false,
          obj: "name",
        },
        {
          id: "4",
          text: "Description",
          hasSearch: false,
          obj: "description",
        },
        {
          id: "5",
          text: "Category",
          hasSearch: false,
          obj: "category",
        },
        {
          id: "6",
          text: "Color",
          hasSearch: false,
          obj: "color",
        },
        {
          id: "7",
          text: "Count",
          hasSearch: false,
          obj: "count",
        },
        {
          id: "8",
          text: "Price",
          hasSearch: false,
          obj: "price",
        },
        {
          id: "9",
          text: "Amount",
          hasSearch: false,
          obj: "amount",
        },
      ],
      filteredIndex: null,
      dataPerPage: 5,
      currentPage: 1,
      showedTableData: [],
      tableData: [],
      searchedText: null,
      searchedHeading: null,
      searchedIndex: null,
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
    filteredCol(e) {
      this.filteredIndex = e.index;
      var obj = this.tableHead[e.index].obj;
      if (e.value == "2") {
        if (this.tableHead[e.index].hasSearch) {
          this.tableData.sort(function (b, a) {
            return new Date(b[obj]) - new Date(a[obj]);
          });
        } else {
          this.tableData.sort((b, a) => (a[obj] > b[obj] ? 1 : -1));
        }
      } else {
        if (this.tableHead[e.index].hasSearch) {
          this.tableData.sort(function (a, b) {
            return new Date(b[obj]) - new Date(a[obj]);
          });
        } else {
          this.tableData.sort((a, b) => (a[obj] > b[obj] ? 1 : -1));
        }
      }
    },
    searchedCol(e) {
      this.searchedIndex = e.index;
      this.searchedHeading = this.tableHead[e.index].obj;
      this.searchedText = e.value;
    },
    sendEmail() {
      this.$bvModal.hide("sendTableModal");
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
          name: "test",
          number: "123",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "A",
          color: "#ccc",
          count: "10",
          price: "20",
          amount: "200",
        },
        {
          id: "2",
          name: "abc",
          number: "765",
          description: "ipsum dolor sit amet consectetur adipisicing elit.",
          category: "B",
          color: "#b00000",
          count: "68",
          price: "5",
          amount: "340",
        },
        {
          id: "3",
          name: "qwe",
          number: "435",
          description: "dolor sit amet consectetur adipisicing elit.",
          category: "C",
          color: "red",
          count: "2",
          price: "444",
          amount: "888",
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
    searchedText(val) {
      this.tableData = this.mainData;
      this.tableData = this.tableData.filter((x) => {
        return x[this.searchedHeading].includes(val);
      });
      this.paginate();
    },
  },
  created() {
    this.paginate();
    this.tableData = this.mainData;
  },
  components: {
    ExhibitionRow,
    Pagination,
    TableHead,
    TableFilter,
  },
};
</script>