<template>
  <section>
    <b-card>
      <!--------------------- TITULO DA PAGINA --------------------->
      <b-row>
        <b-col>
          <h2>
            Certificado
          </h2>
        </b-col>
      </b-row>

      <!--------------------- 1° LINHA  --------------------->
      <b-row
        class="mt-1"
      >
        <!--------------------- SELECIONE O CURSO --------------------->
        <b-col
          md="6"
        >
          <b-form-group
            label="Selecione o Curso"
          >
            <v-select
              v-model="selecionadoCurso"
              :options="opcoesCursos"
              label="text"
              placeholder="Selecione o Curso"
            />
          </b-form-group>
        </b-col>
        <!--------------------- SELECIONE O STATUS DO CERTIFICADO --------------------->
        <b-col
          md="6"
        >
          <b-form-group
            label="Selecione o Status do Certificados"
          >
            <v-select
              v-model="selecionandoStatus"
              label="text"
              placeholder="Selecione o Status do Certificados"
              :options="opcoesStatus"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!--------------------- 2° LINHA  --------------------->
      <b-row>
        <!--------------------- SELECIONE O CURSO --------------------->
        <b-col
          md="6"
        >
          <b-form-group
            label="Tempo total do Curso"
            label-for="tempo"
          >
            <b-form-input
              id="tempo"
              v-model="tempoCurso"
              placeholder="Tempo total do Curso"
            />
          </b-form-group>
        </b-col>
        <!--------------------- SELECIONE O CURSO --------------------->
        <b-col
          md="6"
        >
          <b-form-group
            label="Link do download do certificado"
            label-for="linkCertificado"
          >
            <b-form-input
              id="linkCertificado"
              v-model="linkCertificado"
              placeholder="Link do download do certificado"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!--------------------- 3° LINHA BOTÃO SALVAR --------------------->
      <b-row>
        <b-col
          md="8"
          class="mt-1"
        >
          <b-button
            variant="gradient-success"
            block
            @click="SalvarCertificado()"
          >
            Salvar Certificado
          </b-button>
        </b-col>
        <b-col
          md="4"
          class="mt-1"
        >
          <b-button
            variant="gradient-info"
            block
            @click="ZerarCampos()"
          >
            Limpar Certificado
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosCertificado',

  components: {
    vSelect,
  },
  data() {
    return {
      id: null,
      dadosCertificado: {},

      // =========== MODELS =========== //
      tempoCurso: null,
      linkCertificado: null,
      selecionadoCurso: [],
      selecionandoStatus: [],

      // =========== OPÇÕES =========== //
      opcoesCursos: [],
      opcoesStatus: [
        { value: null, text: 'Selecione um Status ' },
        { value: 0, text: 'Status Bloqueado' },
        { value: 1, text: 'Status Progresso' },
        { value: 2, text: 'Status Disponivel' },
      ],
    }
  },
  created() {
    this.dadosCertificado = this.$store.state.infoCertificado
  },
  async mounted() {
    await this.$http.get('admin/lista_cursos').then(retorna => {
      this.opcoesCursos = retorna.data.curso
      localStorage.setItem('listaCursos', JSON.stringify(retorna.data))
    })
  },
  methods: {
    ZerarCampos() {
      const obj = {
        id: this.id,
        tempo: this.tempoCurso,
        linkcertificado: this.linkCertificado,
        id_curso: this.selecionadoCurso.value,
        status: this.selecionandoStatus.value,
      }
      this.tempoCurso = null
      this.linkCertificado = null
      this.selecionadoCurso = null
      this.selecionandoStatus = null
      return obj
    },
    SalvarCertificado() {
      const obj = this.ZerarCampos()
      console.log(obj)
      // if (obj.tempo === null) {
      //   alert('informe o tempo')

      if (this.id === null) {
        this.$http.post('admin/certificados', obj).then(retorna => {
          console.log(retorna.data)
        })
      }
    },

  },
}
</script>

<style scoped>

</style>
