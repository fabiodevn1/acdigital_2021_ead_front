<template>
  <section>
    <b-card>
      <b-row>
        <b-col>
          <h2>
            Categorias
          </h2>
        </b-col>
      </b-row>
      <b-row class="mt-1">
        <b-col>
          <b-form-group>
            <label label-for="categoria">Titulo da Categoria</label>
            <b-form-input
              id="categoria"
              v-model="categoria"
              placeholder="Titulo da Categoria"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group>
            <label label-for="descrição">Descrição da Categoria</label>
            <b-form-textarea
              id="descrição"
              v-model="descricao"
              placeholder="Descrição da Categoria"
              rows="3"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label>Imagem de Destaque</label>
            <b-form-file
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="Solte o arquivo aqui ..."
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Imagem de Capa</label>
            <b-form-file
              placeholder="Escolha um arquivo ou solte-o aqui ..."
              drop-placeholder="Solte o arquivo aqui ..."
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <label>Selecione o Status</label>
            <v-select
              v-model="status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione o Status"
              label="text"
              :options="ostatus"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <label>Selecione a Cor</label>
            <v-select
              v-model="cor"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Selecione a Cor"
              label="text"
              :options="ocor"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-1">
          <b-button
            variant="gradient-success"
            block
          >
            Salvar Categoria
          </b-button>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'DadosCategorias',
  components: {
    vSelect,
  },
  data() {
    return {
      dir: 'ltr',
      status: '',
      ostatus: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      cor: '',
      ocor: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>

<style scoped>

</style>
