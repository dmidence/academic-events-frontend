<template>
  <router-view class="main-container"/>
  <Toast/>
</template>

<script>
import { defineComponent} from "vue";
import Toast from "primevue/toast";
export default defineComponent({
  name: "layout",
  components:{
    Toast
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

</style>
