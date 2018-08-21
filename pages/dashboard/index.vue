<template>
  <section></section>
</template>


<script>
  export default {
    created() {
      if (this.$route.fullPath == "/dashboard") {
        this.$router.push("/dashboard/home");
      }
    }
  };
</script>
