<template>
  <div>
    <div id="form-container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="first_name"
                type="text"
                class="validate"
                v-model="user.firstName"
                required
              />
              <label for="first_name">Nome</label>
            </div>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                v-model="user.lastName"
                required
              />
              <label for="last_name">Sobrenome</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="text"
                type="text"
                class="validate"
                v-model="user.cpf"
                maxlength="11"
                required
              />
              <label for="text">CPF</label>
            </div>
          </div>
          <button
            @click="update()"
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Atualizar Registro
            <i class="material-icons right">send</i>
          </button>
          <router-link to="lista-pessoas">
            <button
              class="btn waves-effect waves-light pink darken-1"
              name="action"
            >
              Voltar
              <i class="material-icons left">arrow_back</i>
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditarRegistro',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        cpf: ''
      }
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      axios
        .get(`http://localhost:3000/users/${this.$route.params.id}`)
        .then(res => {
          const { firstName, lastName, cpf } = res.data
          ;(this.user.firstName = firstName), (this.user.lastName = lastName), (this.user.cpf = cpf);
          // eslint-disable-next-line no-console
          console.log(firstName, lastName)
        })
    },

    update() {
      axios
        .put(`http://localhost:3000/users/${this.$route.params.id}`, this.user)
        .then(res => {
          this.user = {}
          // eslint-disable-next-line no-console
          console.log(res)
        })
    }
  }
}
</script>
