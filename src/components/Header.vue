<template>
  <Menubar :model="items" class="custom-header">
    <template #start>
      <routerLink class="decoration-none" to="/">
      <!-- <i class="pi pi-home" style="font-size: 3rem"></i> -->
      <i class="fa-solid fa-graduation-cap fa-4x text-white"></i>

      </routerLink>
    </template>
    <template #end>
      <routerLink class="decoration-none" to="/Register">
      <Button class="mx-2" label="Registrarse" />
      </routerLink>
      <routerLink class="decoration-none" to="/Signin">
      <Button class="p-button-link" label="Iniciar Sesión" />
      </routerLink>
    </template> 
    </Menubar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Academic Events" },
        //   {
        //     label: "File",
        //     icon: "pi pi-fw pi-file",
        //     items: [
        //       {label:"Inicio"},
        //       {
        //         label: "New",
        //         icon: "pi pi-fw pi-plus",
        //         items: [
        //           {
        //             label: "Bookmark",
        //             icon: "pi pi-fw pi-bookmark",
        //           },
        //           {
        //             label: "Video",
        //             icon: "pi pi-fw pi-video",
        //           },
        //         ],
        //       },
        //       {
        //         label: "Delete",
        //         icon: "pi pi-fw pi-trash",
        //       },
        //       {
        //         separator: true,
        //       },
        //       {
        //         label: "Export",
        //         icon: "pi pi-fw pi-external-link",
        //       },
        //     ],
        //   },
        //   {
        //     label: "Edit",
        //     icon: "pi pi-fw pi-pencil",
        //     items: [
        //       {
        //         label: "Left",
        //         icon: "pi pi-fw pi-align-left",
        //       },
        //       {
        //         label: "Right",
        //         icon: "pi pi-fw pi-align-right",
        //       },
        //       {
        //         label: "Center",
        //         icon: "pi pi-fw pi-align-center",
        //       },
        //       {
        //         label: "Justify",
        //         icon: "pi pi-fw pi-align-justify",
        //       },
        //     ],
        //   },
        //   {
        //     label: "Users",
        //     icon: "pi pi-fw pi-user",
        //     items: [
        //       {
        //         label: "New",
        //         icon: "pi pi-fw pi-user-plus",
        //       },
        //       {
        //         label: "Delete",
        //         icon: "pi pi-fw pi-user-minus",
        //       },
        //       {
        //         label: "Search",
        //         icon: "pi pi-fw pi-users",
        //         items: [
        //           {
        //             label: "Filter",
        //             icon: "pi pi-fw pi-filter",
        //             items: [
        //               {
        //                 label: "Print",
        //                 icon: "pi pi-fw pi-print",
        //               },
        //             ],
        //           },
        //           {
        //             icon: "pi pi-fw pi-bars",
        //             label: "List",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     label: "Events",
        //     icon: "pi pi-fw pi-calendar",
        //     items: [
        //       {
        //         label: "Edit",
        //         icon: "pi pi-fw pi-pencil",
        //         items: [
        //           {
        //             label: "Save",
        //             icon: "pi pi-fw pi-calendar-plus",
        //           },
        //           {
        //             label: "Delete",
        //             icon: "pi pi-fw pi-calendar-minus",
        //           },
        //         ],
        //       },
        //       {
        //         label: "Archieve",
        //         icon: "pi pi-fw pi-calendar-times",
        //         items: [
        //           {
        //             label: "Remove",
        //             icon: "pi pi-fw pi-calendar-minus",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        //   {
        //     label: "Quit",
        //     icon: "pi pi-fw pi-power-off",
        //   },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-header {
  position: absolute;
  top: 0;
  height: 10vh;
  width: 100%;
  background-color:#061e31;
  -webkit-box-shadow: 0px 12px 27px -11px #000000; 
  box-shadow: 0px 12px 27px -11px #000000;
  border:none;
}

::v-deep(.p-tabmenu-nav) {
  justify-content: space-between;
}

::v-deep(.p-tabmenu-nav.p-reset) {
  padding: 0 50px;
}

::v-deep(.p-button-label){
  color: white;
  text-decoration: none;
}

::v-deep(.p-menuitem-text){
  color:#2196F3 !important;
  font-weight: bolder;
  font-size: 2rem;
  background-color: transparent;

  &:hover{
    color: White !important;
  }
}

::v-deep(.p-menuitem-link){
  &:hover{
    background-color: transparent !important;
  }
}



</style>
