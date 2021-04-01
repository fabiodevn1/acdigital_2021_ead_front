<template>
  <section>
    <b-card>
      <!------------- TITÚLO--------------->
      <b-row>
        <b-col>
          <h2>
            Aluno
          </h2>
        </b-col>
      </b-row>
      <!------------- NOME DO ALUNO--------------->
      <b-row class="mt-1">
        <b-col>
          <b-form-group>
            <label label-for="nome_aluno">Nome do Aluno</label>
            <b-form-input
              id="nome_aluno"
              v-model="nomeAluno"
              placeholder="Nome do Aluno"
            />
          </b-form-group>
        </b-col>
        <!------------- EMAIL DO ALUNO--------------->
        <b-col>
          <b-form-group>
            <label label-for="email">E-mail do Aluno</label>
            <b-form-input
              id="email"
              v-model="emailAluno"
              placeholder="E-mail do Aluno"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!------------- SENHA DO ALUNO--------------->
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label label-for="senha">Senha</label>
            <b-form-input
              id="senha"
              v-model="senhaAluno"
              placeholder="Senha"
            />
          </b-form-group>
        </b-col>

        <!------------- STATUS DO ALUNO--------------->
        <b-col md="6">
          <b-form-group>
            <label>Selecione o Status</label>
            <v-select
              v-model="StatusAluno"
              placeholder="Selecione o Status"
              label="text"
              :options="opcoesStatusAluno"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!------------- 3° LINHA BOTÃO SALVAR--------------->
      <b-row>
        <b-col
          class="mt-2"
        >
          <b-button
            variant="gradient-success"
            block
            @click="SalvarAluno"
          >
            Salvar Aluno
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosAluno',
  components: {
    vSelect,
  },
  data() {
    return {
      dadosAlunos: {},

      nomeAluno: null,
      emailAluno: null,
      senhaAluno: null,
      StatusAluno: null,

      //  ------------ OPÇÕES ------------   //

      opcoesStatusAluno: [
        { value: null, text: 'Selecione um Status' },
        { value: 0, text: 'Inativo' },
        { value: 1, text: 'Ativo' },
        { value: 0, text: 'Pendente' },
      ],
    }
  },
  created() {
    this.dadosAlunos = this.$store.state.infoAluno
  },
  methods: {
    ZerarCampos() {
      const obj = {
        name: this.nomeAluno,
        email: this.emailAluno,
        password: this.senhaAluno,
        ativo: this.StatusAluno.value,
      }
      this.nomeAluno = null
      this.emailAluno = null
      this.senhaAluno = null
      this.StatusAluno = null
      return obj
    },
    SalvarAluno() {
      const obj = this.ZerarCampos()
      console.log(obj)
      if (this.id === null) {
        this.$http.post('auth/register', obj).then(resp => {
          console.log(resp.data)
        })
        return
      }
      console.log('passou')
      this.$http.post('auth/register', obj).then(resp => {
        this.data = resp.data
      })
    },
  },

}
</script>

<style scoped>

</style>
