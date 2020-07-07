<template>
  <div>
    <h2>List User</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <td>Name</td>
          <td>Role</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
          <td>
            <router-link :to="`/user/${user.id}`" class="btn btn-primary"
              >View</router-link
            >
            ||
            <button class="btn btn-danger" @click="deleteRow(user.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.getters.userList;
    },
  },
  props: {
    idDelete: String,
  },
  methods: {
    deleteRow(id) {
      var entity = this.$store.getters.userList.find((x) => x.id === id);
      var indexEle = this.$store.getters.userList.indexOf(entity);
      this.$store.getters.userList.splice(indexEle, 1);
      console.log(id);
    },
  },
};
</script>

<style></style>
