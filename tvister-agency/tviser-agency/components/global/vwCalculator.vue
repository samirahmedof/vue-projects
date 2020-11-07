<template>
  <div id="vwCalculator">
    <input type="text" v-model="width">
    <div>{{calcVW}}vw</div>
  </div>
</template>

<script>
  export default {
    name: 'vwCalculator',
    data() {
      return {
        width: null
      }
    },
    computed: {
      calcVW() {
        return (this.width / 1920 * 100).toFixed(2)
      }
    }
  }
</script>

<style lang='scss'>
  #vwCalculator {
    border: 1px solid red;
    position: fixed;
    top: 0;
    left: 100px;
    background-color: #9F9F9F;
    height: 50px;
    width: 100px;
    z-index: 200;
    input{
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div{
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
