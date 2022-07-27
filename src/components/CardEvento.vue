<template>
  <Dialog v-model:visible="eventoDialog" :style="{ width: '800px', align: center }" header="Eventos Disponibles"
    :modal="true">
    <div class="p-flu">
      <Card style="width: 45%; padding: 1rem; margin: 1rem" v-for="eve in evento" :key="eve._id">
        <template #header>
          <img src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg"
            style="height: 150px" icon="pi pi-pencil" />
        </template>
        <template #title class="content"> Evento: {{ eve.title }} </template>

        <template #subtitle>Ponente: {{ eve.speaker }} </template>

        <template #footer>
          <Button label="Editar" icon="pi pi-pencil" class="p-button-text" @click="update(eve)" />
          <Button label="Eliminar" icon="pi pi-times-circle" class="p-button-text" @click="
  remove(eve._id);
hideDialog;
          " />
        </template>
      </Card>
    </div>
    <template>
      <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
      <EventEditModal ref="EventEditModal"  :callback="hideDialog" />
    </template>
  </Dialog>
</template>

<script>
import EventEditModal from "./EventEditModal.vue";
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";

export default {
  
  mounted() { },
  data() {
    return {
      eventos: null,
      evento: [],
      submitted: false,
      eventoDialog: false,
      visibleFull: false,
    };
  },

  methods: {
    traerdata() {
      this.submitted = true;
      this.eventoDialog = true;
      fetchConToken("api/v1/events/public", {}, "GET")
        .then((res) => {
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

    async remove(_id) {
      if (confirm("Esta seguro de eliminar este evento??")) {
        const res = await fetchConToken(`api/v1/events/${_id}`, {}, "DELETE")
          .then((res) => {
            console.log("Elimine");
            this.hideDialog();
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

     update(event) {
      // console.log(event._id);
      this.$refs.EventEditModal.openNew({...event});
    },

    hideDialog() {
      this.eventoDialog = false;
      this.submitted = false;
    },
  },
  computed: {},
  components: {
    EventEditModal,
  },
};
</script>

<style scoped>
img {
  height: 250px;
  object-fit: cover;
}
</style>
