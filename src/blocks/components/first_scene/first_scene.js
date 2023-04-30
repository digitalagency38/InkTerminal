const FirstScene = class FirstScene {
    constructor() {}
    toggleScene() {
        document.querySelector('.first_scene__btn').addEventListener('click', e => {
            document.querySelector('.first_scene').classList.add('isAnimate');
        });
          
    }
    init() {
        this.toggleScene();
    }
}

export default FirstScene;
