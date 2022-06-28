<template>
  <Header />
  <div class="main-container logon-bg">
    <div class="logon-container">
      <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
      <h1 class="my-2">Inicio de Sesión</h1>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <label for="username">Correo</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Contraseña</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <router-link to="/Home" class="text-center w-100">
          <Button label="Ingresar" class="w-100" />
        </router-link>
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span
          >¿No tienes una cuenta?,
          <router-link to="/Register" class="text-center w-100"
            >Registrate</router-link
          ></span
        >
      </span>
    </div>
  </div>
  <Footer />

</template>

<script>
import Header from "../../components/Header.vue";
import Footer from '../../components/Footer.vue';


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
    Footer
  },
};
</script>

<style></style>
