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
        <b-col>
          <b-form-group>
            <label>Imagem de Capa</label>
            <v-select
              v-model="selected"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              multiple
              label="title"
              :options="option"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'DadosCategorias',
}
</script>

<style scoped>

</style>
