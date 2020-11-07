<template>
  <b-container class="education">
    <b-col cols="6" offset="3">
      <a class="education__main-button">How to use our platform</a>
      <a class="education__page" ref="'make-money'" @click="showModal">Make Money</a>
      <a class="education__page">Fast Strategires</a>
      <a class="education__page">Low Risk Investments</a>
      <a class="education__page">How it works</a>
      <a class="education__page">Soccer markets</a>
      <a class="education__page">Analyze bets</a>
      <a class="education__page">Win Fast</a>
      <a class="education__page">Double Your Income</a>
    </b-col>
    <MakeMoney/>
  </b-container>
</template>

<script>
	import MakeMoney from '../../components/education/MakeMoney';

	export default {
		name: 'Education',
		components: { MakeMoney },
		data () {
			return {}
		},
		methods: {
			showModal () {
				this.$root.$emit('bv::show::modal', 'make-money', '#make-money')
			},
		}
	}
</script>
