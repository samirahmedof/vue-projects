export default {
	mounted() {
		const sliders = document.querySelectorAll('.custom-slider');

		if (sliders) {
			sliders.forEach(slider => {
				if (slider.classList.contains('horizontal-slide')) {
					let mouseX, wait = false;
					slider.addEventListener('mousedown', e => {
						e.preventDefault();
						mouseX = e.x;
					});
					slider.addEventListener('mouseup', e => {
						e.preventDefault();
						if (!wait) {
							wait = true;
							setTimeout(() => { wait = false }, 200);
							if (e.x < mouseX) {
								this.$nuxt.$emit('slideNext');
							} else if (e.x > mouseX) {
								this.$nuxt.$emit('slidePrev');
							}
						}
					});
				}
			});
		}
	}
}
