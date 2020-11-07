<template>
  <div class="aboutPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-md-7">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo omnis voluptate illum eveniet a tempore sint cumque hic eius. Eaque fugiat deserunt iure optio perferendis sequi cumque natus culpa quasi.</p>
      </div>
      <div class="col-md-5">
        <div class="imgContainer">
          <img src="src/assets/img/img.png" alt="About" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Page: "About",
    };
  },
};
</script>