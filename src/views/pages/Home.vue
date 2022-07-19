<template>
  <Header :logged="true" />
  <div class="main-container flex-container pt-2 px-4">
    <div class="controls w-100 m-0 p-0">
      <Button icon="pi pi-check" label="Crear Evento" @click="$refs.eventModal.openNew()" />
    </div>
    <Card class="w-30" v-for="product in products" :key='product' style="padding:1rem; margin-top: 15px">

      <template #header>
        <img src="https://umad.edu.mx/wp-content/uploads/2018/09/ingenieri%CC%81a-de-software.jpg" style="height: 150px"
          icon="pi pi-pencil" />
      </template>
      <template #title>
        Estos van a ser los eventos pendiente
      </template>
      <template #content>
        Descripcion de los eventos pendientes Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </template>
      <template #footer>
        <Button icon="pi pi-check" label="Editar" />
        <Button icon="pi pi-times" label="Eliminar" class="p-button-secondary" style="margin-left: 0.5em;" />
      </template>
    </Card>

  </div>

  <!-- Modal ref -->
  <EventModal ref="eventModal" />
</template>

<script>
import Header from '../../components/Header.vue'
import EventModal from '../../components/EventModal.vue'


export default {
  name: 'Home',
  components: {
    Header,
    EventModal,
  },
  methods: {},

  data() {
    return {
      products: [1, 2, 3, 4, 5, 6]
    }
  },
}
</script>

<style>
</style>
