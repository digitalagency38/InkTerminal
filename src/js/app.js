import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';

import FirstScene from '../blocks/components/first_scene/first_scene.js';
// import MainTabs from '../blocks/modules/block_history/block_history.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        firstscene: new FirstScene(),
        // maintabs: new MainTabs()
    }),
    mounted() {
        this.firstscene.init();
        // this.maintabs.init();
    }
});