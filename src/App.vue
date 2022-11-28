<template>
  <MainPage />
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  async beforeCreate() {
    let locale = this.$cookies.get('locale')
    if (locale) {
      this.$i18n.locale = locale
    }
  },
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  margin: auto;
}
</style>
