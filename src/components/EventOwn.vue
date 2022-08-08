<template>
  <Dialog header="Mis Eventos" v-model:visible="eventoDialog" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '850px' }" :maximizable="true" :modal="true">
    <div class="p-flu">
      <Card style="width: 350px; padding: 1rem; margin: 1rem" v-for="eveOwn in eventOwn" :key="eveOwn._id">
        <template #header>
          <img alt="user header" :src="eveOwn.image?.secureUrl" />
        </template>
        <template #title> Titulo: {{ eveOwn.title }} </template>
        <template #content>
          <p>Personas Registradas: {{ eveOwn.registeredParticipants }}</p>
          <p>Modalidad: {{ eveOwn.modality }}</p>
          <p>Tipo: {{ eveOwn.type }}</p>
        </template>
        <template #footer>
          <Button icon="pi pi-ellipsis-v" label="Mas informacion" @click="infoEvents(eveOwn._id)" />
        </template>
      </Card>
    </div>
  </Dialog>

  <Dialog header="Informacion del Evento" v-model:visible="infoDialog"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }" :style="{ width: '1050px' }" :maximizable="true" :modal="true">
    <div v-for="info in eventInfo" :key="info._id">
      <li>{{ info.email }}</li>
    </div>
  </Dialog>
</template>

<script>
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";

export default {
  data() {
    return {
      eventoDialog: false,
      infoDialog: false,
      eventOwn: [],
      eventInfo: [],
    };
  },
  methods: {
    getEventOwn() {
      this.eventoDialog = true;
      fetchConToken("api/v1/events/own", {}, "GET")
        .then((res) => {
          console.log(res.data.events);
          this.eventOwn = res.data.events;
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al traer los eventos que cree.",
            "error"
          );
        });
    },
    infoEvents(_id) {
      this.infoDialog = true
      fetchConToken(`api/v1/events/registeredUsers/${_id}`, {}, "GET")
        .then((res) => {
          console.log(res.data.events.subscribers);
          this.eventInfo = res.data.events.subscribers;
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error con la informacion del evento.",
            "error"
          );
        });

      /* this.$router.push("infoEvents"); */
    },
  },
  computed: {},
  components: {},
  created() { },
};
</script>

<style scoped>
img {
  height: 250px;
  object-fit: cover;
}
</style>
