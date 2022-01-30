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
                v-mask="'###.###.###-##'"
                type="tel"
                class="validate"
                v-model="$v.user.cpf.$model"
              />
              <label for="text">CPF</label>
            </div>
          </div>
          <router-link to="lista-pessoas">
            <button
              class="btn waves-effect waves-light pink darken-1"
              name="action"
            >
              Voltar
              <i class="material-icons left">arrow_back</i>
            </button>
          </router-link>
          <button
            @click="send()"
            :disabled="
              $v.user.cpf.$invalid == isDisabled ||
                $v.user.lastName.$invalid == isDisabled ||
                $v.user.firstName.$invalid
            "
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
            id="submit"
          >
            Enviar
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'
import { required, minLength } from 'vuelidate/lib/validators'
import MensagemConclusao from '../components/MensagemConclusao.vue'

export default {
  components: { MensagemConclusao },
  name: 'NovaPessoa',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        cpf: ''
      },
      isDisabled: true,
      users: [],
      mensagem: '',
      checkIcon: 'checkmark-outline',
      background: '#4CAF50',
      color: 'white',
      border: ' 2px solid #4CAF50',
    }
  },

  component: {
    MensagemConclusao
  },

  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      cpf: { required, minLength: minLength(14) }
    }
  },

  methods: {
    send() {
      this.$v.$touch()

      if (this.$v.$invalid) {
        alert('O formulário não pode ser enviado vazio!')
      } else {
        UserServices.save(this.user)

          .then(res => {
            this.user = {}
            console.log(res.data)
            this.mensagem = 'Dados enviados com sucesso!'

            setTimeout(() => {
              this.mensagem = ''
              document.location.reload()
            }, 7000)
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
