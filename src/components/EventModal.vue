<template>
  <!-- FORMULARIO PARA CREAR EL EVENTO -->
  <Dialog
    v-model:visible="eventoDialog"
    :style="{ width: '450px' }"
    header="Creacion de Evento"
    :modal="true"
    class="p-fluid"
  >
    <span class="vertical-group w-100 my-1">
      <label for="nombreEvento">Nombre del Evento</label>
      <InputText
        id="nombreEvento"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="evento.nombreEvento"
      />
    </span>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Descripcion del Evento: </label>
      <Textarea
        id="descripcion"
        v-model="evento.descripcion"
        required="true"
        rows="8"
        cols="60"
      />
    </span>
    <div class="flex-container">
      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="date" v-model="evento.date" :showIcon="true" />
          <label for="date">Fecha de Inicio</label>
        </div>
      </span>

      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="dateFin" v-model="evento.dateFin" :showIcon="true" />
          <label for="dateFin">Fecha de Finalizacion</label>
        </div>
      </span>
    </div>

    <span class="vertical-group w-100 my-1">
      <label for="limparticipantes">Limite de participantes</label>
      <InputText
        id="limparticipantes"
        type="number"
        class="w-100 p-inputtext-sm"
        v-model="evento.limparticipantes"
      />
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="nombrePonente">Nombre del Ponente</label>
      <InputText
        id="nombrePonente"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="evento.nombrePonente"
      />
    </span>

    <span><label class="mb-3">Modalidad</label></span>
    <span class="vertical-group w-100 my-1">
      <div class="field-radiobutton col-6">
        <RadioButton
          id="category1"
          name="category"
          value="Historia"
          v-model="evento.category"
        />
        <label for="category1">&nbsp;Presencial&nbsp;</label>
      </div>
      <p>&nbsp;&nbsp;&nbsp;</p>
      <div class="field-radiobutton col-6">
        <RadioButton
          id="category2"
          name="category"
          value="Matematicas"
          v-model="evento.category"
        />
        <label for="category2">&nbsp;Online&nbsp;</label>
      </div>
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="nombreCat">Nombre de la categoria del Evento</label>
      <InputText
        id="nombreCat"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="evento.nombreCat"
      />
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="nombreCat">URL del Evento</label>
      <InputText id="url" type="text" class="w-100 p-inputtext-sm" v-model="evento.url" />
    </span>

    <template #footer>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        class="p-button-text"
        @click="hideDialog"
      />
      <Button
        label="Guardar"
        icon="pi pi-check"
        class="p-button-text"
        @click="saveProduct"
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: [],

  mounted() {},
  data() {
    return {
      eventos: null,
      evento: {},
      submitted: false,
      eventoDialog: false,
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
  components: {},
};
</script>

<style>

</style>
