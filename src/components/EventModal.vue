<template>
  <!-- FORMULARIO PARA CREAR EL EVENTO -->

  <Dialog v-model:visible="eventoDialog" :style="{ width: '450px', zIndex: '999' }"
    :header="modalType == 1 ? 'Crear Evento' : 'Actualizar Evento'" :modal="true" :autoZIndex="false" class="p-fluid">
    <span class="vertical-group w-100 my-1">
      <label for="nombreEvento">Nombre del Evento</label>
      <InputText id="nombreEvento" type="text" class="w-100 p-inputtext-sm" v-model="inputTitle"
        @blur="validate('title')" />
      <span class="p-error-text" v-if="errors.title">
        {{ errors.title }}
      </span>
    </span>

    <span class="vertical-group w-100 my-2">
      <label for="descripcion">Descripcion del Evento: </label>

      <!--       <Textarea id="descripcion" v-model="inputDescription" required="true" rows="8" cols="60" /> -->
      <InputText id="descripcion" type="text" class="w-100 p-inputtext-sm" v-model="inputDescription"
        @blur="validate('description')" />
      <span class="p-error-text" v-if="errors.description">
        {{ errors.description }}
      </span>
    </span>

    <div class="flex-container">
      <div class="col-12">
        <div class="form-group">
          <label for="modalidad">Modalidad del Evento:</label>
          <select v-model="inputModalidad" class="form-control" id="modalidad" @blur="validate('modalidad')">
            <option value="" selected disable>
              --Seleccione una Modalidad--
            </option>
            <option value="virtual">Virtual</option>
            <option value="presencial">Presencial</option>
          </select>
          <span class="p-error-text" v-if="errors.modalidad">
            {{ errors.modalidad }}
          </span>
        </div>
      </div>

      <!-- <span class="vertical-group w-100 my-1">
        <label for="modalidad">Modalidad del Evento</label>
        <InputText id="modalidad" type="text" class="w-100 p-inputtext-sm" v-model="inputModalidad" />
         <Dropdown v-model="selectedModal" :options="Modalidades" optionLabel="name" placeholder="Seleccione Modalidad" /> -->
      <!-- </span> -->

      <div class="col-12">
        <div class="form-group">
          <label for="tipo">Tipo de Evento:</label>
          <select v-model="inputType" class="form-control" id="tipo" @blur="validate('tipo')">
            <option value="" selected disable>--Seleccion un Tipo--</option>
            <option value="publico">Público</option>
            <option value="privado">Privado</option>
          </select>
          <span class="p-error-text" v-if="errors.tipo">
            {{ errors.tipo }}
          </span>
        </div>
      </div>

      <!-- <span class="vertical-group w-100 my-1">
        <label for="tipo">Tipo de Evento</label>
        <InputText
          id="tipo"
          type="text"
          class="w-100 p-inputtext-sm"
          v-model="inputType"
        /> -->
      <!--  <Dropdown v-model="selectedType" :options="Tipos" optionLabel="name" placeholder="Tipo de Evento" /> -->
      <!-- </span> -->
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="categoria">Categoria:</label>
        <select v-model="categorySelect" class="form-control" id="categoria" @blur="validate('categoria')">
          <option value="" selected disable>
            --Seleccione una categoria--
          </option>
          <option v-for="categoria in category" :key="categoria" :value="categoria._id">
            {{ categoria.name }}
          </option>
        </select>
        <span class="p-error-text" v-if="errors.categoria">
          {{ errors.categoria }}
        </span>
      </div>
    </div>

    <span class="vertical-group w-100 my-1">
      <label for="nombrePonente">Nombre del Ponente</label>
      <InputText id="nombrePonente" type="text" class="w-100 p-inputtext-sm" v-model="inputPonente"
        @blur="validate('speaker')" />
      <span class="p-error-text" v-if="errors.speaker">
        {{ errors.speaker }}
      </span>
    </span>

    <span class="vertical-group w-100 my-1">
      <label for="limparticipantes">Limite de participantes</label>
      <InputText id="limparticipantes" type="number" class="w-100 p-inputtext-sm" v-model="inputParticipants"
        @blur="validate('limitParticipants')" />
      <span class="p-error-text" v-if="errors.limitParticipants">
        {{ errors.limitParticipants }}
      </span>
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
      <Input id="imagen" type="file" class="form-control form-control-sm" accept="image/jpeg, image/png"
        @change="uploadImg" />
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
    const validates = {
      title: [
        {
          message: "El titulo es requerido",
          validator: (value) => {
            return value.length > 0;
          },
        },
        {
          message: "El titulo debe tener entre 3 y 50 caracteres",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            if (value.length > 50) {
              return false;
            }
            if (value.length < 3) {
              return false;
            }
            return true;
          },
        },
      ],
      description: [
        {
          required: true,
          message: "La descripcion es requerida",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
        {
          message: "La descripcion debe tener entre 3 y 50 caracteres",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            if (value.length > 50) {
              return false;
            }
            if (value.length < 3) {
              return false;
            }
            return true;
          },
        },
      ],
      category: [
        {
          required: true,
          message: "La categoria es requerida",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
      ],
      speaker: [
        {
          required: true,
          message: "El ponente es requerido",
          validator: (value) => {
            if (value == null) {
              return false;
            }
            return true;
          },
        },
        {
          message: "El ponente debe tener entre 3 y 50 caracteres",
          validator: (value) => {
            if (value == null) {
              return false;
            }
            if (value.length > 50) {
              return false;
            }
            if (value.length < 3) {
              return false;
            }
            return true;
          },
        },
      ],
      modalidad: [
        {
          message: "La modalidad es requerida",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
      ],
      limitParticipants: [
        {
          message: "El limite de participantes es requerido",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
        {
          message:
            "El limite de participantes debe tener entre 1 y 50 caracteres",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            if (value.length > 50) {
              return false;
            }
            if (value.length < 1) {
              return false;
            }
            return true;
          },
        },
      ],
      startDate: [
        {
          message: "La fecha de inicio es requerida",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
      ],
      endDate: [
        {
          message: "La fecha de fin es requerida",
          validator: (value) => {
            if (value == "") {
              return false;
            }
            return true;
          },
        },
      ],
      registeredParticipants: [
        {
          message: "El numero de participantes registrados es requerido",
          validator: (value) => {
            if (value == "") {
              return false;
            }

            return true;
          },
        },
        {
          message:
            "El numerode participantes registrados debe tener entre 2 y 50 ",
          validator: (value) => {
            value = parseInt(value);
            if (value == "") {
              return false;
            }
            if (value > 50) {
              return false;
            }
            if (value < 2) {
              return false;
            }
            return true;
          },
        },
      ],
    };

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
      errors: {},
      validates,
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
      // validate file size
      if (event.target.files[0].size > 1000000) {
        customAlert(
          "Ha ocurrido un error",
          "El archivo es muy grande.",
          "error"
        );
        event.target.value = "";
        return;
      }
      // validate file type
      if (
        event.target.files[0].type !== "image/png" &&
        event.target.files[0].type !== "image/jpeg"
      ) {
        customAlert(
          "Ha ocurrido un error",
          "El archivo no es una imagen.",
          "error"
        );
        event.target.value = "";
        return;
      }
      if (!event.target.files[0].name.endsWith('.png') && !event.target.files[0].name.endsWith('.jpg')
      ) {
        customAlert(
          "Ha ocurrido un error",
          "El archivo no es una imagen.",
          "error"
        );
        event.target.value = "";
        return;
      }
      console.log(event.target.files[0])
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
      if (!this.ValidateSubmit()) {
        this.submitted = false;
        customAlert(
          "Ha ocurrido un error",
          "Verifique los campos del formulario.",
          "error"
        );
        return;
      }
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
          form_data.delete("image");
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
            this.$router.go(0);
            this.hideDialog();

            customAlert(
              "Registro de Evento",
              "¡Evento creado correctamente!",
              "success"
            )
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
          form_data.delete("image");
        }

        if (form_data.get("category") === "") {
          form_data.delete("category");
        }
        console.log(form_data.get("image"));
        console.log(typeof form_data.get("image"));

        /* form_data.append("_id", this.currentEvent); */
        /*  form_data.append("registeredParticipants", parseInt(this.registeredParticipants)); */
        fetchConTokenformData(
          `api/v1/events/${this.currentEvent}`,
          form_data,
          "PUT",
          {}
        )
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

            this.$router.go(0);
            customAlert(
              "Registro de Evento",
              "¡Evento actualizado correctamente!",
              "success"
            )
              .then(() => { })

              .catch((err) => {
                console.log("Ha ocurrido un error al definir la alerta");
                console.log(err);
              });
          })
          .catch((err) => {
            this.hideDialog();
            console.log(err);
            console.log(form_data.values);
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
    validate(key) {
      this.errors = {};
      const inputs = {
        title: this.inputTitle,
        description: this.inputDescription,
        category: this.inputCategory,
        speaker: this.inputPonente,
        modalidad: this.inputModalidad,
        limitParticipants: this.inputParticipants,
        startDate: this.inputDate,
        endDate: this.inputDateFin,
        registeredParticipants: this.registeredParticipants,
      };
      this.validates[key].map((v) => {
        if (!v.validator(inputs[key])) {
          this.errors[key] = v.message;
        }
      });
    },
    ValidateSubmit() {
      const inputs = {
        title: this.inputTitle,
        description: this.inputDescription,
        category: this.inputCategory,
        speaker: this.inputPonente,
        modalidad: this.inputModalidad,
        limitParticipants: this.inputParticipants,
        startDate: this.inputDate,
        endDate: this.inputDateFin,
        registeredParticipants: this.registeredParticipants,
      };
      const valid = [
        "title",
        "description",
        "category",
        "speaker",
        "modalidad",
        "limitParticipants",
        "startDate",
        "endDate",
        // "registeredParticipants",
      ].map((key) => {
        return this.validates[key].every((validate) => {
          return validate.validator(inputs[key]);
        });
      });
      console.table(valid);
      return valid.every((v) => v);
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
