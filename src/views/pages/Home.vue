<template>
  <Header :logged="true" />

  <div class="main-container flex-container pt-2 px-4">
    <div class="controls w-100 m-0 p-0">
      <Button
        icon="pi pi-check"
        label="Crear Evento"
        @click="$refs.eventModal.openNew()"
      />
    </div>

    <div class="controls w-100 mt-7 p-0">
      <Button
        icon="pi pi-book"
        label="Mis Eventos"
        @click="$refs.EventOwn.getEventOwn()"
      />

      <label class="mt-2"></label>
      <div class="d-inline-flex p-2 simple-list-example-scrollspy text-center">
        <a class="list-group-item list-group-item-action evpriv p-3 mb-2" href="#private">
          <i class="pi pi-lock"></i> Eventos Privados</a
        >
      </div>
    </div>
    <Card
      class="w-30"
      style="padding: 1rem; margin-top: 15px"
      v-for="eve in evento"
      :key="eve._id"
    >
      <template #header>
        <img
          :src="eve.image?.secureUrl"
          alt="Imagen del evento"
          style="height: 250px"
          v-if="eve.image?.secureUrl"
        />
        <img
          src="../../assets/img/bg.jpg"
          alt="Imagen del evento"
          style="height: 250px"
          v-else
        />
      </template>
      <template #title class="content"> Evento: {{ eve.title }} </template>
      <template #subtitle>Ponente: {{ eve.speaker }} </template>
      <template #footer>
        <Button
          label="Editar"
          icon="pi pi-pencil"
          class="p-button-text"
          @click="$refs.eventModal.openUpdate(eve)"
        />
        <Button
          label="Eliminar"
          icon="pi pi-times-circle"
          class="p-button-text"
          @click="remove(eve._id)"
        />
      </template>
    </Card>
  </div>

  <div class="container bg-color text-bg-info mt-4">
    <p class="text-center text-muted fs-3"><a id="private">Eventos Privados</a></p>
  </div>
  <div class="main-container flex-container pt-2 px-4">
    <Card
      class="w-30"
      v-for="privateEve in eventoprivado"
      :key="privateEve._id"
      style="padding: 1rem; margin-top: 15px"
    >
      <template #header>
        <img
          :src="privateEve.image?.secureUrl"
          alt="Imagen del evento"
          style="height: 250px"
          v-if="privateEve.image?.secureUrl"
        />
        <img
          src="../../assets/img/bg.jpg"
          alt="Imagen del evento"
          style="height: 250px"
          v-else
        />
      </template>
      <template #title class="content">Evento: {{ privateEve.title }} </template>
      <template #subtitle>Ponente: {{ privateEve.speaker }} </template>
      <template #footer>
        <Button
          label="Editar"
          icon="pi pi-pencil"
          class="p-button-text"
          @click="update(privateEve._id)"
        />
        <Button
          label="Eliminar"
          icon="pi pi-times-circle"
          class="p-button-text"
          @click="remove(privateEve._id)"
        />
      </template>
    </Card>
  </div>

  <!-- Modal ref -->
  <EventModal ref="eventModal" />
  <EventOwn ref="EventOwn" />
</template>

<script>
import Header from "../../components/Header.vue";
import EventModal from "../../components/EventModal.vue";

import EventOwn from "../../components/EventOwn.vue";
import { fetchConToken } from "../../helpers/fetch.js";

export default {
  name: "Home",
  data() {
    return {
      evento: [],
      eventoprivado: [],
    };
  },
  mounted() {
    this.traerdata();
    this.eventprivate();
  },

  components: {
    Header,
    EventModal,
    EventOwn,
  },

  methods: {
    traerdata() {
      fetchConToken("api/v1/events/public", {}, "GET")
        .then((res) => {
          console.log(res.data.publicEvents);
          this.evento = res.data.publicEvents;
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al crear el evento.",
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
    async remove(_id) {
      if (confirm("Esta seguro de eliminar este evento??")) {
        const res = await fetchConToken(`api/v1/events/${_id}`, {}, "DELETE")
          .then((res) => {
            console.log("Elimine");
          })
          .catch(() => {
            alert(
              "Ha ocurrido un error",
              "Ocurrio un error al eliminar  el evento.",
              "error"
            );
          });
      }
    },
    async update(event) {
      console.log(event);
    },
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
  height: 240px;
  width: 300px;
  object-fit: cover;
}
</style>
