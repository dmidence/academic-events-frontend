<template>
  <Header :logged="true" />
  <div>
    <p><a id="publicos"></a></p>
  </div>
  <div class="main-container flex-container pt-2 px-4">
    <div class="d-inline-flex p-2 simple-list-example-scrollspy text-center">
      <a class="list-group-item list-group-item-action evpriv p-3 mb-2" href="#private">
        <i class="pi pi-arrow-down"></i> Eventos Privados</a
      >
    </div>
    <div class="container1">
      <h1>Eventos Publicos</h1>
    </div>

    <div class="container-card">
      <div class="card" v-for="eve in evento" :key="eve._id">
        <figure>
          <img :src="eve.image?.secureUrl" />
        </figure>
        <div class="contenido-card">
          <h3>{{ eve.title }}</h3>
          <p>Ponente: {{ eve.speaker }}</p>
          <a @click="subscribe(eve._id)">Subscribirse</a>
        </div>
      </div>
    </div>
    <!--Fin   Tarjetas-->
  </div>

  <div class="main-container flex-container pt-2 px-4">
    <div>
      <p><a id="private"></a></p>
    </div>

    <div class="container1">
      <h1>Eventos Privados</h1>
    </div>
    <div class="d-inline-flex p-2 simple-list-example-scrollspy text-center">
      <a class="list-group-item list-group-item-action evpriv p-3 mb-2" href="#publicos">
        <i class="pi pi-arrow-up"></i> Eventos Publicos</a
      >
    </div>

    <div class="container-card">
      <div class="card" v-for="privateEve in eventoprivado" :key="privateEve._id">
        <figure>
          <img :src="privateEve.image?.secureUrl" />
        </figure>
        <div class="contenido-card">
          <h3>{{ privateEve.title }}</h3>
          <p>Ponente: {{ privateEve.speaker }}</p>
          <a @click="subscribe(privateEve._id)">Subscribirse</a>
        </div>
      </div>
    </div>
  </div>

  <div class="container"></div>
</template>

<script>
import Header from "../../components/Header.vue";
import { customAlert } from "../../helpers/alerts.js";
import { fetchConToken } from "../../helpers/fetch.js";
export default {
  name: "ViewsUser",
  components: {
    Header,
  },

  methods: {
    eventpublic() {
      fetchConToken("api/v1/events/public", {}, "GET")
        .then((res) => {
          this.evento = res.data.publicEvents;
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al cargar el evento publico.",
            "error"
          );
        });
    },
    eventprivate() {
      this.eventoDialog = true;
      fetchConToken("api/v1/events/private", {}, "GET")
        .then((res) => {
          this.eventoprivado = res.data.privateEvents;
          console.log(res);
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al cargar el evento privado.",
            "error"
          );
        });
    },

    async subscribe(_id) {
      if (confirm("Esta seguro de suscribirse a este evento??")) {
        const res = await fetchConToken(`api/v1/events/subscribed/${_id}`, {}, "POST")
          .then((res) => {
            customAlert("Subscrito al Evento", "¡Gracias por inscribirte!", "success");
          })
          .catch(() => {
            customAlert(
              "Informacion del Evento",
              "¡Ya se encuentra subscurito a este evento!",
              "info"
            );
          });
      }
    },
  },
  mounted() {
    this.eventpublic();
    this.eventprivate();
  },

  data() {
    return {
      evento: [],
      eventoprivado: [],
      eventoDialog: false,
      visibleFull: false,
    };
  },
};
</script>

<style scoped>
.evpriv {
  font-size: large;
  color: orange;
  font-weight: bold;
}

.evpriv:hover {
  font-size: larger;
  color: darkslateblue;
}

img {
  height: 250px;
  object-fit: cover;
}

.container1 {
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

.container2 {
  padding: 1.3rem 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  display: block;
  width: 100%;
  font-size: 1.75em;
  margin-bottom: 0.5rem;
  background: linear-gradient(#78dbf95f, transparent);
}

/*Cards*/
.container-card {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1400px;
}

.title-cards {
  text-align: center;
  color: #7a7a7a;
}

.card {
  width: 22%;
  margin: 20px;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  transition: all 400ms ease-out;
  cursor: default;
}

.card:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-3%);
}

.card img {
  width: 100%;
  height: 210px;
}

.card .contenido-card {
  padding: 15px;
  text-align: center;
}

.card .contenido-card h3 {
  margin-bottom: 15px;
  color: #7a7a7a;
}

.card .contenido-card p {
  line-height: 1.8;
  color: #6a6a6a;
  font-size: 14px;
  margin-bottom: 5px;
}

.card .contenido-card a {
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  text-decoration: none;
  color: #2fb4cc;
  border: 1px solid #87cdda;
  border-radius: 4px;
  transition: all 400ms ease;
  margin-bottom: 5px;
}

.card .contenido-card a:hover {
  background: #2fb4cc;
  color: #fff;
}
</style>
