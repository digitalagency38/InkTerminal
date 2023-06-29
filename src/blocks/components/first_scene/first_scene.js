const FirstScene = class FirstScene {
    constructor() {}
    toggleScene() {
        document.querySelector('.first_scene__btn').addEventListener('click', e => {
            document.querySelector('.first_scene').classList.add('isAnimate');
            
            // Сохраняем состояние в localStorage
            localStorage.setItem('isAnimated', true);
        });
          
          // Проверяем значение из localStorage
          const isAnimated = localStorage.getItem('isAnimated');
          
          if (isAnimated) {
            // Если значение в localStorage равно true, скрываем элемент
            document.querySelector('.first_scene').style.display = 'none';
        }
    }
    init() {
        this.toggleScene();
    }
}

export default FirstScene;
