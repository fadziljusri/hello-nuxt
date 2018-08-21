<template>
  <section class="index">
    <form class="form-signin" @submit.prevent="doLogin">
      <app-logo/>

      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <!-- <div>{{l}}</div> -->

      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="l.email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="l.password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
      <small class="text-muted">** just click Sign In **</small>

    </form>
  </section>
</template>

<script>
  import AppLogo from "~/components/AppLogo.vue";
  export default {
    components: {
      AppLogo
    },

    data() {
      return {
        l: {
          email: "test@test.com",
          password: "whydoyouwanttoknowthisdummypassword"
        }
      };
    },

    methods: {
      doLogin() {
        this.$router.push("/dashboard/home");
      }
    }
  };

</script>

<style>
  section.index {
    height: 100vh !important;
    width: 100vw !important;
    text-align: center !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-success{
    background-color: #41B883 !important;
  }

</style>
