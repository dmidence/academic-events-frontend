<template>
  <Header :logged="true" />
  <div class="main-container flex-container pt-2 px-4" v-if="loadPrivate && loadPublic">
    Loaded
  </div>
  <div class="main-container flex-container pt-2 px-4" v-else>Not Loaded</div>
</template>

<script>
import Header from "../../components/Header.vue";
import { fetchConToken } from "../../helpers/fetch";
import { customAlert } from "../../helpers/alerts";

export default {
  components: { Header },
  data() {
    return {
      allPublicEvents: [],
      allPrivateEvents: [],
      loadPublic: false,
      loadPrivate: false,
    };
  },
  methods: {
    async publicEvents() {
      try {
        let response = await fetchConToken("api/v1/events/public", {}, "GET");
        this.loadPublic = true;
        return response.data.publicEvents;
      } catch (error) {
        console.log(error);
        customAlert(
          "Ha ocurrido un error",
          "Ocurrio un error al crear el evento.",
          "error"
        );
      }
    },
    async privateEvents() {
      try {
        let response = await fetchConToken("api/v1/events/private", {}, "GET");
        this.loadPrivate = true;
        return response.data.privateEvents;
      } catch (error) {
        console.log(error);
        customAlert(
          "Ha ocurrido un error",
          "Ocurrio un error al cargar el evento privado.",
          "error"
        );
      }
    },
  },
  async mounted() {
    this.allPublicEvents = await this.publicEvents();
    this.allPrivateEvents = await this.privateEvents();
  },
};
</script>

<style></style>
