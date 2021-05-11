<template>
  <section>
    <b-card>
      <b-row>
        <b-col
          class="mt-1"
        >
          <h4>Registro de Suporte</h4>
        </b-col>
      </b-row>

      <!---------------- SELECIONE O CURSO ---------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Selecione o Curso"
            label-for="selecioneCurso"
          >
            <v-select
              id="selecioneCurso"
            >
              fgfd
            </v-select>
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- SELECIONE O AULO ---------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Selecione o Aluno"
            label-for="selecioneAluno"
          >
            <v-select
              id="selecioneAluno"
            >
              fgfd
            </v-select>
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- ASSUNTO DO CHAMADO ---------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Assundo do Chamado"
            label-for="assunto"
          >
            <b-input
              id="assunto"
            >
              hdsgd
            </b-input>
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- DESCRIÇÃO DO PROBLEMA ---------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Descrição do problema"
            label-for="descricao"
          >
            <b-textarea
              id="descricao"
            >
              dgds
            </b-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- ANEXO DO PROBLEMA  ---------------->
      <b-row>
        <b-col>
          <b-form-group
            label="Anexo"
            label-for="anexo"
          >
            <b-form-file
              id="anexo"
            >
              fgdf
            </b-form-file>
          </b-form-group>
        </b-col>
      </b-row>

      <!---------------- BOTÃO DE SALVAR  ---------------->
      <b-row
        class="mt-1"
      >
        <b-col>
          <b-button
            block
            variant="gradient-success"
          >
            Salvar Suporte
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'DadosSuporte',
}
</script>

<style scoped>

</style>
