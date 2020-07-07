import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userList: [
            { id: 1, name: "Galio", role: 'Admin' },
            { id: 2, name: "Shang", role: 'Staff' },
            { id: 3, name: "Vermum", role: 'Leader' },
        ]
    },
    getters: {
        userList: state => {
            return state.userList;
        },
        user: state => id => {
            return state.userList.find(x => x.id === id);
        }
    }
})