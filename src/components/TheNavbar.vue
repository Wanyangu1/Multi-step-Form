<template>
  <nav class="navbar navbar-light navbar-expanded-md bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="/src/assets/logo2.1.png" height="62" />
      </router-link>

      <div class="navbar-navbar collaps">
        <ul class="navbar-nav">
          <li class="nav-item">
            <h2 class="h3 text-success">AgriTech-Portal</h2>
          </li>
        </ul>
      </div>

      <div class="d-flex gap-3">
        <RouterLink class="btn btn-outline-success" to="/login"
          >Login</RouterLink
        >
        <RouterLink class="btn btn-success" to="/registration"
          >Sign up</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
