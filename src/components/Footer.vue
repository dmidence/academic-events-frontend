<template>

    <footer class="main-footer">
         <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Conéctate con nosotros en las redes sociales! </strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} 
      </v-card-text>
    </v-card>
  </v-footer>
    </footer>
</template>

<script>
 export default {
    data: () => ({
      icons: [
        'facebook',
        'twitter',
        'inkedin',
        'instagram',
      ],
    }),
  }

</script>

<style>
.main-footer {
  width: 100%;
  height: 6vh;
  background: rgb(41, 53, 60);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
</style>