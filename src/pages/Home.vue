<template>
  <v-container>
    <v-btn
      large
      icon
      color="highlight"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    >
      <v-icon>{{
        $vuetify.theme.dark ? "mdi-lightbulb-on" : "mdi-lightbulb-on-outline"
      }}</v-icon>
    </v-btn>
    <v-text-field
      class="pt-12"
      solo
      label="Digite sua pesquisa"
      color="highlight"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <div class="d-flex justify-center align-center">
      <span class="display-4 font-weight-bold pt-12 highlight--text">
        {{ $vuetify.theme.dark ? "Tema dark" : "Tema Light" }}
      </span>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Home",
};
</script>
