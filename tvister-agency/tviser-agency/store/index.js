export const state = () => ({
	routes: ['index', 'about-us', 'portfolio', 'services', 'partners', 'contacts'],

	isMenuOpen: false,
	normalScroll: false
});

export const mutations = {
	setMenuOpen(state, isOpen) {
		state.isMenuOpen = isOpen;
	},

	setNormalScroll(state, isNormal) {
		state.normalScroll = isNormal;
	}
};
