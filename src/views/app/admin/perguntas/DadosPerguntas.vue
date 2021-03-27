<template>
  <section>
    <b-card>
      <b-row>
        <b-col>
          <h2>Perguntas</h2>
        </b-col>
      </b-row>
      <!-------------------------- 1° LINHA TITÚLO DA PERGUNTA -------------------------->
      <b-row class="mt-2">
        <b-col md="12">
          <b-form-group
            label="Titulo da pergunta"
            label-for="tituloPergunta"
          >
            <b-form-input
              id="tituloPergunta"
              placeholder="Titulo da pergunta"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-------------------------- 2° LINHA DESCRIÇÃO DA PERGUNTA -------------------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Descrição da Pergunta"
            label-for="descricaoPergunta"
          >
            <b-form-textarea
              id="descricaoPergunta"
              placeholder="Descrição da Pergunta"
              rows="3"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- 3° LINHA SELECIONE A AULA E INFORME QUANTOS PONTOS ---------------->
      <b-row>

        <!-------------------------- SELECIONE A AULA -------------------------->
        <b-col md="8">
          <b-form-group
            label="Selecione a Aula"
            label-for="basicInput"
          >
            <v-select
              placeholder="Selecione a Aula"
              label="title"
            />
          </b-form-group>
        </b-col>

        <!-------------------------- INFORME QUANTOS PONTOS -------------------------->
        <b-col md="4">
          <b-form-group
            label="Informe quantos pontos"
            label-for="infoPontos"
          >
            <b-form-spinbutton
              id="infoPontos"
              min="1"
              max="100"
              placeholder="0"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!--------------------- 3° LINHA BOTÃO SALVAR --------------------->
      <b-row>
        <b-col class="mt-1">
          <b-button
            variant="gradient-success"
            block
          >
            Salvar Pergunta
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosPerguntas',
  components: {
    vSelect,
  },
}
</script>

<style scoped>

</style>
