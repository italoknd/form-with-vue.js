<template>
  <div>
    <div class="home">
      <router-link to="/nova-pessoa">
        <a class="btn-floating btn-large waves-effect waves-light red"
          ><i class="material-icons">add</i>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
  .home{
    margin: 10px 20px;
  }
</style>
