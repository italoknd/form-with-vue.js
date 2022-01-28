<template>
  <div>
    <div class="row">
      <form class="col s12" id="myform">
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
            <input id="text" type="text" class="validate" v-model="user.cpf" maxlength="11" required/>
            <label for="text">CPF</label>
          </div>
        </div>
      </form>
    </div>
      <div class="buttons">
        <router-link to="/lista-pessoas">
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

<style scoped>
  #myform{
    max-width: 800px;
    margin: 5vh 30vw;
  }

  .buttons{
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: auto 30.5vw;
  }
</style>
