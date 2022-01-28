<template>
  <div>
    <div class="row">
      <form class="col s12" id="myform">
        <div class="row">
          <div class="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              class="validate"
              v-model="user.firstName"
            />
            <label for="first_name">Nome</label>
          </div>
          <div class="input-field col s6">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="user.lastName"
            />
            <label for="last_name">Sobrenome</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s6">
            <input id="text" type="text" class="validate" v-model="user.cpf" />
            <label for="text">CPF</label>
          </div>
        </div>
      </form>
      <router-link to="/">
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
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Enviar
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'

export default {
  name: 'NovaPessoa',

  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        cpf: ''
      },
      users: []
    }
  },
  methods: {
    send() {
      //e.preventDefault();
      UserServices.save(this.user).then((res)=>{
        this.user = {}
        // eslint-disable-next-line no-console
        console.log(res.data);
      }).catch((err)=>{
        // eslint-disable-next-line no-console
        console.log(err);
      })
    }
  }
}
</script>
