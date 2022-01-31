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
  nome: 'NoUsers'
}
</script>

<style scoped>
.noUsers {
  text-align: center;
  margin: 30vh auto;
  max-width: 800px;
  min-width: 320px;
  animation: up 7s;
}

@keyframes up {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  75% {
    margin: 30vh auto;
    opacity: 1;
  }
  100% {
    margin: 30vh auto;
    opacity: 1;
  }
}

button {
  margin-top: 20px;
}
</style>
