<template>
  <Header />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-4x brand-max-widt-icon"></i>
      <h2 class="my-2">Actualizar contraseña</h2>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <label for="newpassword0">Contraseña</label>
        <InputText id="newpassword0" type="password" class="w-100" v-model="inputPassword0" />
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="newpassword1">Confirmar contraseña</label>
        <InputText id="newpassword1" type="password" class="w-100" v-model="inputPassword1" />
      </span>

      <span class="vertical-group w-100 my-1">
        <Button label="Enviar" class="w-100" @click="reset()" />
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span>
          <router-link to="/signin" class="text-center w-100">Regresar</router-link>
        </span>
      </span>
    </div>
  </div>
  <section class="section-final">
    <Footer />
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import { fetchSinToken } from "../../helpers/fetch";
import { customAlert } from "../../helpers/alerts";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      inputPassword0: "",
      inputPassword1: "",
    };
  },

  methods: {
    reset() {
      const valores = window.location.search;
      console.log(valores);
      const urlParams = new URLSearchParams(valores);
      const id = urlParams.get("id");
      const passwordresetcode = urlParams.get("passwordResetCode");
      console.log(id);
      console.log(passwordresetcode);
      fetchSinToken(
        `api/v1/users/resetpassword/${id}/${passwordresetcode}`,
        {
          password: this.inputPassword0,
          passwordConfirmation: this.inputPassword1,
        },
        "POST",
        {}
      )
        .then(() => {
          customAlert(
            "Actualizacion de Contraseña",
            "¡Cambio de contraseña exitoso!",
            "success"
          )
          this.$router.push("/signin");
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "¡Revise sus datos!",
            "error"
          );
        });
    },
  },
};
</script>

<style>
</style>
