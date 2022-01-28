<template>
  <div id="app">
   <!-- <InformacoesGerais /> -->
   <Navbar />
   <router-view></router-view>
  </div>
</template>

<script>
//import InformacoesGerais from './pages/InformacoesGerais.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style>

</style>
