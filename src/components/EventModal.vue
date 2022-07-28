<template>
  <!-- FORMULARIO PARA CREAR EL EVENTO -->
  <Dialog v-model:visible="eventoDialog" :style="{ width: '450px' }"
    :header="modalType == 1 ? 'Crear Evento' : 'Actualizar Evento'" :modal="true" class="p-fluid">
    <span class="vertical-group w-100 my-1">
      <label for="nombreEvento">Nombre del Evento</label>
      <InputText id="nombreEvento" type="text" class="w-100 p-inputtext-sm" v-model="inputTitle" />
    </span>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Descripcion del Evento: </label>
      <!--       <Textarea id="descripcion" v-model="inputDescription" required="true" rows="8" cols="60" /> -->
      <InputText id="descripcion" type="text" class="w-100 p-inputtext-sm" v-model="inputDescription" />
    </span>

    <div class="flex-container">
      <span class="vertical-group w-100 my-1">
        <label for="modalidad">Modalidad del Evento</label>
        <InputText id="modalidad" type="text" class="w-100 p-inputtext-sm" v-model="inputModalidad" />
        <!-- <Dropdown v-model="selectedModal" :options="Modalidades" optionLabel="name" placeholder="Seleccione Modalidad" /> -->
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="tipo">Tipo de Evento</label>
        <InputText id="tipo" type="text" class="w-100 p-inputtext-sm" v-model="inputType" />
        <!--  <Dropdown v-model="selectedType" :options="Tipos" optionLabel="name" placeholder="Tipo de Evento" /> -->
      </span>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="categoria">Categoria:</label>
        <select v-model="categorySelect" class="form-control" id="categoria">
          <option value="" selected disable>--Seleccione una categoria--</option>
          <option v-for="categoria in category" :key="categoria" :value="categoria._id">
            {{ categoria.name }}
          </option>
        </select>
      </div>
    </div>

    <span class="vertical-group w-100 my-1">
      <label for="nombrePonente">Nombre del Ponente</label>
      <InputText id="nombrePonente" type="text" class="w-100 p-inputtext-sm" v-model="inputPonente" />
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="limparticipantes">Limite de participantes</label>
      <InputText id="limparticipantes" type="number" class="w-100 p-inputtext-sm" v-model="inputParticipants" />
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

    <span class="vertical-group w-100 my-1">
      <label for="imagen">Imagen</label>
      <Input id="imagen" type="file" class="form-control form-control-sm" @change="uploadImg" />
    </span>

    <template #footer>
      <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
      <Button :label="modalType == 1 ? 'Guardar' : 'Actualzar'" icon="pi pi-check" class="p-button-text"
        @click="registerEvent()" />
    </template>
  </Dialog>
</template>

<script>
import { customAlert } from "../helpers/alerts";
import { fetchConToken, fetchConTokenformData } from "../helpers/fetch";

export default {
  props: [],

  name: "registerEvent",
  data() {
    return {
      file: "",
      eventos: null,
      evento: {},
      categorySelect: {},
      category: [],
      submitted: false,
      eventoDialog: false,
      inputTitle: "",
      inputDescription: "",
      inputModalidad: "",
      inputType: "",
      inputPonente: "",
      inputParticipants: "",
      inputDate: "",
      inputDateFin: "",
      modalType: 1,
      currentEvent: null,
      registeredParticipants: 0,
    };
  },
  methods: {
    openUpdate({ ...evento }) {
      this.getCategory();
      this.modalType = 2;
      this.submitted = false;
      this.eventoDialog = true;

      let UpdateEvent = { ...evento };
      this.categorySelect = "";
      this.evento = UpdateEvent.evento;
      this.inputTitle = UpdateEvent.title;
      this.inputDescription = UpdateEvent.description;
      this.inputModalidad = UpdateEvent.modality;
      this.inputType = UpdateEvent.type;
      this.inputPonente = UpdateEvent.speaker;
      this.inputParticipants = UpdateEvent.limitParticipants;
      this.inputDate = UpdateEvent.startDate;
      this.inputDateFin = UpdateEvent.endDate;
      this.currentEvent = UpdateEvent._id;
      this.registeredParticipants = UpdateEvent.registeredParticipants;
    },
    openNew() {
      this.modalType = 1;
      this.submitted = false;
      this.eventoDialog = true;
      this.getCategory();
    },
    hideDialog() {
      this.eventoDialog = false;
      this.submitted = false;
    },
    uploadImg(event) {
      this.file = event.target.files[0];
    },

    getCategory() {
      fetchConToken("api/v1/categories", {}, "GET")
        .then((res) => {
          console.log(res.data.categories);
          this.category = res.data.categories;
        })
        .catch((err) => {
          console.log(err);
          customAlert(
            "Ha ocurrido un error",
            "Ocurrio un error al traer las categorias.",
            "error"
          );
        });
    },

    registerEvent() {
      this.submitted = true;
      let event = {
        title: this.inputTitle,
        description: this.inputDescription,
        modality: this.inputModalidad,
        type: this.inputType,
        category: this.categorySelect,
        speaker: this.inputPonente,
        limitParticipants: parseInt(this.inputParticipants),
        startDate: this.inputDate.toString(),
        endDate: this.inputDateFin.toString(),
        registeredParticipants: 0,
      };
      let form_data = new FormData();

      for (let key in event) {
        form_data.append(key, event[key]);
      }
      form_data.append("image", this.file);
      if (this.modalType == 1) {
        if (form_data.get("image") === "") {
          form_data.delete("image")
        }
        fetchConTokenformData("api/v1/events", form_data, "POST", {})
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
              .then(() => { })
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
      } else if (this.modalType == 2) {
        if (form_data.get("image") === "") {
          form_data.delete("image")
        }

        if (form_data.get("category") === "") {
          form_data.delete("category")

        }
        console.log(form_data.get("image"))
        console.log(typeof (form_data.get("image")))


        /* form_data.append("_id", this.currentEvent); */
        /*  form_data.append("registeredParticipants", parseInt(this.registeredParticipants)); */
        fetchConTokenformData(`api/v1/events/${this.currentEvent}`, form_data, "PUT", {})
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
              .then(() => { })
              .catch((err) => {
                console.log("Ha ocurrido un error al definir la alerta");
                console.log(err);
              });
          })
          .catch((err) => {
            this.hideDialog();
            console.log(err)
            console.log(form_data.values)
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Problema al editar  el evento",
              life: 3000,
            });
            customAlert(
              "Ha ocurrido un error",
              "Ocurrio un error al editar el evnto el evento.",
              "error"
            );
          });
      }
    },
  },
  computed: {},
  components: {},
  created() {
    /* this.getCategory(); */
  },
};
</script>

<style>
::v-deep(.p-dialog-titlebar) {
  background-color: red;
}
</style>
