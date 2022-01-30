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
                v-model="$v.user.firstName.$model"
              />
              <label for="first_name">Nome</label>
            </div>
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                v-model="$v.user.lastName.$model"
                
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
                v-model="$v.user.cpf.$model"
                maxlength="11"
              />
              <label for="text">CPF</label>
            </div>
          </div>
          <button
            @click="send()"
            :disabled="$v.user.cpf.$invalid == isDisabled || $v.user.lastName.$invalid == isDisabled || $v.user.firstName.$invalid"
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="submit"
          >
            Enviar
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
import UserServices from '../services/UserServices'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'NovaPessoa',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        cpf: ''
      },
      isDisabled: true,
      users: []
    }
  },

  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      cpf: { required }
    }
  },

  methods: {
    send() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        alert('O formulário não pode ser enviado vazio!');
      } else {
        UserServices.save(this.user)
          
          .then(res => {
            this.user = {}
            console.log(res.data)
            document.location.reload();
          })
          .catch(err => {
            console.log(err)
          })
          
      }
    }
  }
}
</script>

<style scoped>
#form-container {
  max-width: 800px;
  margin: auto;
}

.buttons {
  max-width: 800px;
  margin: auto;
}

button {
  margin-right: 5px;
}
</style>
