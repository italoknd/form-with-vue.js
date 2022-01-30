/* eslint-disable no-console */
<template>
  <div>
    <MensagemConclusao
      :mensagemConclusao="mensagem"
      :nameIcon="checkIcon"
      :background="background"
      :color="color"
      :border="border"
      v-show="mensagem"
    />
    <NoUsers v-if="users == 0" />
    <table v-if="users != 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>CPF</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.cpf }}</td>
          <td>
            <div class="links">
              <router-link
                :to="{ name: 'EditarRegistro', params: { id: user.id } }"
              >
                <a class="waves-effect waves-light btn-small yellow accent-4"
                  >Editar</a
                >
              </router-link>
              <a
                @click="remove(user)"
                class="waves-effect waves-light btn-small red darken-4"
                >Excluir</a
              >
            </div>
          </td>
        </tr>
        <router-link to="/nova-pessoa">
          <button class="btn waves-effect waves-light">
            Fazer um cadastro
          </button>
        </router-link>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'
import NoUsers from '../components/NoUsers.vue'
import MensagemConclusao from '../components/MensagemConclusao.vue'

export default {
  name: 'ListaUsuarios',
  data() {
    return {
      users: [],
      mensagem: '',
      checkIcon: 'close-outline',
      background: '#B71C1C',
      color: 'white',
      border: ' 2px solid #B71C1C'
    }
  },
  components: {
    NoUsers,
    MensagemConclusao
  },
  mounted() {
    this.findAllUsers()
  },
  methods: {
    findAllUsers() {
      UserServices.findAll()
        .then(res => {
          this.users = res.data
          // eslint-disable-next-line no-console
          console.log(this.users)
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    },

    remove(user) {
      UserServices.delete(user)
        .then(() => {
          this.findAllUsers()
          this.mensagem = 'Usuário deletado com sucesso!'

          setTimeout(() => {
            this.mensagem = ''
          }, 7000)
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
div {
  max-width: 800px;
  margin: auto;
}

button {
  margin-top: 20px;
}

.links {
  display: flex;
  justify-content: flex-end;
  max-width: 344px;
}

.btn-small {
  margin-left: 10px;
}
</style>
