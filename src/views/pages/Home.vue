<template>
  <Header :logged="true" />
  <div class="main-container flex-container pt-2 px-4">
    <div class="controls w-100 m-0 p-0">
      <Button icon="pi pi-check" label="Crear Evento" @click="$refs.eventModal.openNew()" />
    </div>
    <div class="controls w-100 mt-7 p-0">
      <Button icon="pi pi-ban" label="Los Evento que cree" @click="$refs.EventOwn.getEventOwn()" />
      <label class="mt-2"></label>
    </div>

    <Card class="w-30" v-for="product in products" :key='product' style="padding:1rem;">
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
  <EventOwn ref="EventOwn" />
</template>

<script>
import Header from '../../components/Header.vue'
import EventModal from '../../components/EventModal.vue'
import EventOwn from '../../components/EventOwn.vue'


export default {
  name: 'Home',
  components: {
    Header,
    EventModal,
    EventOwn,
  },
  methods: {},

  data() {
    return {
      products: [1, 2, 3]
    }
  },
}
</script>

<style>
</style>
