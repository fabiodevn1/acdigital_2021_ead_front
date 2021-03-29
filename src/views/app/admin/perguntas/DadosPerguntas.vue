<template>
  <b-row>
    <b-col cols="12">
      <add-perguntae-alternativas />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import AddPerguntaeAlternativas from './AddPerguntaeAlternativas.vue'

export default {
  components: {
    BRow,
    BCol,
    AddPerguntaeAlternativas,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
