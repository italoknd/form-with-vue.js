/* eslint-disable no-console */
<template>
  <div>
    <NoUsers />
    <table v-if="users != 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>CPF</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.cpf }}</td>
          <td>
            <div>
              <a
                @click="update(user)"
                class="waves-effect waves-light btn-small yellow accent-4"
                >Editar</a
              >
              <a
                @click="remove(user)"
                class="waves-effect waves-light btn-small red darken-4"
                >Excluir</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserServices from '../services/UserServices'
import NoUsers from '../components/NoUsers.vue'

export default {
  name: 'ListaUsuarios',
  data() {
    return {
      users: [],
    }
  },
  components:{
    NoUsers,
  },
  mounted() {
    this.findAllUsers();
  },
  methods: {
    findAllUsers(){
      UserServices.findAll().then((res) => {
        this.users = res.data
        // eslint-disable-next-line no-console
        console.log(this.users);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
    remove(user){
      UserServices.delete(user).then(()=>{
        this.findAllUsers();
      }).catch((err)=>{
        // eslint-disable-next-line no-console
        console.log(err);
      })
    }
  },
}
</script>

<style scoped>
 div{
   margin: 20px 10px 0px 10px;
 }
</style>