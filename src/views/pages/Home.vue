<template>
  <Header />
  <div class="main-container">
    <div id="mySidepanel" ref="mySidepanel" class="sidepanel">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>

    <button class="openbtn" @click="openNav()">&#9776; Toggle Sidepanel</button>
    <h2>Collapsed Sidepanel</h2>
    <p>Content...</p>
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
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    openNav() {
      this.$refs.mySidepanel.style.width = "250px";
    },

    /* Set the width of the sidebar to 0 (hide it) */
    closeNav() {
      this.$refs.mySidepanel.style.width = "0";
    },
  },
  computed: {},
  components: {
    Header,
    EventModal,
  },
};
</script>

<style scoped>
.sidepanel {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidepanel a:hover {
  color: #f1f1f1;
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}
</style>
