<template>
  
  <Dialog
    v-model:visible="eventoDialog"
    :style="{ width: '800px', align: center }"
    header="Eventos Disponibles"
    :modal="true"
    class="p-fluid"
    
  >
              <Card style="width: 255px" v-for="eve in evento" :key="eve._id"  >
                <template #header >
                    <img src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg" style="height: 150px" icon="pi pi-pencil" />
                </template>
                <template #title  class="content">
                Evento: {{eve.title}}
                </template>

                 <template #subtitle>Ponente: {{eve.speaker}}  </template>
                
                <template #footer>
                    <Button label="Editar" icon="pi pi-pencil"  class="p-button-text" @click="traerdata()"/>
                    <Button label="Eliminar" icon="pi pi-times-circle" class="p-button-text" @click="saveProduct"/>
                </template>
            </Card>    
            <template >
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
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";

export default {
  props: [],

  mounted() {},
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
          console.log(res.data.publicEvents);
         this.evento = res.data.publicEvents
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al crear el evento.",
            "error"
          );
        });

        
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
