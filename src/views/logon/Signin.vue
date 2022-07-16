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
        <InputText
          id="userPassword"
          type="password"
          class="w-100"
          v-model="inputPassword"
        />
      </span>
      <span class="vertical-group w-100 my-1">
        <!-- <router-link to="/Home" class="text-center w-100"> -->
        <Button label="Ingresar" @click="signin()" class="w-100" />
        <!-- </router-link> -->
      </span>
      <div class="vertical-group centered-group w-100 my-1 fs-6">
        <span
          >¿No recuerda su contraseña?,
          <router-link to="/restorePassword" class="text-center w-100"
            >Restablecer contraseña</router-link
          ></span
        >
      </div>
      <div class="vertical-group centered-group w-100 my-1 fs-6">
        <span
          >¿No tienes una cuenta?,
          <router-link to="/Register" class="text-center w-100"
            >Registrate</router-link
          ></span
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

import { fetchSinToken, fetchConToken } from "../../helpers/fetch";

export default {
  name: "login",
  data() {
    return { inputEmail: "", inputPassword: "" };
  },
  components: {
    Header,
    Footer,
  },

  methods: {
    signin() {
      fetchSinToken(
        "api/v1/sessions",
        { email: this.inputEmail, password: this.inputPassword },
        "POST",
        {}
      )
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
          fetchConToken("api/v1/users/me", {}, "GET")
            .then((res) => {
              sessionStorage.setItem("userData", JSON.stringify(res.data));
              console.log(res.data);
              let role;
              !!(res.data.roles && res.data.roles.length > 0 && res.data.roles[0].name)
                ? (role = res.data.roles[0].name)
                : (role = "None");
              switch (role) {
                case "user":
                  this.$router.push("Home");
                  break;
                default:
                  this.$router.push("Page404");
                  break;
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log("err");
          console.log(err);
        });
    },
  },

  props: [],
  mounted() {},
};
</script>

<style></style>
