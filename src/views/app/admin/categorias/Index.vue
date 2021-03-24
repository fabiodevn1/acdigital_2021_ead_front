<template>
  <b-card>
    <b-table
      :fields="fields"
      :items="items"
    >
      <template #cell(name)="data">
        <a :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">{{ data.value }}</a>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import { BTable, BCard } from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BCard,
  },

  data() {
    return {
        url: 'admin/local',
        data: {},
        tableProps: {
          search: '',
          length: 10,
          column: 'id',
          dir: 'asc',
        },
        columns: [
          {
            label: '#',
            name: 'id',
            orderable: true,
          },
          {
            label: 'nome',
            name: 'nome',
            orderable: true,
          },
          {
            label: 'Descrição',
            name: 'descricao',
            orderable: true,
          },
          {
            label: 'Ações',
            filterable: false,
          },
        ],
      }


</script>

<style lang="scss">
</style>
