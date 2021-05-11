<template>
  <section>
    <b-row>
      <b-col md="8">
        <b-card
          overlay
          :img-src="require('@/assets/images/cursos/wordpress/banner-wordpress.jpg')"
        />
      </b-col>

      <b-col md="4">
        <b-card>
          <!-- NOME DO CURSO -->
          <h4>Wordpress para Iniciantes</h4>

          <!-- NOME DO PROFESSOR -->
          <b-card-text class="item-company mb-0">
            <span>Prof:</span>
            <b-link class="company-name">
              Sarinha do Mal
            </b-link>
          </b-card-text>

          <!-- CATEGORIAS -->
          <b-card-text class="mt-1 mb-1 item-company mb-0">
            <span>Categoria:</span>
            <b-badge
              class="mr-1 ml-1"
              variant="light-primary"
            >
              Wordpress
            </b-badge>
            <b-badge
              class="mr-1 "
              variant="light-success"
            >
              WEBSITES
            </b-badge>
          </b-card-text>

          <!-- TAGS -->
          <span>Tags:
            <b-link class="company-name">
              Digital, Web, Wordpress, Sites
            </b-link>
          </span>

          <!-- TOTAL DE HORAS -->
          <div class="mt-1">
            <feather-icon icon="ClockIcon" />
            <span> 152:24 horas de Vídeos</span>
          </div>

          <!-- BOTÃO INICIAR CURSO -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            class="mt-1"
            size="sm"
            variant="outline-success"
            block
          >
            <feather-icon
              icon="PlayIcon"
              class="mr-50"
            />
            <span class="align-middle">VER CURSO</span>
          </b-button>

        </b-card>
      </b-col>
    </b-row>

    <hr>
    <!-------------------------- DESCRIÇÃO, MÓDULOS E AULAS DO CURSO -------------------------->
    <b-row>
      <b-col class="mt-2" md="12">

        <!-- DESCRIÇÃO DO CURSO -->
        <h3  class="mb-1" >O que você irá aprender no curso:</h3>
        <b-card-text>
          Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </b-card-text>

        <!-- MÓDULOS DO CURSO -->
        <app-collapse
          accordion
          type="margin"
        >

          <app-collapse-item title="1 Módulo: Introdução">
            <b-list-group>
              <b-list-group-item
                button
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>

          <app-collapse-item title="2 Módulo: Introdução ao Wordpress">
            <b-list-group>
              <b-list-group-item
                button
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Biscuit jelly beans macaroon danish pudding.</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>chocolate cheesecake candy</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>

              <b-list-group-item
                disabled
                class="d-flex justify-content-between align-items-center"
              >
                <span>Oat cake icing pastry pie carrot</span>
                <b-badge
                  variant="light-success"
                  pill
                  class="badge-round"
                >
                  <feather-icon
                    icon="PlayIcon"
                    size="16"
                  />
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </app-collapse-item>
        </app-collapse>
      </b-col>

    </b-row>
  </section>
</template>

<script>

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  name: 'MostrarCurso',
  components: {
    AppCollapse,
    AppCollapseItem,
  },
}
</script>

<style scoped>
</style>
