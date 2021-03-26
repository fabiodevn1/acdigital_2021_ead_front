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
              placeholder="Selecione o Status"
              label="text"
              :options="ostatus"
            />
          </b-form-group>
        </b-col>
        <b-col
          md="6"
          class="mt-2"
        >
          <b-button
            variant="gradient-success"
            block
            @click="Salvar_Dados"
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
      categoria: '',
      descricao: '',
      destaque: '',
      capa: '',
      status: '',
      cor: '',
      ostatus: [
        { value: null, text: 'Por Favor Selecione' },
        { value: 0, text: 'Desativado' },
        { value: 1, text: 'Ativo' },
        { value: 2, text: 'Lixeira' },
      ],
    }
  },
  mounted() {
    const Categoria = this.$store.state.categoria
    if (Categoria) {
      this.id = Categoria.id
      this.categoria = Categoria.titulo
      this.descricao = Categoria.descricao
    }
  },
  methods: {
    Salvar_Dados() {
      const obj = {
        id: this.id,
        titulo: this.categoria,
        descricao: this.descricao,
        status: this.status.value,
      }
      console.log(obj)
      if (this.id === undefined) {
        this.$http.post('admin/categorias', obj).then(resp => {
          this.data = resp.data
        })
        return
      }

      this.$http.put(`admin/categorias${this.id}`, obj).then(resp => {
        this.data = resp.data
        this.$emit('reloadt')
        console.log('editar')
      })
    },
  },
}
</script>

<style scoped>

</style>
