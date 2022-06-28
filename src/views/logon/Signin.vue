<template>
<Header/>
 <div class="main-container">
    <div class="logon-container">
        <h2 class="my-2">Inicio de Sesión</h2>
        <hr class="w-100">
      <span class="vertical-group w-100 my-1">
        <label for="username">Correo</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Contraseña</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <Button label="Ingresar" class="w-100" />
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span>¿No tienes una cuenta?,
        <router-link to="/Register" class="text-center w-100">Registrate</router-link></span>
      </span>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';

export default {
    props: [],
    mounted() {},
    data() {
      return {};
    },
    methods: {},
    computed: {},
    components: {
      Header
    }
  };
</script>

<style>

</style>
