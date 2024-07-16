import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Header from "./components/Header.js";
import Filter from "./components/Filter.js";
import FlightCards from "./components/FlightCards.js";

const App = {
  components: {
    Header,
    Filter,
    FlightCards,
  },
  template: `
    <div id="app">
      <Header />
      <Filter />
      <FlightCards />
    </div>
  `,
};

createApp(App).mount("#app");
