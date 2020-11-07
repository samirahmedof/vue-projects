<template>
  <b-modal class="make-money" id="make-money" hide-header hide-footer hide-backdrop>
    <p class="make-money__header">THINGS YOU SHOULD KNOW</p>
    <div class="make-money__title">
      <img src="@/assets/img/icons/slide_left_arrow.png" alt="">
      <h2>make money</h2>
      <img src="@/assets/img/icons/slide_right_arrow.png" alt="">
    </div>
    <img class="make-money__video" src="@/assets/img/video.png" alt="">
    <p class="make-money__text">One of the things that typically separates successful and professional punters apart from unsuccessful punters
      is the betting strategies employed. Successful punters recognize that one-size doesn’t fit all sports and games,
      and can tailor their approach to the game at hand. But above all, they have a personal conviction in these
      strategies, and do not make their move with every suggestion they come across. Before diving into the different
      betting strategies, let’s look at why betting strategies are super important.</p>
  </b-modal>
</template>

<script>
	export default {
		name: 'MakeMoney',
		methods: {
			hideModal () {
				this.$bvModal.hide('make-money-modal');
			},
		},
	}
</script>
