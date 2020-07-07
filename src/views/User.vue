<template>
  <div>
    <router-link to="/list-user">Back</router-link>
    <div v-if="user">
      <h1>{{ user.name }}</h1>
      <p>{{ user.role }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user(parseInt(this.$route.params.id));
    },
  },
};
</script>

<style></style>
