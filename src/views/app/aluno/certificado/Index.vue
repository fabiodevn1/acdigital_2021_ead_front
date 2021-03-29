<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <!------------------- Titulo da Pagina ------------------->
      <b-col>
        <b-card>
          <h2>
            Certificados
          </h2>
        </b-card>
      </b-col>
    </b-row>
    <!------------------- CERTIFICADO ------------------->
    <b-row>
      <b-col
        v-for="certificados in todoscertificados"
        :key="certificados.id"
        md="4"
      >
        <b-card
          :img-src="require('../../../../assets/images/banner/banner-27.jpg')"
          img-alt="card img"
          img-top
          class="position-static"
        >
          <!--###################### TITULO DO CURSO ######################-->
          <h2>{{ certificados.tituloCurso }}</h2>

          <b-row>
            <b-col md="6">
              <!--###################### TEMPO DO CURSO ######################-->
              <b-card-text> {{ certificados.tempoCurso }}</b-card-text>
            </b-col>
            <b-col md="6">
              <!--###################### TEMPO DO CONCLUIDO DO CURSO ######################-->
              <b-badge
                pill
                variant="light-primary"
              >
                {{ certificados.statusCertidicado }}
              </b-badge>
            </b-col>
          </b-row>
          <!--###################### BOTÃO DE FAZER DOWNLOAD ######################-->
          <b-button
            class="mt-1"
            variant="gradient-success"
            block
          >
            FAZER DOWNLOAD
          </b-button>

        </b-card>
      </b-col>
    </b-row>

  </section>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      todoscertificados: [
        {
          id: 1,
          tituloCurso: 'Marketing Digital',
          tempoCurso: '63:50h',
          statusCertidicado: 'Concluido',
        },
        {
          id: 2,
          tituloCurso: 'Marketing Digital',
          tempoCurso: '63:50h',
          statusCertidicado: 'Concluido',
        },
        {
          id: 3,
          tituloCurso: 'Marketing Digital',
          tempoCurso: '63:50h',
          statusCertidicado: 'Concluido',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
</style>
