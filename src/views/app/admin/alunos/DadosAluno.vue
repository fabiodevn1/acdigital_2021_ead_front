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
              placeholder="Nome do Aluno"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <!------------- EMAIL DO ALUNO--------------->
      <b-row>
        <b-col>
          <b-form-group>
            <label label-for="email">E-mail do Aluno</label>
            <b-form-input
              id="email"
              placeholder="E-mail do Aluno"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <label label-for="email">Senha</label>
            <b-form-input
              id="email"
              placeholder="Senha"
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
              placeholder="Selecione o Status"
              label="text"
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
    }
  },
}
</script>

<style scoped>

</style>
