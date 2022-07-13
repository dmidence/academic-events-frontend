<template>
  <Header :logged="false" />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
      <h1 class="my-2">Registro</h1>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <label for="username">Nombre</label>
        <InputText
          id="username"
          type="text"
          class="w-100 p-inputtext-sm"
          v-model="value"
        />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Apellido</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Correo</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Contraseña</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Confirmar Contraseña</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <Button label="Registrar" class="w-100" />
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span
          >¿Ya tienes una cuenta?,
          <router-link to="/Signin" class="text-center w-100"
            >Inicia Sesión</router-link
          ></span
        >
      </span>
    </div>
  </div>
  <Footer />
</template>


<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
