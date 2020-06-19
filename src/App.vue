<template>
  <div id="app">
    <div class="main_box">
      <div class="main_logo">
        <img alt="Exmo logo" src="./assets/exmo.png">
        <p>TraderBot</p>
      </div>
    </div>
    <div class="w-100">

      <table class="table table-bordered table-hover table-striped col-12" id="dataTable" width="100%" cellspacing="0">
        <thead>
        <tr>
          <th v-for="thead in theads" :key="thead.param">
            <div class="align-items-center d-flex justify-content-between">
              {{thead.name}}
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="BTC_USD in BTC_USDs" :key="BTC_USD.length">
          <td>{{BTC_USD.trade_id}}</td>
          <td>{{BTC_USD.type}}</td>
          <td>{{BTC_USD.price}}</td>
          <td>{{BTC_USD.quantity}}</td>
          <td>{{BTC_USD.amount}}</td>
          <td>{{BTC_USD.date | moment("D.MM.YYYY hh:mm:ss")}}</td>

        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>


<script>
  import {mapActions, mapGetters} from "vuex";

  export default {
  name: 'app',
  data() {
    return {
      theads: [
        { name: 'Сделка №', type: 'compareString', param: 'deal' },
        { name: 'Тип', type: 'compareString', param: 'type_deal' },
        { name: 'Цена', type: 'compareString', param: 'price_deal' },
        { name: 'Кол-во', type: 'compareString', param: 'quantity_deal' },
        { name: 'Cумма', type: 'compareString', param: 'amount_deal' },
        { name: 'Дата и время', type: 'compareString', param: 'date_deal' },

      ],
    }
  },
  components: {
  },
  computed: {
    ...mapGetters(['BTC_USDs']),
  },
  methods: {
    ...mapActions(['getBTC_USD']),
  },
  mounted() {
    this.getBTC_USD();
    setInterval(() => {
      this.getBTC_USD();
      this.$forceUpdate();
    }, 20000);

  }

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #2c3e50;
  margin-top: 60px;
}
  .main_box {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
  }
  .main_logo{
    width: 627px;
    position: relative;
  }
  p{
    font-family: 'Dancing Script', cursive;
    font-size: 52px;
    position: absolute;
    display: block;
    bottom: -40px;
    right: -35px;
  }
</style>
