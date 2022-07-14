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
        v-model="inputTitle"
      />
    </span>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Descripcion del Evento: </label>
      <!--       <Textarea id="descripcion" v-model="inputDescription" required="true" rows="8" cols="60" /> -->
      <InputText
        id="descripcion"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="inputDescription"
      />
    </span>

    <div class="flex-container">
      <span class="vertical-group w-100 my-1">
        <label for="modalidad">Modalidad del Evento</label>
        <InputText
          id="modalidad"
          type="text"
          class="w-100 p-inputtext-sm"
          v-model="inputModalidad"
        />
        <!-- <Dropdown v-model="selectedModal" :options="Modalidades" optionLabel="name" placeholder="Seleccione Modalidad" /> -->
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="tipo">Tipo de Evento</label>
        <InputText
          id="tipo"
          type="text"
          class="w-100 p-inputtext-sm"
          v-model="inputType"
        />
        <!--  <Dropdown v-model="selectedType" :options="Tipos" optionLabel="name" placeholder="Tipo de Evento" /> -->
      </span>
    </div>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Categoria: </label>
      <InputText
        id="category"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="inputCategory"
      />
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="nombrePonente">Nombre del Ponente</label>
      <InputText
        id="nombrePonente"
        type="text"
        class="w-100 p-inputtext-sm"
        v-model="inputPonente"
      />
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="limparticipantes">Limite de participantes</label>
      <InputText
        id="limparticipantes"
        type="number"
        class="w-100 p-inputtext-sm"
        v-model="inputParticipants"
      />
    </span>

    <div class="flex-container">
      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="date" v-model="inputDate" :showIcon="true" type="text" />
          <label for="date">Fecha de Inicio</label>
        </div>
      </span>

      <span class="vertical-group w-45 my-1">
        <div class="p-float-label">
          <Calendar id="dateFin" v-model="inputDateFin" :showIcon="true" type="text" />
          <label for="dateFin">Fecha de Finalizacion</label>
        </div>
      </span>
    </div>

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
        @click="registerEvent()"
      />
    </template>
  </Dialog>
</template>

<script>
import { parse } from "@babel/parser";
import { customAlert } from "../helpers/alerts";
import { fetchConToken } from "../helpers/fetch";

export default {
  props: [],
  mounted() {},

  name: "registerEvent",
  data() {
    return {
      /*  selectedModal: null,
      Modalidades: [
        { name: 'Virtual', optionValue: 'Virtual' },
        { name: 'Presencial', optionValue: 'Presencial' },
      ],
      selectedType: null,
      Tipos: [
        { name: 'Publico', optionValue: 'Publico' },
        { name: 'Privado', optionValue: 'Privado' },
      ],
 */
      eventos: null,
      evento: {},
      submitted: false,
      eventoDialog: false,
      inputTitle: "",
      inputDescription: "",
      inputModalidad: "",
      inputType: "",
      inputCategory: "",
      inputPonente: "",
      inputParticipants: "",
      inputDate: "",
      inputDateFin: "",
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
    registerEvent() {
      this.submitted = true;
      let event = {
        title: this.inputTitle,
        description: this.inputDescription,
        modality: this.inputModalidad,
        type: this.inputType,
        category: this.inputCategory,
        speaker: this.inputPonente,
        limitParticipants: parseInt(this.inputParticipants),
        startDate: this.inputDate.toString(),
        endDate: this.inputDateFin.toString(),
      };
      console.log(event);
      fetchConToken("api/v1/events", event, "POST", {})
        .then((res) => {
          console.log(res);
          (this.inputTitle = ""),
            (this.inputDescription = ""),
            (this.inputModalidad = ""),
            (this.inputType = ""),
            (this.inputCategory = ""),
            (this.inputPonente = ""),
            (this.inputParticipants = null),
            (this.inputDate = ""),
            (this.inputDateFin = "");

          this.hideDialog();
          customAlert("Registro de Evento", "¡Evento creado correctamente!", "success")
            .then(() => {})
            .catch((err) => {
              console.log("Ha ocurrido un error al definir la alerta");
              console.log(err);
            });
        })
        .catch(() => {
          this.hideDialog();
          this.$toast.add({
            severity: "success",
            summary: "Successful",
            detail: "Problema al crear el evento",
            life: 3000,
          });
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al crear el evento.",
            "error"
          );
        });
    },
  },
  computed: {},
  components: {},
};
</script>

<style></style>
