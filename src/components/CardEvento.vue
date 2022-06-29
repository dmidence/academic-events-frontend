<template>
  <!-- FORMULARIO PARA CREAR EL EVENTO -->
  <Dialog
    v-model:visible="eventoDialog"
    :style="{ width: '950px', align: center }"
    header="Eventos Disponibles"
    :modal="true"
    class="p-fluid"
  >

        <Card style="width: 250px">
            <template #header >
                <img src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg" style="height: 150px" icon="pi pi-pencil" />
            </template>
            <template #title>
             Evento:
            </template>
            <template #footer>
                <Button label="Editar" icon="pi pi-pencil"  class="p-button-text" @click="$refs.eventModal.openNew()"/>
                <Button label="Eliminar" icon="pi pi-times-circle" class="p-button-text" @click="saveProduct"/>
            </template>
        </Card>

        <template #footer>
          <Button
            label="Cancelar"
            icon="pi pi-times"
            class="p-button-text"
            @click="hideDialog"
        />

        <EventModal ref = "eventModal"/>
        </template>
 </Dialog>





</template>

<script>
import EventModal from './EventModal.vue';
export default {
  props: [],

  mounted() {},
  data() {
    return {
      eventos: null,
      evento: {},
      submitted: false,
      eventoDialog: false,
      visibleFull: false,
    };
  },

  methods: {
    openNew() {
      this.evento = {};
      this.submitted = false;
      this.eventoDialog = true;
     


    },
    hideDialog() {
      this.eventoDialog = false;
      this.submitted = false;
    },
  },
  computed: {},
  components: {
    EventModal,
  },
};
</script>

<style  scoped>
img {
  height: 250px;
  object-fit: cover;
}
</style>
