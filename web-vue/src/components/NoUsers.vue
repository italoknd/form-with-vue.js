<template>
  <div>
    <div class="noUsers">
      <h3>Não há usuários cadastrados ainda.</h3>
      <router-link to="/nova-pessoa">
        <button class="btn waves-effect waves-light">
          Fazer um cadastro agora
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  nome: "NoUsers",
}
</script>

<style scoped>
 .noUsers{
   text-align: center;
   margin: 30vh auto;
   max-width: 800px;
   min-width: 320px;
 }

 button{
   margin-top: 20px;
 }
</style>
