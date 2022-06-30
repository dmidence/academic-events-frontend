<template>
  <Header :logged="true" />
  <div class="main-container">
    <h1>Home</h1>
    <!-- <Button
              label="Nuevo Evento"
              icon="pi pi-plus"
              class="p-button-success mr-2"
              @click="$refs.eventModal.openNew()"
            /> -->
  </div>

  <!-- Modal ref -->
  <EventModal ref="eventModal" />
</template>

<script>
import Header from "../../components/Header.vue";
import EventModal from "../../components/EventModal.vue";
export default {
  name: "Home",

  props: [],

  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Header,
    EventModal,
  },
};
</script>

<style></style>
