<template>
  <div id="mySidepanel" ref="mySidepanel" class="sidepanel" v-if="show">
    <div class="centered">
      <i class="fa-solid fa-graduation-cap fa-4x text-white active-icon" @click="closeNav()"></i>
    </div>

    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <div class="d-grid gap-2 d-md-block optionsPanel" ref="optionsPanel">
      <Button label="Crear Eventos" icon="pi pi-calendar-plus" class="fixed-button" @click="$refs.eventModal.openNew()"
        style="margin: 7px" />
      <Button label="Mis eventos" icon="pi pi-calendar" class="fixed-button" @click="$refs.EventOwn.getEventOwn()"
        style="margin: 7px" />
      <h1></h1>
      <Button label="Perfil" icon="pi pi-calendar" class="fixed-button" @click="$refs.Perfil.getperfil()"
        style="margin: 7px" />
      <routerLink class="decoration-none p-0 m-0" to="/Signin">
        <i class="fa fa-sign-out fa-2x p-0 m-0" aria-hidden="true"></i>
      </routerLink>
    </div>
  </div>

  <div id="mySidepanel" ref="mySidepanel" class="sidepanel" v-else>
    <div class="centered">
      <i class="fa-solid fa-graduation-cap fa-4x text-white active-icon" @click="closeNav()"></i>
    </div>
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <Button label="Subscripciones" icon="pi pi-calendar" class="fixed-button" @click="$refs.EventMe.getEventMe()"
      style="margin: 7px" />
    <Button label=" Calendario" icon="pi pi-calendar" class="fixed-button" @click="$refs.Calendar.calendarEventMe()"
      style="margin: 7px" />
    <h1></h1>
    <Button label=" Perfil" icon="pi pi-calendar" class="fixed-button" @click="$refs.Perfil.getperfil()"
      style="margin: 7px" />

  </div>

  <!-- #COMPONENTS -->
  <EventModal ref="eventModal" />
  <EventOwn ref="EventOwn" />
  <EventMe ref="EventMe" />
  <Calendar ref="Calendar" />
  <Perfil ref="Perfil" />
</template>

<script>
import EventModal from "./EventModal.vue";
import EventOwn from "./EventOwn.vue";
import EventMe from "./EventMe.vue";
import Calendar from "./Calendar.vue";
import Perfil from "./Perfil.vue";
export default {
  props: [],
  created() {
    if (!!sessionStorage.getItem("userData")) {
      "user" == JSON.parse(sessionStorage.getItem("userData")).roles[0].name ? this.show = false : this.show = true
    }
  },
  mounted() { },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openNav() {
      if (this.$refs.mySidepanel.style.width != "20vw") {
        this.$refs.mySidepanel.style.width = "20vw";
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
    EventModal,
    EventOwn,
    EventMe,
    Calendar,
    Perfil,
  },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";

.active-icon {
  &:hover {
    color: $primary  !important;
  }
}

.optionsPanel {
  transition: 0.1s all;
  display: flex;
  flex-direction: column;
}

.fixed-button {
  font-weight: bold;
  background-color: transparent;
  border: none;
  transition: 0.1s all;

  &:hover {
    color: $primary  !important;
    transform: scale(1.02);
    background-color: transparent !important;
  }
}

.sidepanel {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $detail;
  overflow-x: hidden;
  padding-top: 160px;
  transition: 0.5s;
  text-align: center;
  transition: 0.1s all;

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

i:hover {
  color: $primary;
  cursor: pointer;
}

.sidepanel {
  .centered {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.sidepanel .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  text-align: center;
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
