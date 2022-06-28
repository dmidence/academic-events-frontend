<template>
  <Header :logged="false" />
  <div class="main-container">
    <h1>Landing</h1>
    <!-- <Button
              label="Nuevo Evento"
              icon="pi pi-plus"
              class="p-button-success mr-2"
              @click="$refs.eventModal.openNew()"
            /> -->
  </div>
  <Footer />
  <!-- Modal ref -->
  <EventModal ref="eventModal" />
</template>

<script>
import Header from "../../components/Header.vue";
import EventModal from "../../components/EventModal.vue";
import Footer from "../../components/Footer.vue";

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
    EventModal,
    Footer,
  },
};
</script>

<style></style>
