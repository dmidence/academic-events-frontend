<template>
  <Dialog header="Mis Eventos" v-model:visible="eventoDialog" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '850px' }" :maximizable="true" :modal="true">
    <div class="p-flu">
      <div class="card mb-3" style="width: 690px; padding: 1rem; margin: 2rem" v-for="eveOwn in eventOwn"
        :key="eveOwn._id">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="eveOwn.image?.secureUrl" class="img-fluid rounded-start" alt="image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Evento: {{ eveOwn.title }}</h5>
              <p class="card-text">Participantes Registrados: {{ eveOwn.registeredParticipants }}</p>
              <p class="card-text">Modalidad: {{ eveOwn.modality }} </p>
              <p class="card-text">Tipo: {{ eveOwn.type }}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              <Button icon="pi pi-ellipsis-v" label="Mas informacion" @click="infoEvents(eveOwn._id)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>

  <Dialog header="Usuarios Inscritos" v-model:visible="infoDialog" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '1000px' }" :maximizable="true" :modal="true">
    <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
        <tr v-for="info in eventInfo" :key="info._id">
          <td>{{ info.firstName }}</td>
          <td>{{ info.lastName }}</td>
          <td>{{ info.email }}</td>
        </tr>
      </table>
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
  width: 950;
  object-fit: cover;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: rgba(60, 185, 248, 0.615);
}
</style>
