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
            >Titulo do Curso</label>
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
            >Descrição do Curso</label>
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
        <b-col md="5">
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
            <label>Selecione a Categoria</label>
            <v-select
              v-model="categoriasSelecionadas"
              placeholder="Selecione a Categoria"
              label="text"
              multiple
              :options="opcoesCategorias"
            />
          </b-form-group>
        </b-col>

        <!-------------TAGS--------------->
        <b-col md="3">
          <b-form-group>
            <label>Selecione as Tags</label>
            <v-select
              v-model="tagsSelecionadas"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione as Tags"
              label="text"
              multiple
              :options="opcoesTags"
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
            <b-form-datepicker
              id="example-datepicker"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!------------- PRIVADO--------------->
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label>Selecione o Status</label>
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
            <label>Selecione Privado</label>
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
          md="8"
          class="mt-1"
        >
          <b-button
            variant="gradient-success"
            block
            @click="SalvarCurso"
          >
            Cadastrar Curso
          </b-button>
        </b-col>
        <b-col
          md="4"
          class="mt-1"
        >
          <b-button
            variant="gradient-warning"
            block
            @click="ZerarCampos"
          >
            Limpar
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosCursos',
  components: {
    vSelect,
  },
  directives: {
  },
  data() {
    return {
      id: null,
      nomeCurso: null,
      descricaoCurso: null,
      imagemDestaque: null,
      categoriasSelecionadas: null,
      tagsSelecionadas: null,
      money: [],
      valorCurso: null,
      valorPromocional: null,
      statusCursoSelecionado: null,
      seCursoPrivado: null,
      //= ========================================================================
      opcoesTags: [{ value: null, text: 'Por Favor Selecione' }],
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
    ZerarCampos() {
      const obj = {
        id: this.id,
        titulo: this.nomeCurso,
        descricao: this.descricaoCurso,
        imagem: this.imagemDestaque,
        categorias: this.categoriasSelecionadas,
        tags: this.tagsSelecionadas.value,
        valor: this.valorCurso,
        valor_promo: this.valorPromocional,
        status: this.statusCursoSelecionado,
        privado: this.seCursoPrivado.value,
      }
      console.log(obj)
      this.nomeCurso = null
      this.descricaoCurso = null
      this.imagemDestaque = null
      this.categoriasSelecionadas = null
      this.tagsSelecionadas = null
      this.valorCurso = null
      this.valorPromocional = null
      this.statusCursoSelecionado = null
      this.seCursoPrivado = null
      return obj
    },
    SalvarCurso() {
      const obj = this.ZerarCampos()
      if (this.id === null) {
        this.$http.post('admin/cursos', obj).then(resp => {
          console.log(resp.data)
        })
        // this.$router.push({ name: 'app-admin-cursos' })
        return
      }
      this.$http.put(`admin/cursos/${this.id}`, obj).then(resp => {
        this.data = resp.data
      })

      // this.$router.push({ name: 'app-admin-cursos' })
    },
  },
}
</script>

<style scoped>

</style>
