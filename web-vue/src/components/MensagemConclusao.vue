<template>
  <div
    :style="{ border: border, color: color, background: background }"
    class="message-container"
  >
    <p>
      <strong>{{ mensagemConclusao }} </strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MensagemConclusao',
  props: {
    mensagemConclusao: String,
    background: String,
    color: String,
    border: String
  },
}
</script>

<style scoped>
.message-container {
  border-radius: 5px;
  margin: auto;
  max-width: 250px;
  padding: 10px;
  margin-bottom: 23px;
  animation: fadeOut 7s;
}

@keyframes fadeOut {
  0% {
    opacity: 0;
    margin-top: 30px;
  }
  25% {
    opacity: 1;
    margin-top: 30px;
  }
  50% {
    opacity: 1;
    margin-top: 30px;
  }
  75% {
    opacity: 0;
    margin-top: 30px;
  }
  100% {
    opacity: 0;
    margin-top: -100px;
  }
}

p {
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
</style>
