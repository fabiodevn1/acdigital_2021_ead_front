<template>
  <section>
    <b-card>
      <!--  TITULO DA PAGINA    -->
      <b-row>
        <b-col>
          <h2>
            Cursos
          </h2>
        </b-col>
      </b-row>

      <!------------- NOME DO CURSO--------------->
      <b-row class="mt-1">
        <b-col>
          <b-form-group>
            <label
              label-for="cursos"
            >Titulo do Curso *Obrigatório</label>
            <b-form-input
              id="cursos"
              v-model="nomeCurso"
              placeholder="Titulo do Curso"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!------------- DESCRIÇÃO DO CURSO--------------->
      <b-row>
        <b-col>
          <b-form-group>
            <label
              label-for="descrição"
            >Descrição do Curso *Obrigatório</label>
            <b-form-textarea
              id="descrição"
              v-model="descricaoCurso"
              placeholder="Descrição da Categoria"
              rows="3"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <!------------- IMAGEM DESTAQUE--------------->
        <b-col md="4">
          <b-form-group>
            <label>Imagem de Destaque</label>
            <b-form-file
              v-model="imagemDestaque"
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="Solte o arquivo aqui ..."
            />
          </b-form-group>
        </b-col>

        <!------------- CATEGORIA--------------->
        <b-col md="4">
          <b-form-group>
            <label>Selecione a Categoria  *Obrigatório</label>
            <v-select
              v-model="categoriasSelecionadas"
              placeholder="Selecione a Categoria"
              label="text"
              :options="opcoesCategorias"
            />
          </b-form-group>
        </b-col>

        <!-------------TAGS--------------->
        <b-col md="4">
          <b-form-group>
            <label>Selecione as Tags</label>
            <b-form-tags
              v-model="tags"
              input-id="tags-state-event"
              :tag-validator="validator"
              placeholder="Insira as tags (3 a 5 caracteres)"
              separator=" "
              @tag-state="onTagState"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <!------------- VALOR DO CURSO--------------->
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
                  v-model="valorCurso"
                  v-money="money"
                  placeholder="Saldo Inicial"
                />
              </b-input-group>
            </div>
          </b-form-group>
        </b-col>

        <!------------- VALOR PROMOCIONAL--------------->
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
                  v-model="valorPromocional"
                  v-money="money"
                />
              </b-input-group>
            </div>
          </b-form-group>
        </b-col>

        <!-------------DATA PROMOÇÃO--------------->
        <b-col md="4">
          <b-form-group>
            <label>Selecione o Peréodo da Promoção</label>
            <flat-pickr
              v-model="periodoPromocional"
              class="form-control"
              :config="{ mode: 'range', dateFormat: 'Y-m-d', altFormat: 'd/m/Y', altInput: true }"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!------------- PRIVADO--------------->
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label>Selecione o Status *Obrigatório</label>
            <v-select
              v-model="statusCursoSelecionado"
              placeholder="Selecione o Status"
              label="text"
              :options="opcoesStatusCurso"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Selecione Privado *Obrigatório</label>
            <v-select
              v-model="seCursoPrivado"
              placeholder="Selecione Privado"
              label="text"
              :options="opcoesCursoPrivado"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          md="12"
        >
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
import flatPickr from 'vue-flatpickr-component'

export default {
  name: 'DadosCursos',
  components: {
    vSelect,
    flatPickr,
  },
  directives: {
  },
  data() {
    return {
      tags: [],
      validTags: [],
      invalidTags: [],
      duplicateTags: [],
      id: null,
      nomeCurso: null,
      descricaoCurso: null,
      imagemDestaque: null,
      categoriasSelecionadas: '',
      tagsSelecionadas: [],
      periodoPromocional: null,
      money: [],
      valorCurso: null,
      valorPromocional: null,
      statusCursoSelecionado: [],
      seCursoPrivado: [],
      //= ========================================================================
      opcoesTags: [
        { id: 1, text: 'TAG 1' },
        { id: 2, text: 'TAG 2' },
        { id: 3, text: 'TAG 3' },
      ],
      opcoesStatusCurso: [
        { value: 0, text: 'Inativo' },
        { value: 1, text: 'Ativo' },
        { value: 2, text: 'Rascunho' },
      ],
      opcoesCursoPrivado: [
        { value: 0, text: 'Privado' },
        { value: 1, text: 'Público' },
      ],
      opcoesCategorias: [],
    }
  },
  // ########### LISTA DE CATEGORIA ############## //
  async mounted() {
    await this.$http.get('admin/lista_cursos').then(retorna => {
      this.opcoesCategorias = retorna.data.categoria
      localStorage.setItem('listaCursos', JSON.stringify(retorna.data))
    })
  },
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid
      this.invalidTags = invalid
      this.duplicateTags = duplicate
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6
    },
    Notificação(cor, msg) {
      this.$bvToast.toast(msg, {
        title: 'ALERTA',
        variant: cor,
        solid: true,
      })
    },
    ZerarCampos() {
      const obj = {
        id: this.id,
        titulo: this.nomeCurso,
        descricao: this.descricaoCurso,
        imagem: this.imagemDestaque,
        id_categoria: this.categoriasSelecionadas?.value,
        tags: this.tagsSelecionadas.id,
        valor: this.valorCurso,
        valor_promo: this.valorPromocional,
        status: this.statusCursoSelecionado.value,
        privado: this.seCursoPrivado.value,
        data_promo: this.periodoPromocional,
      }
      this.id = null
      this.nomeCurso = null
      this.descricaoCurso = null
      this.imagemDestaque = null
      this.categoriasSelecionadas = []
      this.tagsSelecionadas = null
      this.valorCurso = null
      this.valorPromocional = null
      this.statusCursoSelecionado = null
      this.seCursoPrivado = null
      return obj
    },
    SalvarCurso() {
      // FUNÇÃO DE CAMPO OBRIGATÓRIO
      if (this.nomeCurso === null || this.descricaoCurso === null || this.categoriasSelecionadas === ''
          || this.statusCursoSelecionado.value === undefined || this.seCursoPrivado.value === undefined) {
        this.Notificação('danger', 'Preenche os campos obrigatórios')
        return
      }
      const obj = this.ZerarCampos()
      console.log(obj)
      if (this.id === null) {
        this.$http.post('admin/cursos', obj).then(resp => {
          this.data = resp.data
          console.log(resp.data)
          this.Notificação('success', 'Curso criado com Sucesso')
        })
        this.$router.push({ name: 'app-admin-cursos' })
        return
      }
      this.$http.put(`admin/cursos/${this.id}`, obj).then(resp => {
        this.data = resp.data
        this.Notificação('success', 'Curso editado com Sucesso')
      })
      this.$router.push({ name: 'app-admin-cursos' })
    },
  },
}
</script>

<style scoped>

</style>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
