<template>
  <div id="mySidepanel" ref="mySidepanel" class="sidepanel">
    <div class="centered">
      <i class="fa-solid fa-graduation-cap fa-4x text-white"></i>
    </div>

    <a href="javascript:void(0)"  class="closebtn" @click="closeNav()">&times;</a>
    <!-- <a @click="$refs.eventModal.openNew()">Crear Eventos</a>-->
    <Button label="Crear Eventos" icon="pi pi-calendar-plus" class="p-button-outlined" @click="$refs.eventModal.openNew()" style="margin: 7px"/>
    <Button label="Mis eventos" icon="pi pi-calendar" class="p-button-outlined" @click="$refs.cardEvento.traerdata()" style="margin: 7px"/>
    <a >Section 3</a>
    <a>Section 4</a>

    <div class="centered">
        <i class="fa-solid fa-arrow-right-from-bracket fa-2x text-white"></i>
    </div>
  </div>

  <CardEvento ref = "cardEvento"/>

  <EventModal ref = "eventModal"/>
</template>

<script>

import EventModal from './EventModal.vue';

import CardEvento from './CardEvento.vue';



export default {
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    openNav() {
      if (this.$refs.mySidepanel.style.width != "250px") {
        this.$refs.mySidepanel.style.width = "250px";
      } else {
        this.$refs.mySidepanel.style.width = "0";
      }
    },

    closeNav() {
      this.$refs.mySidepanel.style.width = "0";
    },
  },
  computed: {},
  components: {

    EventModal,CardEvento,


  },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";

.sidepanel {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $secondary;
  overflow-x: hidden;
  padding-top: 160px;
  transition: 0.5s;
  text-align:center;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1.3rem;
    color: white;
    display: block;
    transition: 0.3s;
    margin: 1rem 0;

    &:hover {
      cursor: pointer;
      color: $primary;
    }
  }
}

i:hover{
    color:$primary;
    cursor: pointer;
}
.sidepanel {
  .centered {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
  }
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  text-align:center;
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
