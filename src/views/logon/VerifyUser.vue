<template>
  <Header />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-3x brand-max-widt-icon"></i>
      <h2 class="my-2">Verificar Usuario</h2>
      <h4>¡Haz click para terminar de verificar tu Usuario!</h4>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <Button label="Verificar" class="w-100" @click="verify()" />
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span>
          <router-link to="/register" class="text-center w-100">Regresar</router-link>
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
    return {};
  },

  methods: {

    verify() {
      const val = window.location.search;
      console.log(val);
      const urlParam = new URLSearchParams(val);
      const id = urlParam.get('id');
      const verificationCode = urlParam.get('verificationCode');
      console.log(id)
      console.log(verificationCode)
      fetchSinToken(`api/v1/users/verify/${id}/${verificationCode}`, {}, "GET")
        .then(() => {
          customAlert(
            "Verificacion de usuario",
            "¡Verificacion Exitosa!",
            "success"
          )
          this.$router.push("/signin");
        })
        .catch(() => {
          customAlert(
            "Ha ocurrido un error",
            "¡Ocurrio un error al verificar usuario!",
            "error"
          );
        });

    },


  }
};
</script>

<style>
</style>
