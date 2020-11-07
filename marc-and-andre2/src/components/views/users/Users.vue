<template>
  <div class="userList">
    <div class="r">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
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
                    <User
                      v-for="(user,index) in showedTableData"
                      :key="user.id"
                      :user="user"
                      :index="index"
                      @changedStatus="changeStatus($event)"
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
  </div>
</template>
<script>
import User from "./User";
import TableHead from "./../../shared/TableHead";
import TableFilter from "./../../shared/TableFilter";
import Pagination from "./../../shared/Pagination";
export default {
  data() {
    return {
      Page: "User List",
      tableHead: [
        {
          id: "1",
          text: "Registration date",
          hasSearch: true,
          hasFilter: true,
          obj: "regDate",
        },
        {
          id: "2",
          text: "Fullname",
          hasSearch: false,
          hasFilter: true,
          obj: "fullname",
        },
        {
          id: "3",
          text: "Company",
          hasSearch: false,
          hasFilter: true,
          obj: "company",
        },
        // {
        //   id: "4",
        //   text: "TIN",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "tin",
        // },
        {
          id: "5",
          text: "Phone",
          hasSearch: false,
          hasFilter: true,
          obj: "phone",
        },
        {
          id: "6",
          text: "Email",
          hasSearch: false,
          hasFilter: true,
          obj: "email",
        },
        {
          id: "7",
          text: "Country",
          hasSearch: false,
          hasFilter: true,
          obj: "country",
        },
        {
          id: "8",
          text: "City",
          hasSearch: false,
          hasFilter: true,
          obj: "city",
        },
        // {
        //   id: "9",
        //   text: "ZIP code",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "zip",
        // },
        // {
        //   id: "10",
        //   text: "Legal address",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "address",
        // },
        // {
        //   id: "11",
        //   text: "Active address",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "activeAddress",
        // },
        {
          id: "12",
          text: "Status",
          hasSearch: false,
          hasFilter: true,
          obj: "status",
        },
        {
          id: "13",
          text: "Active orders",
          hasSearch: false,
          hasFilter: true,
          obj: "activeOrders",
        },
        {
          id: "14",
          text: "Last change",
          hasSearch: true,
          hasFilter: true,
          obj: "lastChange",
        },
        {
          id: "15",
          text: "Manager",
          hasSearch: false,
          hasFilter: true,
          obj: "manager",
        },
        // {
        //   id: "16",
        //   text: "Activate",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "activate",
        // },
        // {
        //   id: "17",
        //   text: "Profile",
        //   hasSearch: false,
        // hasFilter: true,
        //   obj: "edit",
        // },
        {
          id: "18",
          text: "Registration type",
          hasSearch: false,
          hasFilter: true,
          obj: "type",
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
    changeStatus(e) {
      this.tableData.filter((x) => {
        if (x.id == e.id) {
          x.status = e.status;
        }
      });
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
          regDate: "10.01.2020",
          fullname: "John",
          company: "A org",
          tin: "956",
          phone: "9876543",
          email: "a@mail.ru",
          country: "test q",
          city: "test q",
          zip: "test q",
          address: "test q",
          activeAddress: "test q",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.02.2020",
          manager: "test q",
          activate: "test q",
          edit: "test q",
          type: "test q",
        },
        {
          id: "2",
          regDate: "10.05.2020",
          fullname: "Anthon",
          company: "E org",
          tin: "764",
          phone: "5876543",
          email: "b@mail.ru",
          country: "test t",
          city: "test t",
          zip: "test t",
          address: "test t",
          activeAddress: "test t",
          status: "archive",
          activeOrders: "yes",
          lastChange: "10.04.2020",
          manager: "test b",
          activate: "test b",
          edit: "test b",
          type: "test b",
        },
        {
          id: "3",
          regDate: "11.05.2020",
          fullname: "Ali",
          company: "C org",
          tin: "999",
          phone: "998877",
          email: "t@mail.ru",
          country: "test w",
          city: "test w",
          zip: "test w",
          address: "test o",
          activeAddress: "test o",
          status: "isNotActive",
          activeOrders: "no",
          lastChange: "04.12.2019",
          manager: "test c",
          activate: "test s",
          edit: "test q",
          type: "test t",
        },
        {
          id: "4",
          regDate: "10.01.2020",
          fullname: "John",
          company: "A org",
          tin: "956",
          phone: "9876543",
          email: "a@mail.ru",
          country: "test q",
          city: "test q",
          zip: "test q",
          address: "test q",
          activeAddress: "test q",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.02.2020",
          manager: "test q",
          activate: "test q",
          edit: "test q",
          type: "test q",
        },
        {
          id: "5",
          regDate: "11.05.2020",
          fullname: "Anthon",
          company: "E org",
          tin: "764",
          phone: "5876543",
          email: "b@mail.ru",
          country: "test t",
          city: "test t",
          zip: "test t",
          address: "test t",
          activeAddress: "test t",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.04.2020",
          manager: "test b",
          activate: "test b",
          edit: "test b",
          type: "test b",
        },
        {
          id: "6",
          regDate: "11.05.2020",
          fullname: "Ali",
          company: "C org",
          tin: "999",
          phone: "998877",
          email: "t@mail.ru",
          country: "test w",
          city: "test w",
          zip: "test w",
          address: "test o",
          activeAddress: "test o",
          status: "isNotActive",
          activeOrders: "no",
          lastChange: "04.12.2019",
          manager: "test c",
          activate: "test s",
          edit: "test q",
          type: "test t",
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
    User,
    Pagination,
    TableHead,
    TableFilter,
  },
};
</script>