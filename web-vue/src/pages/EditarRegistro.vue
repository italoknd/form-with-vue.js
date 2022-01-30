<template>
  <div>
    <MensagemConclusao
      :mensagemConclusao="mensagem"
      :nameIcon="checkIcon"
      :color="color"
      :border="border"
      :background="background"
      v-show="mensagem"
    />
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
              <label for="first_name" class="active">Nome</label>
            </div>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                v-model="user.lastName"
                required
              />
              <label for="last_name" class="active">Sobrenome</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input
                type="tel"
                v-mask="'###.###.###-##'"
                class="validate"
                v-model="user.cpf"
                required
              />
              <label for="text" class="active">CPF</label>
            </div>
          </div>
          <router-link to="../lista-pessoas">
            <button
              @click="update()"
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
              :disabled="
                $v.user.cpf.$invalid == isDisabled ||
                  $v.user.lastName.$invalid == isDisabled ||
                  $v.user.firstName.$invalid
              "
            >
              Atualizar Registro
              <i class="material-icons right">send</i>
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'EditarRegistro',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        cpf: ''
      },
      isDisabled: true,
      background: '',
      color: '',
      border: '',
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      cpf: { required, minLength: minLength(14) }
    }
  },

  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      axios
        .get(
          `https://api-register-users.herokuapp.com/users/${
            this.$route.params.id
          }`
        )
        .then(res => {
          const { firstName, lastName, cpf } = res.data
          ;(this.user.firstName = firstName),
            (this.user.lastName = lastName),
            (this.user.cpf = cpf)
          console.log(firstName, lastName)
        })
    },

    update() {
      axios
        .put(
          `https://api-register-users.herokuapp.com/users/${
            this.$route.params.id
          }`,
          this.user
        )
        .then(res => {
          this.user = {}
          document.location.reload()
          console.log(res)
        })
    }
  }
}
</script>

<style scoped>
.active {
  display: block;
  content: '';
  position: absolute;
  top: 10%;
}
</style>
