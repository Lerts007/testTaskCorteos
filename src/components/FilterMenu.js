import { defineComponent } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default defineComponent({
  name: "FilterMenu",
  props: {
    activ: Boolean,
    toggleActiv: Function,
  },
  setup(props) {
    const menu = () => {
      props.toggleActiv();
    };

    return {
      menu,
    };
  },
  template: `
    <div class="filterMenu animate__animated" :class="{animate__slideOutRight: !activ, 'animate__delay-1s': !activ}">
      <div class="filteMenu_back animate__animated" :class="{animate__fadeIn: activ}"></div>
      <div 
        class="block animate__animated" 
        :class="{animate__slideOutRight: !activ, animate__slideInRight: activ}"
      >
        <div class="block__header">
          <p class="block__header__title">Фильтр</p>
          <button class="block__header__btn" @click="menu()"><span class="icon-X"></span></button>
        </div>
        <input type="checkbox" id="bestPrice" class="block__checkbox">
        <label for="bestPrice" class="block-label">
          Лучшая цена
        </label>
      </div>
    </div>
  `,
});
