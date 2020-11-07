<template>
	<div class="background-wrapper">
  	<div class="background" :style="pos" />
  </div>
</template>

<script>
  export default {
    name: 'BackGround',

    props: ['pos'],

    data() {
      return {}
    },

    mounted() {
    	const map = (num, in_min, in_max, out_min, out_max) => {
			  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			};

    	const bg = document.querySelector('.background-wrapper');

    	let transform, rotateX, rotateY;
			window.addEventListener('mousemove', e => {
				rotateX = (map(e.x, 0, window.innerWidth, 0, 1) - .5) * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				rotateY = (map(e.y, 0, window.innerHeight, 0, 1) - .5) * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				bg.style.transform = `rotateX(${rotateY}deg) rotateY(${-rotateX}deg)`;
			});
    },

    components: {},
  }
</script>
