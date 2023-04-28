import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

import Vue from 'vue/dist/vue.js';
import $ from 'jquery';

import MainSlider from '../blocks/modules/main_slider/main_slider.js';

window.app = new Vue({
    el: '#app',
    data: () => ({
        mainslider: new MainSlider()
    }),
    mounted() {
        this.mainslider.init();
    }
});