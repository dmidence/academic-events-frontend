<template>
  <Header :logged="true" />
  <div class="main-container">
    <h1>Home</h1>
  </div>

  <!-- Modal ref -->
  <EventModal ref="eventModal" />
</template>

<script>
import Header from "../../components/Header.vue";
import EventModal from "../../components/EventModal.vue";
export default {
  name: "Home",
  components: {
    Header,
    EventModal,
  },
  methods: {},

  data() {
    return {};
  },
};
</script>

<style></style>
