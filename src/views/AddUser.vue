<template>
  <div class="col-6" style="align:center;">
    <form action="/list-user" method="POST" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Name </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Role</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.role"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        name: "",
        role: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.getters.userList.push(this.user);
      this.formatValue();
      alert("Thành công");
    },
    formatValue() {
      document.getElementById("exampleInputEmail1").value = "";
      document.getElementById("exampleInputPassword1").value = "";
    },
  },
};
</script>

<style></style>
