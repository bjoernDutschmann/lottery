<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <a href="/" class="d-flex align-center">
        <v-img
            alt="Lotto"
            class="shrink mr-2"
            contain
            src="/lottery-bingo-svgrepo-com.svg"
            transition="scale-transition"
            width="40"
        />
        <h3>Onkel Ottos Lotto</h3>
      </a>

      <v-spacer></v-spacer>
      <div class="d-none d-md-block">
        <v-btn
            href="/game"
            target="_self"
            text
        >
          <span class="mr-2">Letzte Ziehung</span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <MobileNavigation></MobileNavigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MobileNavigation from '@/components/MobileNavigation';

export default Vue.extend({
  name: 'App',
  components: {
    MobileNavigation: MobileNavigation
  },

  data: () => ({
    //
  }),
});
</script>
<style>
@import "style/main.scss";
</style>
