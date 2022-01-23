<template>
  <v-card class="drawing-card text-center">
    <v-container>
      <h2>Ziehung vom {{ date}}</h2>
      <h1 class="jackpot">Jackpot {{ draw.jackpot }} €</h1>
      <div class="my-3">
        <h3>Zahlen:</h3>
        <div class="number" v-for="number in draw.numbers">{{ number }}</div>
      </div>
      <h3>Zusatzzahlen:</h3>
      <div class="mt-2">
        <div class="number" v-for="aditionalNumber in draw.additionalNumbers">{{ aditionalNumber }}</div>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import * as service from "@/service/service";

export default {
  name: "DrawingCard",
  data: () => ({
    date: ''
  }),
  props: {
    draw: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getDate(date) {
      if (date !== '') {
        this.date = service.getDate(date);
      } else {
        return date;
      }
    }
  },
  mounted() {
    this.getDate(this.draw.date);
  }
}
</script>

<style scoped>

</style>
