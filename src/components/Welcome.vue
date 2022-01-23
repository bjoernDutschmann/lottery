<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
            src="/lottery-bingo-svgrepo-com.svg"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Willkommen bei<br />Onkel Ottos Lotto.
        </h1>

        <p class="subheading font-weight-regular">
          Spielen Sie noch heute Eurojackpot Lotto.
          <br />
          Hier geht es zu den Ergebnissen der letzten Ziehung.
        </p>
        <v-btn
            href="/game"
            target="_self"
        >Zu den Ergbenissen</v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
name: "Welcome"
}
</script>

<style scoped>

</style>
