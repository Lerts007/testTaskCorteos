import { ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {
  name: "FlightCards",
  props: {
    flight: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("ru-RU").format(this.flight.Price);
    },
  },
  template: `
    <div class="ticket animate__animated animate__backInLeft">
      <div class="info">
        <div class="infoLeft">
          <div class="nameTag">
            <div class="company">
              <img src="./src/assets/img/NordStar.png" class="company__logo" />
              <h3 class="company__name">{{ flight.flightCompany }}</h3>
            </div>
            <div class="tag">
              <p class="tag__flightNumber">{{ flight.flightNumber }}</p>
              <p class="tag__fast" v-if="false">Самый быстрый</p>
              <p class="tag__recommended" v-if="flight.isBestPrice">Рекомендованный</p>
            </div>
          </div>
          <div class="schedule">
            <div class="departure">
              <p class="departure__time time">{{ flight.departure.time }}</p>
              <p class="departure__date date">
                <span class="icon-Calendar town-date__calendar"></span>{{ flight.departure.date }}
              </p>
            </div>
            <div class="travelTime">
              <p class="travelTime__tagAirpoty">{{ flight.departure.code }}</p>
              <div class="travelTime__time">
                <p>В пути {{ flight.duration }}</p>
              </div>
              <p class="travelTime__tagAirpoty">{{ flight.arrival.code }}</p>
            </div>
            <div class="arrival">
              <p class="arrival__time time">{{ flight.arrival.time }}</p>
              <p class="arrival__date date">
                <span class="icon-Calendar town-date__calendar"></span>{{ flight.arrival.date }}
              </p>
            </div>
          </div>
        </div>
        <div class="tarif">
          <p><span class="icon-HandLuggage"></span>Ручная кладь: {{ flight.family.luggage }}</p>
          <p><span class="icon-Baggage"></span>Багаж: {{ flight.family.baggage }}</p>
          <p><span class="icon-Return"></span>Возврат: {{ flight.family.return }}</p>
        </div>
      </div>
      <div class="buy">
        <button class="buy__btn">Выбрать за {{ formattedPrice }} Р</button>
        <p class="buy__info">Туда обратно, 1 взрослый</p>
        <div class="buy__border"></div>
        <div class="buy__circleTop buy__circle"></div>
        <div class="buy__circleBottom buy__circle"></div>
      </div>
    </div>
    `,
};
