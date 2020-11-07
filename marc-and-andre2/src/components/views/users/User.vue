<template>
  <tr
    :class="[{'isNotActive':user.status=='isNotActive'},{'active':user.status=='active'}]"
    @click="goToOrders"
  >
    <td>{{user.regDate}}</td>
    <td @click.stop v-if="$store.getters.getUserStatus=='rop'" class="text-center">
      {{user.fullname}}
      <div class="editUser">
        <router-link :to="userlink">
          <i class="fas fa-edit"></i>
        </router-link>
      </div>
    </td>
    <td @click.stop v-else class="text-center">
      {{user.fullname}}
      <div class="viewUser">
        <router-link :to="userlink">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
    </td>
    <td @click.stop v-if="$store.getters.getUserStatus=='rop'" class="text-center">
      {{user.company}}
      <div class="editUser">
        <router-link :to="userlink">
          <i class="fas fa-edit"></i>
        </router-link>
      </div>
    </td>
    <td @click.stop v-else class="text-center">
      {{user.company}}
      <div class="viewUser text-center">
        <router-link :to="userlink">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
    </td>
    <!-- <td>{{user.tin}}</td> -->
    <td>{{user.phone}}</td>
    <td>{{user.email}}</td>
    <td>{{user.country}}</td>
    <td>{{user.city}}</td>
    <!-- <td>{{user.zip}}</td> -->
    <!-- <td>{{user.address}}</td> -->
    <!-- <td>{{user.activeAddress}}</td> -->
    <td @click.stop v-if="$store.getters.getUserStatus=='rop'">
      <div class="userStatus text-center">
        <select class="form-control" v-model="status">
          <option value="active">Active</option>
          <option value="isNotActive">Is not active</option>
          <option value="archive">Archive</option>
        </select>
        <button class="btn btn-pr btn-sm mt-1" @click.prevent="acceptStatus">OK</button>
      </div>
    </td>
    <td v-else>{{user.status}}</td>
    <td>{{user.activeOrders}}</td>
    <td>{{user.lastChange}}</td>
    <td @click.stop v-if="$store.getters.getUserStatus == 'rop'">
      <div class="userStatus text-center">
        <select class="form-control" v-model="manager">
          <option value="1">manager 1</option>
          <option value="2">manager 2</option>
          <option value="3">manager 3</option>
        </select>
        <button class="btn btn-pr btn-sm mt-1">OK</button>
      </div>
    </td>
    <td v-else>{{user.manager}}</td>
    <!-- <td>{{user.activate}}</td> -->
    <!-- <td @click.stop v-if="$store.getters.getUserStatus=='rop'">
      <div class="editUser text-center">
        <router-link :to="userlink">
          <i class="fas fa-edit"></i>
        </router-link>
      </div>
    </td>-->
    <!-- <td @click.stop v-else>
      <div class="viewUser text-center">
        <router-link :to="userlink">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
    </td>-->
    <td>{{user.type}}</td>
  </tr>
</template>
<script>
export default {
  props: ["user", "index"],
  data() {
    return {
      status: this.user.status,
      manager: "1",
    };
  },
  methods: {
    acceptStatus() {
      this.$emit("changedStatus", { id: this.user.id, status: this.status });
    },
    goToOrders() {
      if (this.user.status == "active") {
        this.$router.push("/orders");
      }
    },
  },
  computed: {
    userlink() {
      return `/users/${this.index + 1}`;
    },
  },
};
</script>