<template>
	<div class="menu" :class="{active: isMenuOpen}">
		<img src="/icons/close.svg" alt="close" class="menu__close-button cursor-activator" @click="closeMenu()">
		<div class="menu__squares">
			<div class="menu__row" v-for="i in 3" :key="i">
				<div class="menu__square" v-for="k in 4" :key="k"></div>
			</div>
		</div>
		<div class="menu__center">
			<nuxt-link class="cursor-activator" :to="localePath(`/${link == 'index' ? '' : link}`)" v-for="(link, i) in routes" :key="`menu-link-${i}`">
				{{ $t(`routes.${link}`) }}
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
	data() {
		return {
			interactable: false
		}
	},

  watch: {
    routerName() {
      this.closeMenu();
    }
  },

	mounted() {
		const map = (num, in_min, in_max, out_min, out_max) => {
		  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		};

		const squares = this.$el.querySelectorAll('.menu__square');

		this.$nuxt.$on('open-menu', () => {
			this.setMenuOpen(true);
			this.menuOpened();
		});
		this.$nuxt.$on('close-menu', () => { this.menuClosed() });

		// moving squares towards the cursor
		let rotateX, rotateY, slideRotationRateX, slideRotationRateY, slideRect;
		window.addEventListener('mousemove', e => {
			if (this.interactable) {
				rotateX = (map(e.x, 0, window.innerWidth, 0, 1) - .5) * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				rotateY = (map(e.y, 0, window.innerHeight, 0, 1) - .5) * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				squares.forEach(s => {
					slideRect = s.getBoundingClientRect();
					slideRotationRateX = 1 - Math.abs((e.x - (slideRect.left + s.offsetWidth / 2)) / window.innerWidth);
					slideRotationRateY = 1 - Math.abs((e.y - (slideRect.top + s.offsetHeight / 2)) / window.innerHeight);
					s.style.transform = `rotateX(${rotateY * slideRotationRateX}deg) rotateY(${-rotateX * slideRotationRateY}deg)`;
				});
			}
		});

		// scrolling through the links in the menu
		window.addEventListener('wheel', e => {
			
		});
	},

	computed: {
		...mapState(['routes', 'isMenuOpen']),
    
    routerName() {
      return this.$route.name
    }
	},

	methods: {
		...mapMutations(['setMenuOpen']),

		menuOpened() {
			setTimeout(() => {
				const squares = this.$el.querySelectorAll('.menu__square');
				let rotateX, rotateY, slideRotationRateX, slideRotationRateY, slideRect;
				rotateX = .5 * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				rotateY = -.5 * 30; // - 0.5 to make it between -0.5 and 0.5, max 30 degress, min 30 degrees
				squares.forEach(s => {
					s.style.transition = 'transform .5s ease';
					slideRect = s.getBoundingClientRect();
					slideRotationRateX = 1 - Math.abs((window.innerWidth - (slideRect.left + s.offsetWidth / 2)) / window.innerWidth);
					slideRotationRateY = 1 - Math.abs((-(slideRect.top + s.offsetHeight / 2)) / window.innerHeight);
					s.style.transform = `rotateX(${rotateY * slideRotationRateX}deg) rotateY(${-rotateX * slideRotationRateY}deg)`;
				});
				setTimeout(() => {
					squares.forEach(s => {
						s.style.transition = '';
					});
				}, 501);
			}, 600);

			setTimeout(() => {
				this.interactable = true;
			}, 1150);
		},

		menuClosed() {
			this.interactable = false;
			setTimeout(() => {
				this.reset();
			}, 600);
		},

		reset() {
			const squares = this.$el.querySelectorAll('.menu__square');
			squares.forEach(s => {
				s.style.transform = '';
			});
		},

    closeMenu() {
      setTimeout(() => {
        this.setMenuOpen(false);
      }, 600);
      this.$nuxt.$emit('close-modal');
    }
	}
}	
</script>
