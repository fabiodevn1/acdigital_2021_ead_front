<template>
  <section title="">
    <b-row>
      <b-col
        cols="12"
      >
        <b-card
          no-body
          class="invoice-preview-card"
        >
          <b-card-body>
            <data-table
              :data="data"
              :columns="columns"
              @on-table-props-changed="reloadTable"
            >
              <tbody
                slot="body"
                slot-scope="{
                  // eslint-disable-next-line vue/no-template-shadow
                  data }"
              >
                <tr
                  v-for="item in data"
                  :key="item.id"
                >
                  <td
                    v-for="column in columns"
                    :key="column.name"
                  >
                    <data-table-cell
                      :value="item"
                      :name="column.name"
                      :meta="column.meta"
                      :comp="column.component"
                      :classes="column.classes"
                    />
                  </td>
                </tr>
              </tbody>
            </data-table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import { VBToggle } from 'bootstrap-vue'

export default {
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  mixins: [heightTransition],

  data() {
    return {
      url: 'categorias',
      data: {},
      dadositem: {},
      tableProps: {
        search: '',
        length: 10,
        column: 'id',
        dir: 'desc',
      },
      columns: [
        {
          label: '#',
          name: 'id',
          orderable: true,
        },
        {
          label: 'Nome',
          name: 'nome',
          orderable: true,
        },
        {
          label: 'Telefone',
          orderable: true,
        },
        {
          label: 'Conheceu',
          orderable: true,
        },
        {
          label: 'Status',
          orderable: true,
        },
        {
          label: 'Ações',
          filterable: false,
        },
      ],
    }
  },
  created() {
    this.BuscarDados(this.url)
  },
  methods: {
    BuscarDados(url = this.url, options = this.tableProps) {
      this.$http.get(url, { params: options }).then(resp => {
        this.data = resp.data
      })
    },
    reloadTable(tableProps) {
      this.BuscarDados(this.url, tableProps)
    },
  },
}
</script>
