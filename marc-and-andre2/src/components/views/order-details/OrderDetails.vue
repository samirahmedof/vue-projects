<template>
  <div class="orderDetailsPage">
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

              <button
                class="btn btn-pr"
                v-if="$store.getters.getUserStatus=='user'"
                v-b-modal.sendToMarketModal
                v-show="!sendedToMarket"
              >Checkout</button>
              <button
                class="btn btn-pr"
                v-if="$store.getters.getUserStatus=='user'"
                v-b-modal.sendToMarketModal
                v-show="sendedToMarket"
              >Confirm Order</button>

              <button class="btn btn-pr" v-if="$store.getters.getUserStatus=='user'">Save</button>
              <button
                class="btn btn-pr"
                v-b-modal.sendTableModal
                v-if="$store.getters.getUserStatus!='user'"
              >Send</button>
            </div>
            <div class="col-12" v-if="$store.getters.getUserStatus=='user'">
              <div class="commentAndTotal">
                <div class="row justify-content-center">
                  <div class="col-12 text-right">
                    <a
                      href="#"
                      title="Comment on the order"
                      @click.prevent="commentShow=!commentShow"
                    >
                      Comment on the order
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                  <transition
                    enter-active-class="animate__animated animate__fadeIn animate__faster"
                    leave-active-class="animate__animated animate__fadeOut animate__faster"
                  >
                    <div class="col-12" v-show="commentShow">
                      <textarea cols="30" rows="3" class="form-control"></textarea>
                    </div>
                  </transition>
                </div>
              </div>
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
                      <!-- <TableHead v-for="thead in tableHead" :key="thead.id" :thead="thead" /> -->
                      <th rowspan="5">No</th>
                      <th rowspan="5">Articul</th>
                      <th rowspan="5">Name</th>
                      <th rowspan="5">Description</th>
                      <th rowspan="5">Color</th>
                      <th>Sizes</th>
                      <th colspan="10">Size Scale</th>
                      <th rowspan="5">Count</th>
                      <th rowspan="5">Price</th>
                      <th rowspan="5">Amount</th>
                    </tr>
                    <tr>
                      <th>for lady's CoverUp</th>
                      <th>Free</th>
                      <th>XS</th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                      <th>XXL</th>
                      <th>XXXL</th>
                      <th class="empty"></th>
                      <th class="empty"></th>
                    </tr>
                    <tr>
                      <th>for lady's</th>
                      <th class="empty"></th>
                      <th>34</th>
                      <th>36</th>
                      <th>38</th>
                      <th>40</th>
                      <th>42</th>
                      <th>44</th>
                      <th>46</th>
                      <th>48</th>
                      <th>50</th>
                    </tr>
                    <tr>
                      <th>for man's</th>
                      <th class="empty"></th>
                      <th class="empty"></th>
                      <th>S</th>
                      <th>M</th>
                      <th>L</th>
                      <th>XL</th>
                      <th>XXL</th>
                      <th class="empty"></th>
                      <th class="empty"></th>
                      <th class="empty"></th>
                    </tr>
                    <tr>
                      <th>sandals</th>
                      <th class="empty"></th>
                      <th>36</th>
                      <th>37</th>
                      <th>38</th>
                      <th>39</th>
                      <th>40</th>
                      <th>41</th>
                      <th class="empty"></th>
                      <th class="empty"></th>
                      <th class="empty"></th>
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
                    <DetailRow
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
              <div class="col-12 text-right mt-4 aboutTable">
                <h5 class="m-0">Total {{total}}$</h5>
                <h5 class="m-0">Items {{mainData.length}}</h5>
              </div>
              <div class="col-12 mt-4 d-flex justify-content-center">
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
    <b-modal id="sendToMarketModal" size="sm" hide-header hide-footer centered>
      <div class="form-group">
        <label>Send to the market?</label>
        <div class="buttonRow text-center">
          <button class="btn btn-pr mt-2" @click="sendToMarket">Yes</button>
          <button class="btn btn-pr mt-2" @click="closeSendToMarket">No</button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import DetailRow from "./DetailRow";
import TableHead from "./../../shared/TableHead";
import TableFilter from "./../../shared/TableFilter";
import Pagination from "./../../shared/Pagination";
export default {
  data() {
    return {
      Page: "Order details",
      sendTableEmail: null,
      tableHead: [
        {
          id: "1",
          text: "No",
          hasSearch: false,
          hasFilter: true,
          obj: "no",
        },
        {
          id: "2",
          text: "Number",
          hasSearch: false,
          hasFilter: true,
          obj: "number",
        },
        {
          id: "3",
          text: "Name",
          hasSearch: false,
          hasFilter: true,
          obj: "name",
        },
        {
          id: "4",
          text: "Description",
          hasSearch: false,
          hasFilter: true,
          obj: "description",
        },

        {
          id: "5",
          text: "Color",
          hasSearch: false,
          hasFilter: true,
          obj: "color",
        },

        {
          id: "7",
          text: "Size",
          hasSearch: false,
          hasFilter: true,
          obj: "size",
        },

        {
          id: "71",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "72",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "73",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "74",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "75",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "76",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "77",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "78",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "79",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },
        {
          id: "80",
          text: "",
          hasSearch: false,
          hasFilter: false,
          obj: "s",
        },

        {
          id: "8",
          text: "Count",
          hasSearch: false,
          hasFilter: true,
          obj: "count",
        },
        {
          id: "9",
          text: "Price",
          hasSearch: false,
          hasFilter: true,
          obj: "price",
        },
        {
          id: "10",
          text: "Amount",
          hasSearch: false,
          hasFilter: true,
          obj: "amount",
        },
      ],
      filteredIndex: null,
      dataPerPage: 5,
      currentPage: 1,
      showedTableData: [],
      tableData: [],
      total: "900",
      commentShow: false,
      searchedText: null,
      searchedHeading: null,
      searchedIndex: null,
      sendedToMarket: false,
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
    sendToMarket() {
      this.sendedToMarket = true;
      this.$bvModal.hide("sendToMarketModal");
    },
    closeSendToMarket() {
      this.$bvModal.hide("sendToMarketModal");
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
          size: "B",
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
          size: "C",
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
          size: "D",
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
    DetailRow,
    Pagination,
    TableHead,
    TableFilter,
  },
};
</script>