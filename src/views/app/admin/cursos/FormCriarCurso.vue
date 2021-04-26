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
      <!-- account detail tab -->
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
              label="Nome do Curso"
              label-for="curso"
            >
              <b-form-input
                id="curso"
                placeholder="Nome do Curso"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Password"
              label-for="textarea-default"
            >
              <b-form-textarea
                id="textarea-default"
                placeholder="Textarea"
                rows="4"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="Password"
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
              label="Confirm Password"
              label-for="i-c-password"
            >
              <b-form-input
                id="i-c-password"
                type="password"
                placeholder="Re-type Password"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- personal details -->
      <tab-content
        title="Personal Info"
        icon="feather icon-user"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Personal Info
            </h5>
            <small class="text-muted">Enter Your Personal Info.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-first-name"
              label="First Name"
            >
              <b-form-input
                id="i-first-name"
                placeholder="John"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Last Name"
              label-for="i-last-name"
            >
              <b-form-input
                id="i-last-name"
                placeholder="Doe"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Country"
              label-for="i-country"
            >
              <v-select
                id="i-country"
                v-model="selectedContry"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="countryName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Language"
              label-for="i-language"
            >
              <v-select
                id="i-language"
                v-model="selectedLanguage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="languageName"
                :selectable="option => ! option.value.includes('select_value')"
                label="text"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- address -->
      <tab-content
        title="Address"
        icon="feather icon-map-pin"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Address
            </h5>
            <small class="text-muted">Enter Your Address.</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Address"
              label-for="i-address"
            >
              <b-form-input
                id="i-address"
                placeholder="98 Borough bridge Road, Birmingham"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Landmark"
              label-for="i-landmark"
            >
              <b-form-input
                id="i-landmark"
                placeholder="Borough bridge"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Pincode"
              label-for="i-pincode"
            >
              <b-form-input
                id="i-pincode"
                placeholder="658921"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="i-city"
              label="City"
            >
              <b-form-input
                id="i-city"
                placeholder="Birmingham"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!-- social link -->
      <tab-content
        title="Social Links"
        icon="feather icon-link"
      >
        <b-row>
          <b-col
            cols="12"
            class="mb-2"
          >
            <h5 class="mb-0">
              Social Links
            </h5>
            <small class="text-muted">Enter Your Social Links</small>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Twitter"
              label-for="i-twitter"
            >
              <b-form-input
                id="i-twitter"
                placeholder="https://twitter.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Facebook"
              label-for="i-facebook"
            >
              <b-form-input
                id="i-facebook"
                placeholder="https://facebook.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Google+"
              label-for="i-google-plus"
            >
              <b-form-input
                id="i-google-plus"
                placeholder="https://plus.google.com/abc"
              />
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="LinkedIn"
              label-for="i-linked-in"
            >
              <b-form-input
                id="i-linked-in"
                placeholder="https://linkedin.com/abc"
              />
            </b-form-group>
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
