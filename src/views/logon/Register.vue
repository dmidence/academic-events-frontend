<template>
  <Header />
  <div class="main-container">
    <div class="logon-container">
        <h2 class="my-2">Register</h2>
        <hr class="w-100">
      <span class="vertical-group w-100 my-1">
        <label for="username">Username</label>
        <InputText id="username" type="text" class="w-100 p-inputtext-sm" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Lastname</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Email</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Password</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <label for="username">Password2</label>
        <InputText id="username" type="text" class="w-100" v-model="value" />
      </span>
      <span class="vertical-group w-100 my-1">
        <Button label="Register" class="w-100" />
      </span>
      <span class="vertical-group w-100 my-1">
        <router-link to="/Signin" class="text-center w-100">GO to Signin</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";

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
  },
};
</script>

<style></style>
