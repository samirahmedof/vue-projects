<template>
  <div class="efficiency-page">
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" lg="10">
          <div class="dark-page__head">
            <div class="dark-page__icon efficiency-page__icon">
              <img src="../../assets/img/icons/efficiency.svg" />
            </div>
            <div class="dark-page__back efficiency-page__back">
              <a href="#" @click.prevent="$router.go(-1)">
                <img src="../../assets/img/icons/arrow-left.svg" />
                <span class="d-none d-md-block">Back</span>
              </a>
            </div>
          </div>
        </b-col>
        <b-col cols="12" class="text-center">
          <div class="efficiency-page__heading">
            <h4>DBI Efficiency</h4>
          </div>
        </b-col>
        <b-col cols="12" lg="9">
          <div class="efficiency-page__table">
            <table>
              <thead>
                <tr>
                  <th v-for="(head,index) in thead" :key="index">
                    <span class="d-none d-md-block">{{head.lg}}</span>
                    <span class="d-md-none d-block">{{head.sm}}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <Efficiency v-for="(item,index) in tableData" :key="index" :item="item" />
              </tbody>
            </table>
          </div>
        </b-col>
        <b-col cols="10" class="d-block d-md-none">
          <ul class="efficiency-page__abb">
            <li>
              <span>T Won:</span>Total Won
            </li>
            <li>
              <span>AHR:</span> Actual Hit Rate
            </li>
            <li>
              <span>VC:</span> Value Coeficient
            </li>
            <li>
              <span>THR:</span> Theoretical Hit Rate
            </li>
          </ul>
        </b-col>
        <b-col cols="12" class="text-center mt-4">
          <a href="#" class="efficiency-page__info">
            <img src="@/assets/img/icons/info.svg" />
            More Info
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Efficiency from "../../components/efficiency/Efficiency";
export default {
  data() {
    return {
      thead: [
        {
          lg: "True Odds",
          sm: "True Odds",
        },
        {
          lg: "Total Won",
          sm: "T Won",
        },
        {
          lg: "Total",
          sm: "Total",
        },
        {
          lg: "Actual Hit Rate",
          sm: "AHR",
        },
        {
          lg: "Theoretical Hite Rate",
          sm: "THR",
        },
        {
          lg: "Value Coeficient",
          sm: "VC",
        },
      ],
      tableData: [
        {
          odds: "0%-10%",
          won: "25",
          total: "45",
          actual: "3.1%",
          theoretical: "5.0%",
          value: "N/A",
        },
        {
          odds: "10%-20%",
          won: "18",
          total: "32",
          actual: "12.3%",
          theoretical: "15.0%",
          value: "N/A",
        },
        {
          odds: "20%-30%",
          won: "5",
          total: "8",
          actual: "21.2%",
          theoretical: "25.0%",
          value: "N/A",
        },
        {
          odds: "30%-40%",
          won: "36",
          total: "51",
          actual: "29.3%",
          theoretical: "35.0%",
          value: "N/A",
        },
        {
          odds: "40%-50%",
          won: "12",
          total: "20",
          actual: "43.5%",
          theoretical: "45.0%",
          value: "N/A",
        },
        {
          odds: "50%-60%",
          won: "6",
          total: "10",
          actual: "49.2%",
          theoretical: "55.0%",
          value: "N/A",
        },
        {
          odds: "60%-70%",
          won: "3",
          total: "5",
          actual: "62.4%",
          theoretical: "65.0%",
          value: "N/A",
        },
        {
          odds: "70%-80%",
          won: "1",
          total: "1",
          actual: "72.1%",
          theoretical: "75.0%",
          value: "N/A",
        },
        {
          odds: "80%-90%",
          won: "0",
          total: "0",
          actual: "0.0%",
          theoretical: "85.0%",
          value: "N/A",
        },
        {
          odds: "90%-100%",
          won: "0",
          total: "0",
          actual: "0.0%",
          theoretical: "95.0%",
          value: "N/A",
        },
      ],
    };
  },
  components: {
    Efficiency,
  },
};
</script>
