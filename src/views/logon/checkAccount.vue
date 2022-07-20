<template>
  <Header />
  <div class="main-container logon-bg">
    <div class="logon-container text-center">
      <i class="fa-solid fa-graduation-cap fa-3x brand-max-widt-icon"></i>
      <h2 class="my-2">Verificación de cuenta</h2>
      <hr class="w-100" />

      <span class="vertical-group w-100 my-1 fs-6">
        <span>
          <router-link to="/signin" class="text-center w-100">Regresar</router-link></span
        >
      </span>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../../components/header/Header.vue";
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
