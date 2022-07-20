<template>
  <Header />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-3x brand-max-widt-icon"></i>
      <h2 class="my-2">Actualizar contraseña</h2>
      <hr class="w-100" />
      <span class="vertical-group w-100 my-1">
        <label for="userEmail">Correo electronico</label>

        <InputText
          id="userEmail"
          type="text"
          class="w-100"
          v-model="inputEmail"
        />
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="newpassword0">Contraseña</label>

        <InputText
          id="newpassword0"
          type="text"
          class="w-100"
          v-model="inputPassword0"
        />
      </span>

      <span class="vertical-group w-100 my-1">
        <label for="newpassword1">Confirmar contraseña</label>

        <InputText
          id="newpassword1"
          type="text"
          class="w-100"
          v-model="inputPassword1"
        />
      </span>

      <span class="vertical-group w-100 my-1">
        <!-- <router-link to="/Home" class="text-center w-100"> -->
        <Button label="Enviar" class="w-100" />
        <!-- </router-link> -->
      </span>
      <span class="vertical-group w-100 my-1 fs-6">
        <span>
          <router-link to="/signin" class="text-center w-100"
            >Regresar</router-link
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
  components: {
    Header,
    Footer,
  },

  props: [],
  mounted() {},
};
</script>

<style></style>