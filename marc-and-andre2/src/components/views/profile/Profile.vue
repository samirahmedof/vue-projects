<template>
  <div class="userProfile">
    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-7" v-if="$store.getters.getUserStatus=='user'">
        <UserProfile />
      </div>
      <div class="col-7" v-else>
        <ManagerProfile />
      </div>
    </div>
  </div>
</template>
<script>
import UserProfile from "./UserProfile";
import ManagerProfile from "./ManagerProfile";
export default {
  data() {
    return {
      Page: "Profile",
    };
  },
  components: {
    UserProfile,
    ManagerProfile,
  },
};
</script>