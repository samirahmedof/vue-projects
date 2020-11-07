export default {
	mounted() {
		window.addEventListener('resize', this.onResize, false);
	},

	data() {
		return {
			slideClass: '',
			paginationClass: ''
		}
	},

	methods: {
		placePagination(slideClass, paginationClass) {
			this.slideClass = slideClass;
			this.paginationClass = paginationClass;
			if (slideClass && paginationClass) {
				const leftSliderSlides = this.$el.querySelectorAll(slideClass);
		    if (leftSliderSlides) {
		      const leftSliderPagination = this.$el.querySelector(paginationClass);
		      let maxHeight = 0;
		      leftSliderSlides.forEach(s => {
		        if (s.offsetHeight > maxHeight)
		          maxHeight = s.offsetHeight;
		      });
		      leftSliderPagination.style.bottom = 'unset';
		      leftSliderPagination.style.top = `${(maxHeight / window.innerHeight * 100).toFixed(2)}vh`;
		    }
		  }
		},

		onResize() {
			if (this.slideClass) {
				if (!document.querySelector(this.slideClass)) {
					window.removeEventListener('resize', this.onResize, false);
					return;
				}
				console.log('what');

				this.placePagination(this.slideClass, this.paginationClass);
			}
		}
	}
}
