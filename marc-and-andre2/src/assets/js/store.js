import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLogged: false,
        users: [
            {
                id: '1',
                name: 'User',
                surname: 'User',
                patronomic: 'User',
                gender: '2',
                email: 'user@mail.ru',
                phone: '+994 55 987 65 43',
                org: 'User org',
                tin: '123456',
                legalAddress: 'Azerbaijan',
                actualAddress: 'Azerbaijan',
                country: 'country1',
                city: 'city1',
                shipping: ['shipping1', 'shipping2'],
                pass: '123',
                status: 'user',
            },
            {
                id: '2',
                fullname: 'Manager Manager',
                country: 'Azerbaijan',
                gender: '2',
                city: 'Baku',
                email: 'manager@mail.ru',
                phone: '+994 55 987 65 43',
                pass: '123',
                status: 'manager'
            },
            {
                id: '3',
                fullname: 'Sales Manager',
                country: 'Azerbaijan',
                city: 'Baku',
                gender: '2',
                email: 'rop@mail.ru',
                phone: '+994 55 987 65 43',
                pass: '123',
                status: 'rop'
            }
        ],
        activeUser: {},
        hideSearch: true
    },
    getters: {
        getIsLogged(state) {
            return state.isLogged;
        },
        getUsers(state) {
            return state.users;
        },
        getActiveUser(state) {
            return state.activeUser;
        },
        getHideSearch(state) {
            return state.hideSearch;
        },
        getUserStatus(state) {
            return state.activeUser.status
        }
    },
    mutations: {
        getLogout(state) {
            state.isLogged = false;
            state.activeUser = {};
        },
        changeLogged(state, value) {
            state.isLogged = !state.isLogged;
            state.activeUser = value;
        },
        setHideSearch(state, value) {
            state.hideSearch = value;
        }
    }
});
