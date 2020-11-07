import {mapMutations} from 'vuex';

export default {
	mounted() {
		this.setNormalScroll(true);
	},

	beforeDestroy() {
		this.setNormalScroll(false);
	},

	methods: {
		...mapMutations(['setNormalScroll'])
	}
}