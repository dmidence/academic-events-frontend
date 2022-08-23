<template>
  <Header :logged="true" />
  <div class="main-container flex-container pt-2 px-4" v-if="loadPrivate && loadPublic">
    <div class="centered">
      <div class="containertitle">
        <h1>Eventos Publicos</h1>

        <DoughnutChart :chartData="allPublicEvents" />
      </div>
      <div class="containertitle">
        <h1>Eventos Privados</h1>

        <DoughnutChart :chartData="allPrivateEvents" />
      </div>
    </div>
  </div>
  <div class="main-container flex-container pt-2 px-4" v-else>
    <div class="centered-col">
      <div class="lds-dual-ring"></div>
      <strong><p>Cargando...</p></strong>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { fetchConToken } from "../../helpers/fetch";
import { customAlert } from "../../helpers/alerts";

import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  components: { Header, DoughnutChart },
  data() {
    return {
      allPublicEvents: {},
      allPrivateEvents: {},
      loadPublic: false,
      loadPrivate: false,
    };
  },
  methods: {
    async publicEvents() {
      try {
        let response = await fetchConToken("api/v1/events/public", {}, "GET");
        this.loadPublic = true;
        return response.data.publicEvents;
      } catch (error) {
        console.log(error);
        customAlert(
          "Ha ocurrido un error",
          "Ocurrio un error al cargar los eventos publicos",
          "error"
        );
      }
    },
    async privateEvents() {
      try {
        let response = await fetchConToken("api/v1/events/private", {}, "GET");
        this.loadPrivate = true;
        return response.data.privateEvents;
      } catch (error) {
        console.log(error);
        customAlert(
          "Ha ocurrido un error",
          "Ocurrio un error al cargar los eventos privados",
          "error"
        );
      }
    },
    transform(events) {
      let set = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
      };

      let bgColors = [
        "#77CEFF",
        "#0079AF",
        "#123E6B",
        "#97B0C4",
        "#A5C8ED",
        "#c47f25",
        "#000",
        "#c23d18",
        "#8ac425",
        "#7f25c4",
        "#c125c4",
        "#c4b925",
        "#c4252a",
      ];

      events.forEach((event, i) => {
        let random = Math.floor(Math.random() * bgColors.length);
        set.labels.push(event.title);
        set.datasets[0].data.push(event.subscribers.length);
        set.datasets[0].backgroundColor.push(bgColors[i] || bgColors[random]);
      });
      return set;
    },
  },
  async mounted() {
    try {
      this.allPublicEvents = this.transform(await this.publicEvents());
      this.allPrivateEvents = this.transform(await this.privateEvents());
    } catch (err) {
      this.error = true;
      console.log(err);
    }
  },
};
</script>

<style>
.centered {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
}

.containertitle {
  padding: 1.3rem 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  display: block;
  width: 100%;
  font-size: 1.75em;
  margin-bottom: 0.5rem;
}
.centered-col {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #2196f3;
  border-color: #2196f3 transparent #2196f3 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
