<template>
  <li class="card-item" :class="{'card-item--unreaded':listitem.readed=='false'}">
    <b-row>
      <b-col cols="8">
        <div class="card-item__head">{{listitem.head}}</div>
      </b-col>
      <b-col cols="4">
        <div class="card-item__date">{{listitem.date}}</div>
      </b-col>
      <b-col cols="12">
        <div class="card-item__text">{{listitem.text}}</div>
        <div class="card-item__media" v-if="listitem.media">
          <!-- <img :src="listitem.media.src" /> -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eEzD-Y97ges"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </b-col>
      <b-col cols="12">
        <div class="card-item__btn" v-if="listitem.button">
          <button
            class="btn btn-pr"
            :class="[{'card-item__btn--more':listitem.button.type==='more'},{'card-item__btn--collect':listitem.button.type==='collect'}]"
          >{{listitem.button.text}}</button>
        </div>
      </b-col>
    </b-row>
  </li>
</template>
<script>
export default {
  props: {
    listitem: {
      type: Object,
      required: true,
    },
  },
};
</script>