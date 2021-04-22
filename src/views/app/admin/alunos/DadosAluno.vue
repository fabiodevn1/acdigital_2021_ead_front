<template>
  <validation-observer ref="validador">
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
              <label label-for="nome_aluno">Nome do Aluno *Obrigatório</label>
              <b-form-input
                id="nome_aluno"
                v-model="nomeAluno"
                placeholder="Nome do Aluno"
              />
            </b-form-group>
          </b-col>
          <!------------- EMAIL DO ALUNO--------------->
          <b-col>
            <!--            <b-form-group>-->
            <!--              <label label-for="email">E-mail do Aluno *Obrigatório</label>-->
            <!--              <b-form-input-->
            <!--                id="email"-->
            <!--                placeholder="E-mail do Aluno"-->
            <!--              />-->
            <!--            </b-form-group>-->
            <b-form-group>
              <label label-for="email">E-mail do Aluno *Obrigatório</label>

              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  v-model="emailAluno"
                  :state="errors.length > 0 ? false:null"
                  type="email"
                  placeholder="Email"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>
        <!------------- SENHA DO ALUNO--------------->
        <b-row>
          <b-col md="6">
            <b-form-group>
              <label label-for="senha">Senha *Obrigatório</label>
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
              <label>Selecione o Status *Obrigatório</label>
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
  </validation-observer></template>

<script>
import vSelect from 'vue-select'
import { email } from '@validations'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'DadosAluno',
  components: {
    vSelect,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      dadosAlunos: {},
      email,

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
    Alerta(cor, msg) {
      this.$bvToast.toast(msg, {
        title: 'Alerta',
        variant: cor,
        solid: true,
      })
    },
    ZerarCampos() {
      const obj = {
        nome: this.nomeAluno,
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
    Validador() {
      this.$refs.validador.validate().then(success => {
        if (success) {
          this.Alerta('warning', 'Campo email preenchido')
        }
      })
    },
    SalvarAluno() {
      this.Validador()
      if (this.nomeAluno === null || this.senhaAluno === null) {
        this.Alerta('danger', 'Preencha os campos obrigatórios')
      }
      const obj = this.ZerarCampos()
      if (this.id === null) {
        this.$http.post('auth/register', obj).then(resp => {
          this.data = resp.data
        })
        this.$router.push({ name: 'app-admin-alunos' })
        return
      }
      this.$http.post('auth/register', obj).then(resp => {
        this.data = resp.data
        this.$router.push({ name: 'app-admin-alunos' })
      })
    },
  },

}
</script>

<style scoped>

</style>
