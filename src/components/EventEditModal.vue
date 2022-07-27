<template>
  <!-- FORMULARIO PARA CREAR EL EVENTO -->
  <Dialog v-model:visible="eventoDialog" :style="{ width: '550px' }" header="Editar Evento" :modal="true"
    class="p-fluid">

    <form :submit="this.handleSubmit"></form>
    <span class="vertical-group w-100 my-1">
      <label for="nombreEvento">Nombre del Evento</label>
      <InputText id="nombreEvento" type="text" class="w-100 p-inputtext-sm" v-model="evento.title"/>
    </span>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Descripcion del Evento: </label>
      <!--       <Textarea id="descripcion" v-model="inputDescription" required="true" rows="8" cols="60" /> -->
      <InputText id="descripcion" type="text" class="w-100 p-inputtext-sm" v-model="evento.description" />
    </span>

    <div class="flex-container">
      <span class="vertical-group w-100 my-1">
        <label for="modalidad">Modalidad del Evento</label>
        <InputText id="modalidad" type="text" class="w-100 p-inputtext-sm" v-model="evento.modality" />
        <!-- <Dropdown v-model="selectedModal" :options="Modalidades" optionLabel="name" placeholder="Seleccione Modalidad" /> -->
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="tipo">Tipo de Evento</label>
        <InputText id="tipo" type="text" class="w-100 p-inputtext-sm" v-model="evento.type" />
        <!--  <Dropdown v-model="selectedType" :options="Tipos" optionLabel="name" placeholder="Tipo de Evento" /> -->
      </span>
    </div>
    <div class="col-6">
      <div class="form-group">
        <label for="categoria">Categoria:</label>
        <select class="form-control" id="categoria" v-model="evento.category" required>
          <option v-for="categoria in category" :key="categoria" :value="categoria" :selected="categoria.name==evento.category.name" >{{ categoria.name }}</option>
        </select>
      </div>
    </div>

    <span class="vertical-group w-100 my-1">
      <label for="nombrePonente">Nombre del Ponente</label>
      <InputText id="nombrePonente" type="text" class="w-100 p-inputtext-sm" v-model="evento.speaker"/>
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="limparticipantes">Limite de participantes</label>
      <InputText id="limparticipantes" type="number" class="w-100 p-inputtext-sm" v-model="evento.limitParticipants"/>
    </span>

    <div class="flex-container">
      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="date"  :showIcon="true" type="text" v-model="evento.createdAt" />
          <label for="date">Fecha de Inicio</label>
        </div>
      </span>

      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="dateFin" :showIcon="true" type="text" v-model="evento.endDate" />
          <label for="dateFin">Fecha de Finalizacion</label>
        </div>
      </span>
    </div>

    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="this.hideDialog()" />
      <Button label="Actualizar" icon="pi pi-check" class="p-button-text" @click="this.handleSubmit" />
    </template>
  </Dialog>
</template>

<script >
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";
export default{
  name: "EventModal",

  props: {
    callback: {
      type: Function,
      required: true
    },
  },
  data() {
    return {
      evento: {},
      eventoDialog: false,
      submitted: false,
      category: [],
    };
  },
  methods: {
    handleSubmit() {

      fetchConToken(`api/v1/events/${this.evento._id}`, this.evento, "PUT")
        .then((res) => {
          this.eventoDialog = false;
          this.props.callback();
          customAlert("success", "Event updated successfully");
        })
        .catch(() => {
          this.eventoDialog = false;
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al traer las categorias.",
            "error"
          );
        });

    },
    openNew(e) {
      this.evento = e;
      this.submitted = false;
      this.eventoDialog = true;
    },
    hideDialog() {
      this.eventoDialog = false;
      this.submitted = false;
    },

    getCategory() {
      fetchConToken("api/v1/categories", {}, "GET")
        .then((res) => {
          this.category = res.data.categories;

        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al traer las categorias.",
            "error"
          );
        });
    },
  
  },
  created() {
    this.getCategory();
  },
}

</script>

<style>
::v-deep(.p-dialog-titlebar) {
  background-color: red;
}
</style>
