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
            <b-row>
              <b-col
                md="8"
              >
                <h2>Lições do Curso</h2>
              </b-col>
            </b-row>
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
                    <slot v-if="column.label === 'Ações'">
                      <b-button
                        v-b-modal.popup-licoes
                        variant="outline-primary"
                        size="sm"
                        class="btn-icon rounded-circle"
                        @click="editDados(item)"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                    </slot>
                    <slot v-if="column.label === 'Pontos'">
                      <b-avatar
                        variant="light-success"
                      >
                        {{ item.pontos }}
                      </b-avatar>
                    </slot>
                  </td>

                  <b-modal
                    id="popup-licoes"
                    centered
                    size="lg"
                    hide-footer
                    title="Pergunta"
                  >
                    <h4>{{ item.titulo }}</h4>
                    <b-card-text>
                      {{ item.descricao }}
                    </b-card-text>
                    <b-row
                      v-for="alterna in alternativas"
                      :key="alterna.id"
                    >
                      <b-col>
                        <b-form-radio :value="alterna.check">
                          {{ alterna.text }}
                        </b-form-radio>
                      </b-col>
                    </b-row>
                  </b-modal>
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
      url: 'admin/perguntas',
      data: {},
      alternativas: [
        { id: 1, text: 'gdfgdf', check: false },
        { id: 2, text: 'dfgdfgd', check: false },
        { id: 3, text: 'fdhbndvfbx', check: true },
        { id: 4, text: 'fdgdfgdf', check: false },
        { id: 5, text: 'dgsgsd', check: false },
      ],
      dadositem: {},
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
          label: 'Curso',
          name: 'titulo',
          orderable: true,
        },
        {
          label: 'Curso',
          name: 'aulas.titulo',
          orderable: true,
        },
        {
          label: 'N° Lições',
          name: 'pontos',
          orderable: true,
        },
        {
          label: 'Pontos',
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
    editDados(item) {
      this.$store.state.categoria = item
      this.$router.push({
        name: 'app-admin-dados-perguntas',
      })
    },
    BuscarDados(url = this.url, options = this.tableProps) {
      this.$http.get(url, { params: options }).then(resp => {
        this.data = resp.data
        console.log(this.data)
      })
    },
    reloadTable(tableProps) {
      this.BuscarDados(this.url, tableProps)
    },
  },
}
</script>

<style lang="scss">
</style>
