import Glide from '@glidejs/glide';

const MainSlider = class MainSlider {
    constructor() {
        this.slider = null;
        this.index = 0;
    }
    initSlider() {
        if (!document.querySelector('.main_slider.glide')) return;

        this.slider = new Glide('.main_slider.glide', {
            perView: 1,
            swipeThreshold: false,
            dragThreshold: false,
            type: 'carousel'
        }).mount()
    }
    init() {
        this.initSlider();
    }
}

export default MainSlider;