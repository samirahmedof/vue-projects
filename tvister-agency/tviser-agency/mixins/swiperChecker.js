export default {
	mounted() {
		this.$nuxt.$emit('recheckScrollables');

		// also checking links for the cursor
		const links = [...document.querySelectorAll('a'), ...document.querySelectorAll('.cursor-activator')];
		links.forEach(a => {
			a.addEventListener('mousemove', () => {
				this.$nuxt.$emit('cursor-active');
			});
			a.addEventListener('mouseleave', () => {
				this.$nuxt.$emit('cursor-inactive');
			});
		});
	}
}
