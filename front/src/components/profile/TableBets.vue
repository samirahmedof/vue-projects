<template>
  <div class="bets">
    <div class="bets__table">
      <table>
        <thead>
          <tr class="bets__table__head">
            <th @click="showCalendar" role="button" tabindex="0">
              <div class="date">
                <img src="@/assets/img/icons/calendar.png" />
                <span>December</span>
                <span>31</span>
              </div>
            </th>
            <th class="time">Time</th>
            <th>
              H/D/A
              <br />Y/N
            </th>
            <th>Market</th>
            <th>League</th>
            <th class="d-none d-md-table-cell">Price</th>
            <th class="d-none d-md-table-cell">%</th>
            <th class="d-none d-md-table-cell">Stake %</th>
            <th class="d-none d-md-table-cell">Stake</th>
            <th class="d-none d-md-table-cell">Profit / Loss</th>

            <th class="d-table-cell d-md-none">Price %</th>
            <th class="d-table-cell d-md-none">
              Stake
              W / L
            </th>
          </tr>
        </thead>
        <tbody class="bets__table__body">
          <tr v-for="(item,i) in dataBets" :key="i" class="won">
            <td class="bet-profit teams">
              <div class="d-flex flex-column">
                <span class="teams__goal">{{ item['Team 1 goals'] }}</span>
                <span class="teams__goal">{{ item['Team 2 goals'] }}</span>
              </div>
              <div>
                <p class="teams__name">{{ item['Team 1'] }}</p>
                <p class="teams__name">{{ item['Team 2'] }}</p>
              </div>
            </td>
            <td class="time green">
              {{ item['Time-state'] }}
              <span class="green">{{ item['Time'] }}</span>
            </td>
            <td>{{ item['H/D/A/Y/N'] }}</td>
            <td class="font-weight-bold">{{ item['Market'] }}</td>
            <td class="league">{{ item['League'] }}</td>

            <td class="d-none d-md-table-cell">{{ item['Price'] }}</td>
            <td class="d-none d-md-table-cell">{{ item['Percent'] }}</td>
            <td class="d-none d-md-table-cell">{{ item['Stake %'] }}</td>
            <td class="d-none d-md-table-cell state">{{ item['Stake'] }}</td>
            <td class="d-none d-md-table-cell profit">{{ item['Profit/Loss'] }}</td>

            <td class="d-table-cell d-md-none">
              <div class="price-percent">
                <span class="d-block">{{ item['Price'] }}</span>
                <span>{{ item['Percent'] }}</span>
              </div>
            </td>
            <td class="d-table-cell d-md-none">
              <div class="stake-won">
                <span class="state d-block">{{ item['Stake'] }}</span>
                <span class="profit">{{ item['Profit/Loss'] }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bets__footer">
      <p class="title">Today</p>
      <div class="d-flex pb-2 pl-1 pr-1 justify-content-between">
        <div class="bets__block col-md-1 p-0 col-2 offset-md-2">
          <p class="bets__block__header">Total bets</p>
          <p class="bets__block__number yellow">$ 900</p>
          <p class="bets__block__total">8</p>
        </div>
        <div class="bets__block col-md-1 p-0 col-2">
          <p class="bets__block__header">Total loss</p>
          <p class="bets__block__number red">$ 900</p>
          <p class="bets__block__total">3</p>
        </div>
        <div class="bets__block col-md-1 p-0 col-2">
          <p class="bets__block__header">Total won</p>
          <p class="bets__block__number green">$ 900</p>
          <p class="bets__block__total">5</p>
        </div>
        <div class="bets__block col-md-1 p-0 col-2 offset-md-3">
          <p class="bets__block__header">Net P&L</p>
          <p class="bets__block__number">
            <span class="green">$</span> 900
          </p>
        </div>
        <div class="bets__block col-md-1 p-0 col-2">
          <p class="bets__block__header">R.O.I</p>
          <p class="bets__block__number light-green">10.2 %</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableBets",
  data() {
    return {
      dataBets: [
        {
          "Team 1": "Barselona",
          "Team 2": "PSG",
          "Team 1 goals": "",
          "Team 2 goals": "3",
          "Time-state": "Play",
          Time: "25'",
          "H/D/A/Y/N": "H",
          Market: "F",
          League: "Champ LE",
          Price: "5647",
          Percent: "10%",
          "Stake %": "5647",
          Stake: "5647",
          "Profit/Loss": "$ 150",
        },
        {
          "Team 1": "Barselona",
          "Team 2": "Barselona",
          "Team 1 goals": "1",
          "Team 2 goals": "3",
          "Time-state": "In-play",
          Time: "45'",
          "H/D/A/Y/N": "D",
          Market: "F",
          League: "Champ LE",
          Price: "5647",
          Percent: "10%",
          "Stake %": "5647",
          Stake: "5647",
          "Profit/Loss": "–",
        },
        {
          "Team 1": "Real Madrid",
          "Team 2": "Barselona",
          "Team 1 goals": "1",
          "Team 2 goals": "3",
          Time: "25",
          "H/D/A/Y/N": "H",
          Market: "H",
          League: "Champ LE",
          Price: "5647",
          Percent: "10%",
          "Stake %": "5647",
          Stake: "5647",
          "Profit/Loss": "$ 150",
        },
        {
          "Team 1": "Barselona",
          "Team 2": "PSG",
          "Team 1 goals": "1",
          "Team 2 goals": "3",
          Time: "10'",
          "H/D/A/Y/N": "B",
          Market: "F",
          League: "Champ LE",
          Price: "5647",
          Percent: "10%",
          "Stake %": "5647",
          Stake: "5647",
          "Profit/Loss": "$ 150",
        },
      ],
    };
  },
  methods: {
    showCalendar() {
      this.$emit("show-calendar");
    },
  },
};
</script>
