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
    <div class="filterMenu" :class="{activMenu: activ}">
      <div class="filteMenu_back" :class="{activMenuBack: activ}"></div>
      <div class="block" :class="{activMenu: activ}">
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
