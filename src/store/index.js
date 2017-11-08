import Vue from "vue"
import Vuex from "vuex"
import search from "./modules/search"
import home from "./modules/home"
import audio from "./modules/audio"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        search,
        home,
        audio
    }
})