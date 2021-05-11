<template>
  <section title="">
    <b-row>
      <b-col
        cols="12"
      >
        <b-card-body>
          <b-row>
            <b-col
              cols="12"
              xl="9"
              md="8"
            >
              <h2>Lista de Módulos</h2>
            </b-col>
            <b-col
              cols="12"
              xl="3"
              md="4"
            >
              <b-button
                v-b-modal.popup-modulos
                variant="outline-primary"
                class="mb-75"

                fixed
                block
                @click="editDados('')"
              > Novo Módulo
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
                    <!--                      <b-button-->
                    <!--                        v-b-toggle.sidebar-invoice-add-new-customer-->
                    <!--                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"-->
                    <!--                        variant="outline-primary"-->
                    <!--                        size="sm"-->
                    <!--                        pill-->

                    <!--                        @click="editItem(item)"-->
                    <!--                      > Gerenciar Seção-->
                    <!--                      </b-button>-->
                    <b-button
                      v-b-toggle.sidebar-invoice-add-new-customer
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-primary"
                      size="sm"
                      class="btn-icon rounded-circle"
                      @click="editDados(item)"
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
                  <slot v-if="column.label == 'Descrição'">
                    {{ item.descricao | truncate(30) }}
                  </slot>
                  <slot v-if="column.label == 'Status'">
                    <b-badge
                      :variant="NomeStatus(item).cor"
                    >
                      {{ NomeStatus(item).msg }}
                    </b-badge>
                  </slot>
                  <slot v-if="column.label == 'Valor'">
                    R$ {{ ValorCurso(item) }}
                  </slot>
                  <slot v-if="column.label === 'Vídeo'">
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
      </b-col>
    </b-row>

    <!------------------------------------------------------------>
    <!--                   POPUP CRIAR MODULOS                  -->
    <!------------------------------------------------------------>
    <b-modal
      id="popup-modulos"
      centered
      title="CRIAR MÓDULOS"
      hide-footer
    >
      <b-row>
        <b-col>
          <b-form-group
            label="Nome do Módulo*"
            label-for="basicInput"
          >
            <b-form-input
              id="basicInput"
              placeholder="Nome do Módulo*"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Descrição do módulo*"
            label-for="descricao"
          >
            <b-form-textarea
              id="descricao"
              placeholder="Descrição do módulo*"
              rows="3"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Vídeo de Introdução"
            label-for="video"
          >

            <b-form-input
              id="video"
              placeholder="Vídeo de Introdução"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Selecione o Status"
            label-for="status"
          >
            <v-select
              label="text"
              placeholder="Selecione o Status"
              :options="statusModulos"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2 mb-1">
        <b-col md="6">
          <b-button
            block
            variant="gradient-success"
          >
            Salvar
          </b-button>
        </b-col>
        <b-col md="6">
          <b-button
            variant="outline-success"
            block
          >
            Salvar e Criar Novo
          </b-button>
        </b-col>
      </b-row>
    </b-modal>

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
      url: 'admin/cursos',
      data: {},
      selected: '',
      dadositem: {},
      statusModulos: [
        { value: 0, text: 'Inativo' },
        { value: 1, text: 'Publicar' },
        { value: 2, text: 'Rascunho' },
      ],
      tableProps: {
        search: '',
        length: 10,
        column: 'id',
        dir: 'asc',
      },
      columns: [
        {
          label: 'Vídeo',
          orderable: true,
        },
        {
          label: 'Nome',
          name: 'titulo',
          orderable: true,
        },
        {
          label: 'Descrição',
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
    NomeStatus(item) {
      if (item.status === 0) {
        return { cor: 'light-danger', msg: 'Inativo' }
      }
      if (item.status === 1) {
        return { cor: 'light-success', msg: 'Ativo' }
      }
      if (item.status === 2) {
        return { cor: 'light-warning', msg: 'Rascunho' }
      } return 'Sem Status'
    },
    ValorCurso(item) {
      if (item.valor === '0.00') {
        return 'Gratuito'
      } return item.valor
    },

    editDados(item) {
      localStorage.setItem('cont', JSON.stringify(item))
      this.$store.state.categoria = item
      this.$router.push({
        name: 'app-admin-dados-cursos',
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
