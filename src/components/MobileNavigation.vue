<template>
  <div
      class="d-flex align-center justify-center mobile-nav d-md-none"
  >


    <v-btn
        href="/"
        target="_self"
        text
    >
      <v-icon>fa fa-home</v-icon>
      <div>
        <small class="">Home</small>
      </div>
    </v-btn>

    <v-btn
        href="/game"
        target="_self"
        text
    >
      <v-icon>fa fa-ticket-alt</v-icon>
      <div>
        <small class="">Ziehung</small>
      </div>
    </v-btn>

  </div>
</template>

<script>
export default {
name: "MobileNavigation"
}
</script>

<style scoped>

</style>
