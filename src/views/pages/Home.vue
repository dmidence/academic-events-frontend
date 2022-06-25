<template>
    <Header/>
    <h1>Landing</h1>
    <!-- <Button label="Home Button" /> -->
    <RouterLink to="/signin">Signin</RouterLink>
</template>

<script>
  import Header from '../../components/Header.vue';

  export default {
    props: [],
    mounted() {},
    data() {
      return {};
    },
    methods: {},
    computed: {},
    components: {
      Header
    }
  };
</script>

<style>

</style>
