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
                cols="12"
                xl="9"
                md="8"
              >
                <h2>Lista de Certificados</h2>
              </b-col>
              <b-col
                cols="12"
                xl="3"
                md="4"
              >
                <b-button
                  v-b-toggle.sidebar-invoice-add-new-customer
                  v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                  variant="outline-primary"
                  class="mb-75"
                  fixed
                  block
                  @click="EditarDados('')"
                > Novo Certificado
                </b-button>
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
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-primary"
                        size="sm"
                        class="btn-icon rounded-circle"
                        @click="VerDocumento(dados)"
                      >
                        <feather-icon icon="EditIcon" />
                      </b-button>
                      <b-button
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        variant="outline-danger"
                        size="sm"
                        class="btn-icon rounded-circle"
                        @click="DeletarDados(item)"
                      >
                        <feather-icon icon="Trash2Icon" />
                      </b-button>
                    </slot>
                    <slot v-if="column.label === 'IMG'">
                      <b-avatar
                        size="40px"
                        :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
                      />
                    </slot>
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
      url: 'admin/certificados',
      data: {},
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
          label: 'IMG',
          orderable: true,
        },
        {
          label: 'Curso',
          orderable: true,
        },
        {
          label: 'Duração',
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
    this.dados = this.$store.state.item
  },
  methods: {
    VerDocumento(dados) {
      this.$store.state.item = dados
      console.log(dados)
      this.$router.push({
        name: 'app-admin-dados-categorias',
        params: {
          id: dados.id,
        },
      })
      console.log('aqui 1')
    },
    EditarDados(item) {
      this.$store.state.infoCertificado = item
      this.$router.push({ name: 'app-admin-dados-categorias' })
    },
    editItem(item) {
      this.$router.push({
        name: 'app-admin-dados-certificado',
        params: {
          id: item.id,
        },
      })
    },
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
