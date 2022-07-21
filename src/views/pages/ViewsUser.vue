<template>
  <div>
    <h1>vistas que obtiene un usuario</h1>
  </div>
  <div class="controls w-100 m-0 p-0">
    <Button icon="pi pi-calendar" label="Eventos Publicos" @click="eventpublic()" />
  </div>
  <Button icon="pi pi-calendar" label="Eventos Privados" @click="eventprivate()" />

  <div class="main-container flex-container pt-2 px-4">
    <Card
      class="w-30"
      v-for="eve in evento"
      :key="eve._id"
      style="padding: 1rem; margin-top: 15px"
    >
      <template #header>
        <img
          src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg"
          style="height: 150px"
          icon="pi pi-pencil"
        />
      </template>
      <template #title> Evento: {{ eve.title }} </template>
      <template #content> Ponente: {{ eve.speaker }} </template>
      <template #footer>
        <Button icon="pi pi-check" label="Suscribirse" />
      </template>
    </Card>
  </div>

  <Dialog
    v-model:visible="eventoDialog"
    :style="{ width: '800px', align: center }"
    header="Eventos Privados"
    :modal="true"
  >
    <div class="p-flu">
      <Card
        style="width: 45%; padding: 1rem; margin: 1rem"
        v-for="privateEve in eventoprivado"
        :key="privateEve._id"
      >
        <template #header>
          <img
            src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg"
            style="height: 150px"
            icon="pi pi-pencil"
          />
        </template>
        <template #title class="content"> Evento: {{ privateEve.title }} </template>

        <template #subtitle>Ponente: {{ privateEve.speaker }} </template>

        <template #footer>
          <Button
            label="Suscribirse"
            icon="pi pi-pencil"
            class="p-button-text"
            @click="update(privateEve._id)"
          />
        </template>
      </Card>
    </div>
  </Dialog>
</template>

<script>
import { customAlert } from "../../helpers/alerts.js";
import { fetchConToken } from "../../helpers/fetch.js";

export default {
  name: "ViewsUser",
  components: {},
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
img {
  height: 250px;
  object-fit: cover;
}
</style>
