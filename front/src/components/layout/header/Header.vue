<template>
  <header class="header">
    <b-container>
      <b-row>
        <b-col cols="5" lg="3">
          <LeftMenu />
        </b-col>

        <b-col lg="6" class="d-lg-block d-none">
          <div class="header__main-menu">
            <ul>
              <li v-for="(item,index) in menu" :key="item.id">
                <a href="#" @click.prevent="clickedMenuItem(index)" v-if="!item.link">
                  <img :src="item.src"/>
                </a>
                <router-link :to="item.link" active-class="active" exact v-else>
                  <img :src="item.src"/>
                </router-link>
              </li>
            </ul>
          </div>
        </b-col>

        <b-col cols="7" lg="3">
          <RightMenu />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
	import LeftMenu from './LeftMenu';
	import RightMenu from './RightMenu';

	export default {
		data () {
			return {
				menu: [
					{
						id: '1',
						src: require('@/assets/img/icons/home.svg'),
						link: '/',
					},
					{
						id: '2',
						src: require('@/assets/img/icons/matches.svg'),
						link: '/matches'
					},
					{
						id: '3',
						src: require('@/assets/img/icons/profile.svg'),
						link: '/profile',
					},
					{
						id: '4',
						src: require('@/assets/img/icons/education.svg'),
						link: '/education',
					},
					{
						id: '5',
						src: require('@/assets/img/icons/notification.svg'),
						link: '/notifications',
					},
				],
			};
		},
		methods: {
			clickedMenuItem (e) {
				if (e === 0) {
					this.$bvModal.show('leaderboard-modal');
				}
				if (e === 1) {
					this.$bvModal.show('bet-modal');
				}
			},
		},
		components: {
			LeftMenu,
			RightMenu,
		},
	};
</script>
