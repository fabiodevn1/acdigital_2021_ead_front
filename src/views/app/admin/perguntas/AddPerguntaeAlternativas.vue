<template>
  <div>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      finish-button-text="Salvar"
      back-button-text="Voltar"
      class="steps-transparent mb-3"
      @on-complete="formSubmitted"
    >
      <!-- PERGUNTA S -->
      <tab-content
        title="Pergunta"
        icon="feather icon-file-text"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Pergunta
            </h5>
            <small class="text-muted">
              Preencha os campos abaixo
            </small>
          </b-col>
          <!-------------------------- SELECIONE A AULA -------------------------->
          <b-col md="6">
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
          <b-col md="6">
            <b-form-group
              label="Informe quantos pontos"
              label-for="infoPontos"
            >
              <b-form-spinbutton
                id="infoPontos"
                min="1"
                max="10"
                placeholder="0"
              />
            </b-form-group>
          </b-col>

          <!-------------------------- TITÚLO DA PERGUNTA -------------------------->
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

          <!-------------------------- DESCRIÇÃO DA PERGUNTA -------------------------->
          <b-col md="12">
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
      </tab-content>

      <!-- ALTERNATIVAS DA PERGUNTAS -->
      <tab-content
        title="Alternativas da Pergunta"
        icon="feather icon-list"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Alternativas da Pergunta
            </h5>
            <small class="text-muted">Adicione as alternativas e selecione a(s) correta(s) </small>
          </b-col>
          <!--          -->
          <b-col md="10">
            <b-form-group>
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-form-checkbox
                    name="checkbox-input"
                  />
                </b-input-group-prepend>
                <b-form-input placeholder="Escreva uma resposta de opção ..." />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="2">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="gradient-success"
              class="btn-icon rounded-circle"
            >
              <feather-icon icon="PlusIcon" />
            </b-button>
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-danger"
              class="btn-icon rounded-circle ml-1"
            >
              <feather-icon icon="Trash2Icon" />
            </b-button>
          </b-col>
        </b-row>
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue'

export default {
  name: 'AddPerguntaeAlternativas',
  components: {
    FormWizard,
    TabContent,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      selectedContry: 'select_value',
      selectedLanguage: 'nothing_selected',
      countryName: [
        { value: 'select_value', text: 'Select Value' },
        { value: 'Russia', text: 'Russia' },
        { value: 'Canada', text: 'Canada' },
        { value: 'China', text: 'China' },
        { value: 'United States', text: 'United States' },
        { value: 'Brazil', text: 'Brazil' },
        { value: 'Australia', text: 'Australia' },
        { value: 'India', text: 'India' },
      ],
      languageName: [
        { value: 'nothing_selected', text: 'Nothing Selected' },
        { value: 'English', text: 'English' },
        { value: 'Chinese', text: 'Mandarin Chinese' },
        { value: 'Hindi', text: 'Hindi' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Arabic', text: 'Arabic' },
        { value: 'Malay', text: 'Malay' },
        { value: 'Russian', text: 'Russian' },
      ],
    }
  },
  methods: {
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
