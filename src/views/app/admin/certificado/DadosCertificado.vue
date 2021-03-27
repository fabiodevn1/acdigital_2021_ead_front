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
              label="title"
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
              label="title"
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
              placeholder="Link do download do certificado"
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
            Salvar Certificado
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
}
</script>

<style scoped>

</style>
