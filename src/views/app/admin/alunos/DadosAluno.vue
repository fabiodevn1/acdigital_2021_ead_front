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
              v-model="nome_aluno"
              placeholder="Nome do Aluno"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!------------- EMAIL DO ALUNO--------------->
      <b-row class="mt-1">
        <b-col>
          <b-form-group>
            <label label-for="email">E-mail do Aluno</label>
            <b-form-input
              id="email"
              v-model="email"
              placeholder="E-mail do Aluno"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!------------- STATUS DO ALUNO--------------->
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
        <b-col
          md="6"
          class="mt-2"
        >
          <b-button
            variant="gradient-success"
            block
            @click="Salvar_Dados"
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
      dir: 'ltr',
      nome_aluno: '',
      email: '',
      status: '',
      ostatus: [
        { value: null, text: 'Por Favor Selecione' },
        { value: 0, text: 'Desativado' },
        { value: 1, text: 'Ativo' },
        { value: 2, text: 'Lixeira' },
      ],
    }
  },
  methods: {
    Salvar_Dados() {
      const obj = {
        id: this.id,
        nome_aluno: this.nome_aluno,
        email: this.email,
        status: this.status.value,
      }
      console.log(obj)
      if (this.id === undefined) {
        this.$http.post('admin/categorias', obj).then(resp => {
          this.data = resp.data
          console.log('novo')
        })
        return
      }

      this.$http.put(`admin/categorias/${this.id}`, obj).then(resp => {
        this.data = resp.data
        this.$emit('reloadt')
        console.log('editar')
      })
    },
  },
}
</script>

<style scoped>

</style>
