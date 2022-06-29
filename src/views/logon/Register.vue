<template>
  <Header :logged="false" />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
        <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
        <h1 class="my-2">Registro</h1>
        <hr class="w-100">
      <span class="vertical-group w-100 my-1">
        <label for="username">Nombre</label>
        <InputText id="username" type="text" class="w-100 p-inputtext-sm" v-model="inputName"/>
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="userlastname">Apellido</label>
        <InputText id="userlastname" placeholder="Nombre" type="text" class="w-100" v-model="inputLastname" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="useremail">Correo</label>
        <InputText id="useremail" type="text" class="w-100" v-model="inputEmail" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="userpassword">Contraseña</label>
        <InputText id="userpassword" type="text" class="w-100" v-model="inputPassword" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="userpasswordv">Confirmar Contraseña</label>
        <InputText id="userpasswordv" type="text" class="w-100" v-model="inputPasswordv" />
      </span>
      <span class="vertical-group w-100 my-1">
        <Button @click="register()" label="Registrar" class="w-100" />
      </span>
      <span class="vertical-group centered-group w-100 my-1 fs-6 text-center">
        <span>¿Ya tienes una cuenta?,
        <router-link to="/Signin" class="text-center w-100">Inicia Sesión</router-link></span>
      </span>
    </div>
  </div>
  <Footer />

</template>


<script>

import Header from "../../components/Header.vue";
import Footer from '../../components/Footer.vue';
import { fetchSinToken } from "../../helpers/fetch";
import { customAlert } from "../../helpers/alerts";


export default {
 name: "register",
  data() {
    return { inputName: "", inputLastname: "", inputEmail: "", inputPassword: "", inputPasswordv:""};
  },
  components: {
    Header,
    Footer
  },
 
  methods: {
   
    register() {
      fetchSinToken(
        "api/v1/users/register",
       {  "email": this.inputEmail,
          "firstName": this.inputName,
          "lastName": this.inputLastname,
          "password": this.inputPassword,
          "passwordConfirmation": this.inputPasswordv,
         },
         "POST",
         {},
         ).then(res => console.log (res))
    },
  },
 
 
  props: [],
  mounted() {},
  
  computed: {},
  
};
</script>

<style></style>
