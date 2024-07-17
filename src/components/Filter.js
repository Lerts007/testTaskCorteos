import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import FilterMenu from "./FilterMenu.js";

export default {
  name: "Filter",
  components: {
    FilterMenu,
  },
  setup() {
    const activ = ref(false);

    const toggleActiv = () => {
      activ.value = !activ.value;
      if (activ.value) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    return {
      activ,
      toggleActiv,
    };
  },
  template: `
    <div class='filter'>
      <div class="filter__airlines">
        <select>
          <button class="filter__airlines__btn"><span class="icon-ctrl"></span></button>
          <option disabled selected hidden>Авиакомпании</option>
          <option  label = "NordStar">NordStar</option>
          <option  label = "Aeroflot">Aeroflot</option>
          <option  label = "S7">S7</option>
        </select>
      </div>
      <div class="direct">
      <input type="checkbox" id="direct__checkbox" class="direct__checkbox block__checkbox">
      <label for="direct__checkbox" class="direct-label">
          Прямые
        </label>
      </div>
      <button class='filter__btn' @click="toggleActiv()">Фильтр<span class="icon-Filter"></span></button>
    </div>
    <FilterMenu  :activ="activ" :toggle-activ="toggleActiv"/>
    `,
};
