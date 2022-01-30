<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/"><a href="#" class="brand-logo right">Registro de Usuários</a></router-link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/"><a>Home</a></router-link>
          </li>
          <li>
            <router-link to="/lista-pessoas"
              ><a>Lista de Usuários</a></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav{
  margin: auto;
}
</style>
