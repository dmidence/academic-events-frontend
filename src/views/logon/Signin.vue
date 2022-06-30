<template>
  <Header :logged="false" />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
      <h1 class="my-2">Inicio de Sesión</h1>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <label for="userEmail">Correo</label>
        <InputText id="userEmail" type="text" class="w-100" v-model="inputEmail" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="userPassword">Contraseña</label>
        <InputText id="userPassword" type="password" class="w-100" v-model="inputPassword" />
      </span>
      <span class="vertical-group w-100 my-1">
        <!-- <router-link to="/Home" class="text-center w-100"> -->
          <Button label="Ingresar" @click="signin()" class="w-100" />
        <!-- </router-link> -->
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
import { fetchSinToken } from "../../helpers/fetch";
import { customAlert } from "../../helpers/alerts";

export default {
  name: "login",
  data() {
    return { inputEmail: "", inputPassword: ""};
  },
  components: {
    Header,
    Footer
  },
 
  methods: {
   
    signin() {
    fetchSinToken(
        "api/v1/sessions",
       {  "email": this.inputEmail,
          "password": this.inputPassword,
        },
         "POST",
         {},
         ).then(res =>{
          console.log(res.data);
          sessionStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
          this.$router.push("Home");
          })
          .catch((err) => {
         console.log("err")
        });
    },

  },
  
 
  props: [],
  mounted() {},
  
 
  
};
</script>

<style></style>
