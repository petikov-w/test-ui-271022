<template lang="pug">
swiper(
  class="swiper"
  :modules="modules"
  :initial-slide="0"
  :slides-per-view="1"
  :navigation="{ prevEl: prev, nextEl: next}"
  :pagination="false"
  :loop="false"
  )
  .swiper-button-prev(ref="prev")
  .swiper-button-next(ref="next")

  swiper-slide(v-for="(item, index) in listItems" :key="item.index")
   section-main
      section-top
        img(:src="item.image_a")
        p(v-html="item.text_tab")
      section-image
        img(:src="item.image_main")
      section-list
        .list(v-for="item in item.content_side" :key="index")
         ul(v-if="item.text_visible") {{ item.text }}
           li(v-for="item in item.list_side" :key="index") {{ item }}
         ul(v-else)
          li(v-for="item in item.list_side" :key="index") {{ item }}
      section-button


</template>

<script>
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref} from "vue";

export default {
  name: "slider",
  components: {Swiper, SwiperSlide},
  props: {
    listItems: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const prev = ref(null);
    const next = ref(null);
    const listItems = props.listItems;
    console.log('=======>>>>>>> ',listItems)
    return {prev,
            next,
            listItems,
            modules: [Autoplay,
                      Pagination,
                      Navigation]}
  }

}
</script>

<style lang="scss" scoped>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 24px;
  color: dimgrey;
  font-size: 16px;
}

section-main {
  border: 2px solid #AEB6BB;
  min-width: 77vw;
  section-top {
    display: flex;
    min-width: 77vw;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #AEB6BB;
    img {
      width: 24px;
      margin-left: 15px;
    }
    p {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      margin-left: 20px;
    }
  }
  section-image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 220px;
    }
  }
  section-list {
    .list {
      ul {
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
      }
      li {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-left: 25px;
      }
    }
  }
}
</style>