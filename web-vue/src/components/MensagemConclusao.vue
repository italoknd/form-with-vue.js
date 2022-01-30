<template>
  <div class="message-container">
    <p>
      <strong>{{ mensagemConclusao }}<ion-icon name="checkmark-outline"></ion-icon></strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MensagemConclusao',
  props: {
    mensagemConclusao: String,
  }
}
</script>

<style scoped>
.message-container {
  color: #4CAF50;
  /* background: #cce5ff; */
  border: 2px solid #4CAF50;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
  max-width: 300px;
  margin-bottom: 30px;
  animation: fadeOut 7s;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
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
    margin-top: -120px;
  }
}

p {
  text-align: center;
}
</style>
