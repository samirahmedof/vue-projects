<template>
  <div class="visualCatalogPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-lg-7">
        <div class="imageContainer">
          <img :src="visualCatalogData[pageId-1].img" alt="catalog image" />
        </div>
      </div>
      <div class="col-lg-5">
        <div class="aboutText">
          <p>{{visualCatalogData[pageId-1].text}}</p>
        </div>
        <div class="btnRow text-center">
          <router-link class="btn btn-pr" to="/orders">Back to orders</router-link>
          <router-link class="btn btn-pr" to="/catalog">Continue order</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Page: "Visual Catalog",
      visualCatalogData: [
        {
          id: "1",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi quisquam ipsa voluptatem animi possimus neque commodi. Vitae quasi doloribus ex minima dolore? Ex labore nemo alias expedita ipsa dolorum.",
          img: "https://via.placeholder.com/1500x1000",
        },
        {
          id: "2",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi quisquam ipsa voluptatem animi possimus neque commodi. Vitae quasi doloribus ex minima dolore? Ex labore nemo alias expedita ipsa dolorum.",
          img: "https://via.placeholder.com/1200x190",
        },
        {
          id: "3",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nisi quisquam ipsa voluptatem animi possimus neque commodi. Vitae quasi doloribus ex minima dolore? Ex labore nemo alias expedita ipsa dolorum.",
          img: "src/assets/img/visualcatalog.jpg",
        },
      ],
      pageId: this.$route.params.id,
    };
  },
};
</script>