<template>
  <div id="vhCalculator">
    <input type="text" v-model="height">
    <div>{{calcVH}}vh</div>
  </div>
</template>

<script>
  export default {
    name: 'vhCalculator',
    data() {
      return {
        height: null
      }
    },
    computed: {
      calcVH() {
        return (this.height / 1080 * 100).toFixed(2)
      }
    }
  }
</script>

<style lang='scss'>
  #vhCalculator {
    border: 1px solid red;
    position: fixed;
    top: 0;
    left: 0;
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
