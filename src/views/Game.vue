<template>
  <v-app>
    <v-container>
      <h1 class="mb-3">Eurojackpot</h1>
      <div class="d-lg-flex justify-center">
        <DrawingCard v-if="error === true" v-for="draw in draws" :draw="draw"></DrawingCard>
        <v-card v-else>
          <v-card-text>Es ist ein fehler aufgetreten.</v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="js">
import Vue from 'vue';
import * as service from '../service/service';
import DrawingCard from "@/components/DrawingCard";

export default Vue.extend({
  name: 'Game',
  components: {
    DrawingCard
  },
  data() {
    return {
      draws: [{
        date: "21 Jan 2022",
        jackpot: "4700000",
        numbers: [2, 4, 9, 10, 13, 27],
        additionalNumbers: [2, 4]
      }],
      error: true,
      showResults: false
    };
  },

  beforeMount() {
    service.getDraw().then(response => {
      this.draws = response.response.draws;
      this.error = false;
    }).catch(err => {
      this.error = true;
    });
  }
});
</script>

<style scoped>

</style>
