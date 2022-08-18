<template>
  <Menubar :model="items" class="custom-header">
    <template #start>
      <routerLink class="decoration-none" to="/">
        <!-- <i class="pi pi-home" style="font-size: 3rem"></i> -->
        <i class="fa-solid fa-graduation-cap fa-4x text-white"></i>
      </routerLink>
    </template>
    <template #end v-if="!logged">
      <routerLink class="decoration-none" to="/Register">
        <Button class="btn btn-primary" style="margin-right: 15px" label="Registrarse" />
      </routerLink>

      <routerLink class="decoration-none" to="/Signin">
        <Button
          class="btn btn-secondary"
          style="margin-right: 20px"
          label="Iniciar Sesión"
        />
      </routerLink>
    </template>
    <template #end v-else>
      <i
        class="fa-solid fa-gear fa-2x text-white p-2 cursor-pointer"
        @click="$refs.sideBar.openNav()"
      ></i>

      <i
        class="fa fa-sign-out fa-2x cursor-pointer p-2 color-detail"
        @click="logout()"
      ></i>
    </template>
  </Menubar>

  <SideBar ref="sideBar" />
</template>

<script>
import SideBar from "./Sidebar.vue";
export default {
  data() {
    return {
      items: [{ label: "AE", to: "/" }],
    };
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/Signin");
    },
  },
  props: {
    logged: Boolean,
  },
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../colors";

.p-button-link.button-logout {
  font-weight: bold;
}

.custom-header {
  position: absolute;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color: $secondary;
  -webkit-box-shadow: 0px 12px 27px -11px #000000;
  box-shadow: 0px 12px 27px -11px #000000;
  border: none;
}

::v-deep(.p-tabmenu-nav) {
  justify-content: space-between;
}

::v-deep(.p-tabmenu-nav.p-reset) {
  padding: 0 50px;
}

::v-deep(.p-button-label) {
  color: white;
  text-decoration: none;
}

::v-deep(.p-menuitem-text) {
  color: white !important;
  font-weight: bolder;
  font-size: 2rem;
  background-color: transparent;

  &:hover {
    color: #2196f3 !important;
  }
}

::v-deep(.p-menuitem-link) {
  &:hover {
    background-color: transparent !important;
  }
}
</style>
