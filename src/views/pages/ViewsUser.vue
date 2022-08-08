<template>
  <Header :logged="true" />

  <div class="main-container flex-container pt-2 px-4">
    <div class="controls w-100 m-0 p-0">
      <div class="d-inline-flex p-2 simple-list-example-scrollspy text-center">
        <a class="list-group-item list-group-item-action evpriv p-3 mb-2" href="#private">
          <i class="pi pi-lock"></i> Eventos Privados</a>
      </div>
    </div>

    <Card class="w-30" v-for="eve in evento" :key="eve._id" style="padding: 1rem; margin-top: 15px">
      <template #header>
        <img :src="eve.image?.secureUrl" alt="no funciono" style="height: 150px" icon="pi pi-pencil" />
      </template>
      <template #title> Evento: {{ eve.title }} </template>
      <template #content> Ponente: {{ eve.speaker }} </template>
      <template #footer>
        <Button label="Suscribirse" icon="pi pi-pencil" class="p-button-text" @click="subscribe(eve._id)" />
      </template>
    </Card>
  </div>

  <div class="container bg-color text-bg-info mt-4">
    <p class="text-center text-muted fs-3"><a id="private">Eventos Privados</a></p>
  </div>
  <div class="main-container flex-container pt-2 px-4">
    <Card class="w-30" style="padding: 1rem; margin: 1rem" v-for="privateEve in eventoprivado" :key="privateEve._id">
      <template #header>
        <img :src="privateEve.image?.secureUrl" alt="Image" style="height: 150px" icon="pi pi-pencil" />
      </template>
      <template #title class="content"> Evento: {{ privateEve.title }} </template>
      <template #subtitle>Ponente: {{ privateEve.speaker }} </template>
      <template #footer>
        <Button label="Suscribirse" icon="pi pi-pencil" class="p-button-text" @click="subscribe(privateEve._id)" />
      </template>
    </Card>
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
            console.log("Se sucribio al evento");
            console.log(_id);
          })
          .catch(() => {
            alert(
              "Ha ocurrido un error",
              "Ocurrio un error al suscribirse al evento  el evento.",
              "error"
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
</style>
