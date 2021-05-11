<template>
  <div style="height: inherit">

    <!-- Overlay -->
    <div />
    <section>

      <!-- CARD COM OS CURSOS QUE O JÁ COMPROU -->
      <b-row class="mb-2">
        <b-col>
          <h1>Meus Cursos</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="curso in cursos"
          :key="curso.id"
          md="4"
        >
          <!--###################### IMAGEM DO CURSO ######################-->
          <b-card
            :img-src="require('../../../../assets/images/banner/banner-27.jpg')"
            img-alt="card img"
            img-top
            class="position-static"
          >

            <!--###################### TITULO DO CURSO ######################-->
            <h2>{{ curso.titulo }}</h2>

            <!--###################### DESCRIÇÃO DO CURSO ######################-->
            <b-card-text> {{ curso.descricao | truncate(90) }}</b-card-text>

            <!--###################### TAGS DO CURSO ######################-->
            <b-card-text class="item-company">
              Tags: <b-link class="ml-25">
                {{ curso.tags }}
              </b-link>
            </b-card-text>
            <b-row>

              <!--###################### ESTRELAS DO CURSO ######################-->
              <b-col
                md="6"
                class="item-rating"
              >
                <ul class="unstyled-list list-inline">
                  <li
                    v-for="star in 5"
                    :key="star"
                    class="ratings-list-item"
                    :class="{'ml-25': star-1}"
                  >
                    <feather-icon
                      icon="StarIcon"
                      size="16"
                      :class="[{'fill-current': star <= curso.rating}, star <= curso.rating ? 'text-warning' : 'text-muted']"
                    />
                  </li>
                </ul>
              </b-col>

              <!--###################### VALOR DO CURSO ######################-->
              <b-col md="6">
                <h6 class="item-price">
                  R${{ curso.valor }}
                </h6>
              </b-col>
            </b-row>

            <!--###################### BOTÃO DE COMPRA DO CURSO ######################-->
            <b-button
              variant="light"
              block
              @click="$router.push({name: 'app-aluno-ver-curso'})"
            >
              VER CURSOS
            </b-button>
          </b-card>
        </b-col>
      </b-row>

      <!-- CARD COM OS CURSOS PARA COMPRAR-->
      <hr>
      <b-row class="mb-2 mt-2">
        <b-col>
          <h1>Comprar Cursos</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="curso in cursos"
          :key="curso.id"
          md="4"
        >
          <!--###################### IMAGEM DO CURSO ######################-->
          <b-card
            :img-src="require('../../../../assets/images/banner/banner-27.jpg')"
            img-alt="card img"
            img-top
            class="position-static"
          >

            <!--###################### TITULO DO CURSO ######################-->
            <h2>{{ curso.titulo }}</h2>

            <!--###################### DESCRIÇÃO DO CURSO ######################-->
            <b-card-text> {{ curso.descricao | truncate(90) }}</b-card-text>

            <!--###################### TAGS DO CURSO ######################-->
            <b-card-text class="item-company">
              Tags: <b-link class="ml-25">
                {{ curso.tags }}
              </b-link>
            </b-card-text>
            <b-row>

              <!--###################### ESTRELAS DO CURSO ######################-->
              <b-col
                md="6"
                class="item-rating"
              >
                <ul class="unstyled-list list-inline">
                  <li
                    v-for="star in 5"
                    :key="star"
                    class="ratings-list-item"
                    :class="{'ml-25': star-1}"
                  >
                    <feather-icon
                      icon="StarIcon"
                      size="16"
                      :class="[{'fill-current': star <= curso.rating}, star <= curso.rating ? 'text-warning' : 'text-muted']"
                    />
                  </li>
                </ul>
              </b-col>

              <!--###################### VALOR DO CURSO ######################-->
              <b-col md="6">
                <h6 class="item-price">
                  R${{ curso.valor }}
                </h6>
              </b-col>
            </b-row>

            <!--###################### BOTÃO DE COMPRA DO CURSO ######################-->
            <b-button
              variant="light"
              block
            >
              COMPRAR CURSO
            </b-button>
          </b-card>
        </b-col>
      </b-row>

    </section>
  </div>
</template>

<script>
import imgcurso from '../../../../assets/images/banner/banner-27.jpg'

export default {
  name: 'Index',
  data() {
    return {
      imgcurso: '../../../../assets/images/banner/banner-27.jpg',
      todoscursos: [
        {
          id: 1,
          valor: '2500,00',
          titulo: 'Curso de Marketing Digital',
          descricao: 'Curabitur, arcu erat, accumsan, id imperdiet et, porttitor at sem. ltricies ligula sed, magna dictum porta.',
          tags: 'Digital, Marketing',
          estreals: '2',
          imagem: imgcurso,
          rating: 2,
          slug: 'Digital, Marketing',
          isInWishlist: '2',
          isInCart: '3',
        },
      ],
      infoCursos: [],
      cursos: [],
    }
  },
  created() {
    this.$http.get('admin/cursos').then(resp => {
      this.cursos = resp.data.data
    })
  },
}
</script>
<style>

</style>
