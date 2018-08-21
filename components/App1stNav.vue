<template>
  <section>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <a class="navbar-brand mr-auto mr-lg-0" href @click.prevent>Nuxt Vue.js</a>
      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-0 ml-lg-5 mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="/dashboard/home">Dashboard
              <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href @click.prevent>Action</a>
              <a class="dropdown-item" href @click.prevent>Another action</a>
              <a class="dropdown-item" href @click.prevent>Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://fadziljusri.github.io/Hello-Nuxt" target="_blank">
              <i class="fab fa-github"></i></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <nuxt-link to="/">
            <button class="btn btn-light my-2 my-sm-0" type="button"><i class="fas fa-sign-out-alt"></i> Sign Out</button>
          </nuxt-link>

        </form>
      </div>
    </nav>
  </section>
</template>

<script>
  import $ from "jquery";

  export default {
    mounted() {
      $('[data-toggle="offcanvas"]').on("click", function () {
        $(".offcanvas-collapse").toggleClass("open");
      });
    }
  };

</script>


<style>
  @media (max-width: 991.98px) {
    .offcanvas-collapse {
      position: fixed;
      top: 56px;
      /* Height of navbar */
      bottom: 0;
      left: 100%;
      width: 100%;
      padding-right: 1rem;
      padding-left: 1rem;
      overflow-y: auto;
      visibility: hidden;
      background-color: #343a40;
      transition-timing-function: ease-in-out;
      transition-duration: 0.3s;
      transition-property: left, visibility;
    }
    .offcanvas-collapse.open {
      left: 0;
      visibility: visible;
    }
    .navbar-toggler:focus {
      outline: none !important;
    }
  }

</style>
