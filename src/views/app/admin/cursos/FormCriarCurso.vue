<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="steps-transparent mb-3"
      @on-complete="formSubmitted"
    >
      <!---------------------------------------------->
      <!-----               CURSOS               ----->
      <!---------------------------------------------->

      <!-- 1° ABA - INFORMAÇÕES BÁSICAS -->
      <tab-content
        title="Curso"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Informações Básicas
            </h5>
            <small class="text-muted">
              Preencha os campos abaixo
            </small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Selecione a Categoria*"
              label-for="i-username"
            >
              <v-select
                placeholder="Selecione a Categoria*"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
              />
            </b-form-group>

            <b-form-group
              label="Nome do Curso*"
              label-for="curso"
            >
              <b-form-input
                id="curso"
                placeholder="Nome do Curso*"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Descrição do Curso*"
              label-for="textarea-default"
            >
              <b-form-textarea
                id="textarea-default"
                placeholder="Descrição do Curso*"
                rows="4"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="Imagem de Destaque"
              label-for="i-password"
            >
              <b-form-file
                placeholder="Escolha um arquivo ou solte-o aqui ..."
                drop-placeholder="Solte o arquivo aqui ..."
                multiple
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Tags"
              label-for="tags"
            >
              <b-form-tags
                v-model="tags"
                input-id="tags-state-event"
                :tag-validator="validator"
                placeholder="Enter tags (3-5 characters) separated by space"
                separator=" "
                @tag-state="onTagState"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- 2° ABA - PRECIFICAÇÃO -->
      <tab-content
        title="Curso"
        icon="feather icon-dollar-sign"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Precificação e Status
            </h5>
            <small class="text-muted">Preencha as informações abaixo.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="valor"
              label="Valor do Curso"
            >
              <b-form-input
                id="valor"
                v-money="money"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Valor Promocional"
              label-for="valorpromo"
            >
              <b-form-input
                id="valorpromo"
                v-money="money"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group
              label="Periódo da Promoção"
              label-for="datapromo"
            >
              <flat-pickr
                v-model="datapromo"
                placeholder="Selecione o periódo"
                class="form-control"
                :config="{ mode: 'range'}"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Selecione o Tipo"
              label-for="privado"
            >
              <v-select
                id="privado"
                placeholder="Selecione o Tipo"
                :options="privado"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Selecione o Status"
              label-for="i-language"
            >
              <v-select
                id="i-language"
                :options="statusCurso"
                placeholder="Selecione o Status"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!---------------------------------------------->
      <!-----               MODULO               ----->
      <!---------------------------------------------->

      <!-- 3° ABA - MODULO -->
      <tab-content
        title="Módulos"
        icon="feather icon-map-pin"
      >
        <tabela-modulos />
      </tab-content>

      <!---------------------------------------------->
      <!-----                AULA                ----->
      <!---------------------------------------------->
      <!-- 4° ABA - AULA -->
      <tab-content
        title="Aulas"
        icon="feather icon-link"
      >
        <tabela-aulas />
      </tab-content>
      <!---------------------------------------------->
      <!-----                LIÇÃO                ----->
      <!---------------------------------------------->
      <!-- 5° ABA - LIÇÕES -->
      <tab-content
        title="Lições"
        icon="feather icon-link"
      >
        <tabela-licoes />
      </tab-content>

      <!---------------------------------------------->
      <!-----             CERTIFICADO            ----->
      <!---------------------------------------------->

      <!-- 5 ABA - CERTIFICADO -->
      <tab-content
        title="Certificado"
        icon="feather icon-link"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Certificado
            </h5>
            <small class="text-muted">Para criar o certificado, preencha os campos abaixo</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Nome do Certificado"
              label-for="i-twitter"
            >
              <b-form-input
                id="i-twitter3"
                placeholder="Nome do Certificado"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Imagem do Certificado"
              label-for="i-facebook"
            >
              <b-form-file
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Tempo do Curso"
              label-for="i-google-plus"
            >
              <b-form-input
                id="i-google-plus"
                placeholder="125:32"
                type="number"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="i-linked-in"
            >
              <v-select
                label="text"
                placeholder="Selecione o Status"
                :options="statusCertificado"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              variant="success"
            >
              SALVAR INFORMAÇÕES
            </b-button>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import { FormWizard, TabContent } from 'vue-form-wizard'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import TabelaAulas from './TabelaAulas.vue'
import TabelaModulos from './TabelaModulos.vue'
import TabelaLicoes from './TabelaLicoes.vue'

export default {
  components: {
    TabelaLicoes,
    TabelaAulas,
    flatPickr,
    FormWizard,
    TabContent,
    TabelaModulos,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      // ----------- 1° Aba -----------
      tags: [],
      validTags: [],
      invalidTags: [],
      duplicateTags: [],
      // ----------- 2° Aba -----------
      money: [],
      datapromo: null,
      // ----------- 3° Aba -----------
      // ----------- 4° Aba -----------
      // ----------- 5° Aba -----------

      // ----------- OPÇÕES -----------
      selectedLanguage: 'nothing_selected',
      statusCurso: [
        { value: 0, text: 'Inativo' },
        { value: 1, text: 'Publicar' },
        { value: 2, text: 'Rascunho' },
      ],
      statusCertificado: [
        { value: 0, text: 'Inativo' },
        { value: 1, text: 'Publicar' },
        { value: 2, text: 'Rascunho' },
      ],
      privado: [
        { value: 1, text: 'Curso Privado' },
        { value: 0, text: 'Curso Gratuito' },
      ],
    }
  },
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid
      this.invalidTags = invalid
      this.duplicateTags = duplicate
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6
    },
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Form Submitted',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
  },
}
</script>
<!-- CSS DA FERRAMENTA DE DATA -->
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
