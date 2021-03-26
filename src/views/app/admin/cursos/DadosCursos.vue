<template>
  <section>
    <b-card>
      <b-row>
        <b-col>
          <h2>
            Cursos
          </h2>
        </b-col>
      </b-row>
      <b-row class="mt-1">
        <b-col>
          <b-form-group>
            <label label-for="cursos">Titulo do Curso</label>
            <b-form-input
              id="cursos"
              v-model="titulo"
              placeholder="Titulo do Curso"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label label-for="descrição">Descrição do Curso</label>
            <b-form-textarea
              id="descrição"
              v-model="descricao"
              placeholder="Descrição da Categoria"
              rows="3"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="5">
          <b-form-group>
            <label>Imagem de Destaque</label>
            <b-form-file
              v-model="destaque"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="Solte o arquivo aqui ..."
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Selecione a Categoria</label>
            <v-select
              v-model="categorias"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione a Categoria"
              label="text"
              multiple
              :options="ocategorias"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <label>Selecione as Tags</label>
            <v-select
              v-model="tags"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione as Tags"
              label="text"
              multiple
              :options="otags"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Valor do Curso"
            label-for="v-first-name"
          >
            <div class="demo-vertical-spacing">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <feather-icon icon="DollarSignIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="valor_curso"
                  v-money="money"
                  placeholder="Saldo Inicial"
                />
              </b-input-group>
            </div>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Valor Promocional do Curso"
            label-for="v-first-name"
          >
            <div class="demo-vertical-spacing">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <feather-icon icon="DollarSignIcon" />
                </b-input-group-prepend>
                <b-form-input
                  v-model="promo_curso"
                  v-money="money"
                />
              </b-input-group>
            </div>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group>
            <label>Selecione o Peréodo da Promoção</label>
            <b-form-datepicker
              id="example-datepicker"
              v-model="data_promo"
              class="mb-1"
            />
          </b-form-group>
        </b-col>

      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label>Selecione o Status</label>
            <v-select
              v-model="status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione o Status"
              label="text"
              :options="ostatus"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Selecione Privado</label>
            <v-select
              v-model="privado"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione Privado"
              label="text"
              :options="oprivado"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-1">
          <b-button
            variant="gradient-success"
            block
            @click="SalvarCurso"
          >
            Cadastrar Curso
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosCategorias',
  components: {
    vSelect,
  },
  directives: {
  },
  data() {
    return {
      titulo: '',
      descricao: '',
      destaque: '',
      categorias: '',
      tags: '',
      valor_curso: '',
      promo_curso: '',
      data_promo: '',
      status: '',
      privado: '',

      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false,
      },
      dir: 'ltr',
      ocategorias: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      otags: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      oprivado: [
        { value: '0', text: 'Rascunho' },
        { value: '1', text: 'Gratuíto' },
        { value: '2', text: 'Privado' },
      ],
      ostatus: [
        { value: '0', text: 'Inativo' },
        { value: '1', text: 'Ativo' },
        { value: '2', text: 'Rascunho' },
      ],
    }
  },
  methods: {
    SalvarCurso() {
      const obj = {
        titulo: this.titulo,
        descricao: this.descricao,
        destaque: this.destaque,
        categorias: this.categorias,
        tags: this.tags,
        valor_curso: this.valor_curso,
        promo_curso: this.promo_curso,
        data_promo: this.data_promo,
        status: this.status,
        privado: this.privado,
      }
      this.produto = ''
      this.titulo = ''
      this.descricao = ''
      this.destaque = ''
      this.categorias = ''
      this.tags = ''
      this.valor_curso = ''
      this.promo_curso = ''
      this.data_promo = ''
      this.status = ''
      this.privado = ''
      console.log(obj)
      if (this.id === null) {
        // console.log(obj)
        this.$http.post('admin/produtos/criar', obj).then(resp => {
          this.data = resp.data
          this.$emit('reloadt')
        })
        return
      }
      console.log('passou')
      this.$http.put(`admin/produtos/editar/${this.id}`, obj).then(resp => {
        this.data = resp.data
        this.$emit('reloadt')
      })
    },
  },
}
</script>

<style scoped>

</style>
