import Card from "./Card.js";

export default {
  name: "FlightCards",
  components: {
    Card,
  },
  template: `
  <div class="flightCards">
    <Card v-for="flight in flights" :key="flight.id" :flight="flight"/>
  </div>
    `,
  data() {
    return {
      flights: [],
    };
  },
  created() {
    this.loadFlights();
  },
  methods: {
    async loadFlights() {
      try {
        const response = await fetch("./src/assets/date.json");
        if (!response.ok) {
          throw new Error("Ошибка");
        }
        const data = await response.json();
        this.flights = data;
      } catch (error) {
        console.error("Внимание:", error);
      }
    },
  },
};
